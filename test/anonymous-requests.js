var GHClient = require('..');
var assert = require('assert');

describe('anonymous', function() {

  describe('using clientId/clientSecret', function() {
    var ghClient;

    before(function() {
      ghClient = new GHClient({ clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET });
    });

    it('getUser', function(done) {
      ghClient.user.get('suprememoocow', { spread: true })
        .spread(function(user, response) {
          assert.strictEqual(response.headers['x-ratelimit-limit'], '5000');
          assert.strictEqual('suprememoocow', user.login);
        })
        .nodeify(done);
    });

  });

  describe('using anonymousClientId/anonymousClientSecret', function() {
    var ghClient;

    before(function() {
      ghClient = new GHClient({ anonymousClientId: process.env.GITHUB_CLIENT_ID, anonymousClientSecret: process.env.GITHUB_CLIENT_SECRET });
    });

    it('getUser', function(done) {
      ghClient.user.get('suprememoocow', { spread: true })
        .spread(function(user, response) {
          assert.strictEqual(response.headers['x-ratelimit-limit'], '5000');
          assert.strictEqual('suprememoocow', user.login);
        })
        .nodeify(done);
    });

  });

});
