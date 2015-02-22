var GHClient = require('..');
var assert = require('assert');

describe('spread', function() {

  describe('default', function() {
    var ghClient;

    before(function() {
      ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN, spread: true });
    });

    it('listForAuthUser', function(done) {
      ghClient.user.getAuthUser()
        .spread(function(user, response) {
          assert(user);
          assert(response);
          assert.strictEqual(response.statusCode, 200);
        })
        .nodeify(done);
    });

    it('listForAuthUser', function(done) {
      ghClient.user.getAuthUser({ spread: false })
        .then(function(user) {
          assert(user);
          assert(!Array.isArray(user));
        })
        .nodeify(done);
    });

  });

  describe('default', function() {
    var ghClient;

    before(function() {
      ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
    });

    it('listForAuthUser', function(done) {
      ghClient.user.getAuthUser()
        .then(function(user) {
          assert(user);
          assert(!Array.isArray(user));
        })
        .nodeify(done);
    });

    it('listForAuthUser', function(done) {
      ghClient.user.getAuthUser({ spread: true })
        .spread(function(user, response) {
          assert(user);
          assert(response);
          assert.strictEqual(response.statusCode, 200);
        })
        .nodeify(done);
    });

  });

});
