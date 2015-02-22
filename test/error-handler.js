var GHClient = require('..');
var assert = require('assert');

describe('error-handler', function() {

  it('listForAuthUser', function(done) {
    var count = 0;
    var ghClient = new GHClient({ errorHandler: function(err) {
      count++;
      assert(err);
      assert.strictEqual(err.statusCode, 401);
      assert(err.headers);
      assert(err.response);
    }});

    ghClient.user.getAuthUser()
      .then(function(user) {
        assert(!user);
        assert.strictEqual(1, count);
      })
      .nodeify(done);
  });

});
