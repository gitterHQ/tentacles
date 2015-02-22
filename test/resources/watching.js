var GHClient = require('../..');
var assert = require('assert');

describe('user', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('listForRepo', function(done) {
    ghClient.watching.listForRepo('gitterHQ/gitter')
      .then(function(users) {
        assert(Array.isArray(users));
        assert(users.length > 0);
      })
      .nodeify(done);
  });

  it('listForUser', function(done) {
    ghClient.watching.listForUser('suprememoocow')
      .then(function(users) {
        assert(Array.isArray(users));
        assert(users.length > 0);
      })
      .nodeify(done);
  });

  it('listForAuthUser', function(done) {
    ghClient.watching.listForAuthUser()
      .then(function(repos) {
        assert(Array.isArray(repos));
      })
      .nodeify(done);
  });

  it('getSubscriptionForAuthUser', function(done) {
    ghClient.watching.getSubscriptionForAuthUser('gitterHQ/gitter')
      .then(function(subscription) {
        console.log(subscription);
      })
      .nodeify(done);
  });

  it('checkWatchForAuthUser', function(done) {
    ghClient.watching.checkWatchForAuthUser('gitterHQ/gitter')
      .then(function(isWatching) {
        assert(isWatching === true || isWatching === false);
      })
      .nodeify(done);
  });

});
