'use strict';

var _ = require('lodash');
var request = require('request');
var Q = require('q');
var url = require('url');
Client.PACKAGE_VERSION = require('../package.json').version;

var resources = require('./resources');
Client.resources = resources;

function Client(options) {
  if (!options) options = {};
  this.spread = options.spread;
  this.accessToken = options.accessToken;
  this.requestLib = options.request || request;
  this.defaultHeaders = _.extend({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'Gitter GitHub Client/' + Client.PACKAGE_VERSION
  }, options.headers);

  this._prepResources();
}

Client.prototype = {
  _prepResources: function() {

    for (var name in resources) {
      this[
        name[0].toLowerCase() + name.substring(1)
      ] = new resources[name](this);
    }

  },

  _request: function(method, path, data, spec, options) {
    var self = this;

    var headers = _.extend({}, this.defaultHeaders, spec.headers, options.headers);

    if (options.accessToken || this.accessToken) {
      headers.Authorization = 'token ' + (options.accessToken || this.accessToken);
    }

    var d = Q.defer();

    var uri = url.format({
      protocol: "https:",
      host: "api.github.com",
      pathname: path,
      query: options.query
    });

    var useSpread = options.spread !== undefined  ? options.spread : this.spread;

    function spreadResponse(body, response) {
      d.resolve([body, response]);
    }

    function noSpreadResponse(body) {
      d.resolve(body);
    }

    var resolve = useSpread ? spreadResponse : noSpreadResponse;

    request({
      method: method,
      uri: uri,
      headers: headers,
      body: data,
      json: !!data,
      encoding: options.encoding === undefined ? 'utf8' : options.encoding
    }, function(err, response, body) {
      if (err) {
        err.respone = response;
        return d.reject(err);
      }

      if (spec.checkOperation) {
        /* 404 means "false" */
        if (response.statusCode === 404) {
          return resolve(false, response);
        }

        /* 2XX means "true" */
        if (response.statusCode < 300) {
          return resolve(true, response);
        }
      }

      if (options.treat404asEmpty && response.statusCode === 404) {
        return resolve(null, response);
      }

      try {
        var parsedBody = self._parseBody(response, body);

        if (response.statusCode >= 400) {
          var message = parsedBody.message || "HTTP " + response.statusCode;
          var responseError = new Error(message);
          /* TODO: normalise this */
          responseError.statusCode = response.statusCode;
          responseError.headers = response.headers;
          responseError.response = response;
          return d.reject(responseError);
        }

        return resolve(parsedBody, response);

      } catch(e) {
        return d.reject(e);
      }

    });

    return d.promise;
  },

  _parseBody: function(response, body) {
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

module.exports = Client;
