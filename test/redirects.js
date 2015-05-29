var GHClient = require('..');
var assert = require('assert');

describe('redirects', function() {

  describe('redirects for an repo', function() {
    var ghClient;

    before(function() {
      ghClient = new GHClient({ clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET });
    });

    it('get', function(done) {
      ghClient.repo.get('twitter/bootstrap', { headers: { accept: 'application/vnd.github.quicksilver-preview+json' } })
        .then(function(repo) {
          assert.strictEqual(repo.full_name, 'twbs/bootstrap');
        })
        .nodeify(done);
    });

  });


});
