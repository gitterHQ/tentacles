var GHClient = require('../..');
var assert = require('assert');

describe('userFollower', function() {
  var ghClient;

  before(function() {
    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('listForUser', function(done) {
    ghClient.userFollower.listForUser('suprememoocow')
      .then(function(followers) {
        assert(Array.isArray(followers));
      })
      .nodeify(done);
  });

  it('listForAuthUser', function(done) {
    ghClient.userFollower.listForAuthUser()
      .then(function(followers) {
        assert(Array.isArray(followers));
      })
      .nodeify(done);
  });

  it('listFollowingForUser', function(done) {
    ghClient.userFollower.listFollowingForUser('suprememoocow')
      .then(function(following) {
        assert(Array.isArray(following));
      })
      .nodeify(done);
  });

  it('listFollowingForAuthUser', function(done) {
    ghClient.userFollower.listFollowingForAuthUser()
      .then(function(following) {
        assert(Array.isArray(following));
      })
      .nodeify(done);
  });

  it('checkAuthUserFollowing', function(done) {
    ghClient.userFollower.checkAuthUserFollowing('suprememoocow')
      .then(function(result) {
        assert(result === true || result === false);
      })
      .nodeify(done);
  });

  it('checkFollowing', function(done) {
    ghClient.userFollower.checkFollowing('suprememoocow', 'saulklein')
      .then(function(result) {
        assert.strictEqual(result, true);
      })
      .nodeify(done);
  });

});
