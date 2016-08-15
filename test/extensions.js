'use strict';

var GHClient = require('..');
var assert = require('assert');

describe('extensions', function() {

  it('should allow extensions to be specified', function(done) {
    var ghClient = new GHClient({
      extensions: [function(options, callback/*, next */) {
        /* Shortcut extension */
        callback(null, { statusCode: 200 }, { fakeUser: true });
      }]
    });

    ghClient.user.getAuthUser()
      .then(function(body) {
        assert.deepEqual(body, { fakeUser: true });
      })
      .nodeify(done);
  });

});
