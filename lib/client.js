'use strict';

var _ = require('lodash');
var request = require('request');
var url = require('url');
var errors = require('./errors');
var requestExt = require('request-extensible');
Client.PACKAGE_VERSION = require('../package.json').version;

var resources = require('./resources');
Client.resources = resources;

/* Constructs the request which the client will use */
function getRequestLib(options) {
  var underlyingRequest = options.request || request;
  /* If extensions have been specified, use request-extensible */
  if (options.extensions) {
    return requestExt({
      request: underlyingRequest,
      extensions: options.extensions
    });
  }

  return underlyingRequest;
}

function Client(options) {
  if (!options) options = {};
  this.spread = options.spread;
  this.accessToken = options.accessToken;
  this.requestLib = getRequestLib(options);
  this.defaultHeaders = _.extend({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'Tentacles/' + Client.PACKAGE_VERSION
  }, options.headers);

  this.anonymousClientId = options.anonymousClientId;
  this.anonymousClientSecret = options.anonymousClientSecret;
  this.clientId = options.clientId;
  this.clientSecret = options.clientSecret;

  this.errorHandler = options.errorHandler;

  this._prepResources();
}

Client.prototype = {
  _prepResources: function() {

    for (var name in resources) {
      var camelCaseName = name[0].toLowerCase() + name.substring(1);
      this[camelCaseName] = new resources[name](this);
    }

  },

  _request: function(method, path, data, spec, options) {
    var self = this;

    var headers = _.extend({}, this.defaultHeaders, spec.headers, options.headers);

    if (options.accessToken || this.accessToken) {
      headers.Authorization = 'token ' + (options.accessToken || this.accessToken);
    } else {
      // Use the anonymous application if set
      if (this.anonymousClientId && this.anonymousClientSecret) {
        if (!options.query) options.query = {};
        options.query.client_id = this.anonymousClientId;
        options.query.client_secret = this.anonymousClientSecret;
      }

      // Otherwise, use the default application, if set
      if (this.clientId && this.clientSecret) {
        if (!options.query) options.query = {};
        options.query.client_id = this.clientId;
        options.query.client_secret = this.clientSecret;
      }
    }

    var uri = url.format({
      protocol: "https:",
      host: "api.github.com",
      pathname: path,
      query: options.query
    });


    // Pass the options through to the extensions, but don't include the options
    // that have been mutated by this method
    var passThroughOptions = _.omit(options, 'query', 'accessToken', 'spread', 'headers', 'body', 'url', 'json', 'followRedirect', 'followAllRedirects');

    var requestOptions = _.defaults({
      method: method,
      uri: uri,
      headers: headers,
      body: data,
      json: !!data,
      gzip: true,
      encoding: options.encoding === undefined ? 'utf8' : options.encoding,
      followRedirect: true,
      followAllRedirects: true, // Redirects for non-GET requests
    }, passThroughOptions);

    var promise = new Client.Promise(function(resolve, reject) {

      function success(body, response) {
        if (options.spread === undefined ? self.spread : options.spread) {
          resolve([body, response]);
        } else {
          resolve(body);
        }
      }

      self.requestLib(requestOptions, function(err, response, body) {
        if (err) {
          err.response = response;
          return reject(err);
        }

        if (spec.checkOperation) {
          /* 404 means "false" */
          if (response.statusCode === 404) {
            return success(false, response);
          }

          /* 2XX means "true" */
          if (response.statusCode < 300) {
            return success(true, response);
          }
        }

        if (options.treat404asEmpty && response.statusCode === 404) {
          return success(null, response);
        }

        try {
          var parsedBody = self._parseBody(response, body);

          if (response.statusCode >= 400) {
            var message = typeof parsedBody.message === 'string' ? parsedBody.message.replace(/\n+/g, ' ') : "HTTP " + response.statusCode;
            return reject(new errors.TentaclesGitHubError(message, {
              url: uri,
              statusCode: response.statusCode,
              headers: response.headers,
              body: parsedBody || body
            }));
          }

          return success(parsedBody, response);

        } catch(e) {
          return reject(e);
        }

      });

    });

    /* Custom error handler */
    if (this.errorHandler) {
      return promise.catch(this.errorHandler);
    }

    return promise;
  },

  _parseBody: function(response, body) {
    if (typeof body !== 'string') return body;

    // TODO: deal with various types
    var contentType = response.headers['content-type'];
    if (contentType) {
      var ct = contentType.split(';')[0];

      if (ct === 'application/json') {
        return JSON.parse(body);
      }

    }

    return body;
  }

};

Client.Promise = require('bluebird');
module.exports = Client;
