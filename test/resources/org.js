var GHClient = require('../..');
var assert = require('assert');

describe('org', function() {
  var ghClient;

  before(function() {
    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('listForAuthUser', function(done) {
    ghClient.org.listForAuthUser()
      .then(function(orgs) {
        assert(Array.isArray(orgs));
        assert(orgs.length > 0);
      })
      .nodeify(done);
  });

  it('listForUser', function(done) {
    ghClient.org.listForUser('suprememoocow')
      .then(function(orgs) {
        assert(Array.isArray(orgs));
        assert(orgs.length > 0);
      })
      .nodeify(done);
  });

  it('get', function(done) {
    ghClient.org.get('gittertestbotorg')
      .then(function(org) {
        assert.strictEqual(org.login, 'gittertestbotorg');
      })
      .nodeify(done);
  });

  it('get should return null for an invalid org', function(done) {
    ghClient.org.get('gittertestorg12312312312312')
      .then(function(org) {
        assert(!org);
      })
      .nodeify(done);
  });

});
