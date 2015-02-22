'use strict';

/**
 * https://gist.github.com/padolsey/6008842
 * Outputs a new function with interpolated object property values.
 * Use like so:
 *   var fn = makeURLInterpolator('some/url/:param1/:param2');
 *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
 */
var rc = {
  '\n': '\\n', '\"': '\\\"',
  '\u2028': '\\u2028', '\u2029': '\\u2029'
};

module.exports = function makeURLInterpolator(str) {
  return new Function(
    'o',
    'return "' + (
      str
      .replace(/["\n\r\u2028\u2029]/g, function($0) {
        return rc[$0];
      })
      .replace(/:(\w+)/g, '" + encodeURI(o["$1"]) + "')
    ) + '";'
  );
};
