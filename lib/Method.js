'use strict';

var _ = require('lodash');
var makeURLInterpolator = require('./url-interpolator');

/**
 * Create an API method from the declared spec.
 */
module.exports = function method(spec) {

  var commandPath = typeof spec.path == 'function' ? spec.path
                  : makeURLInterpolator( spec.path || '' );
  var requestMethod = (spec.method || 'GET');
  var urlParams = spec.urlParams || [];

  return function() {
    var self = this;
    var args = [].slice.call(arguments);

    var urlData = {};

    for (var i = 0, l = urlParams.length; i < l; ++i) {
      var arg = args[0];
      var param = urlParams[i];

      if (!arg) {
        throw new Error('require argument "' + urlParams[i] + '", but I got: ' + arg);
      }

      urlData[param] = args.shift();
    }

    var data;
    if (args.length && spec.method !== 'GET') {
      data = args.shift();
    }

    var options = _.extend({ }, spec.options, args.shift());

    if (args.length) {
      throw new Error('Unknown arguments (' + args + ').');
    }

    var requestPath = commandPath(urlData);
    return self._client._request(requestMethod, requestPath, data, spec, options);
  };
};
