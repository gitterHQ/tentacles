var GHClient = require('../..');
var assert = require('assert');

describe('user', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('should find users', function(done) {
    ghClient.user.get('suprememoocow')
      .then(function(user) {
        assert.strictEqual('suprememoocow', user.login);
      })
      .nodeify(done);
  });

  it('should return null for non-existent users', function(done) {
    ghClient.user.get('adsdsaqwheqwoieoqiweu')
      .then(function(user) {
        assert(!user);
      })
      .nodeify(done);
  });

  it('should get an authenticated user', function(done) {
    ghClient.user.getAuthUser()
      .then(function(user) {
        assert(user.login);
      })
      .nodeify(done);
  });

  it('should find a user by his ID', function(done) {
    ghClient.user.getById(594566)
      .then(function(user) {
        assert.strictEqual('suprememoocow', user.login);
      })
      .nodeify(done);
  });

  it('should list all users', function(done) {
    ghClient.user.listAll()
      .then(function(users) {
        assert(Array.isArray(users));
      })
      .nodeify(done);
  });

});
