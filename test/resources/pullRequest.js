var GHClient = require('../..');
var assert = require('assert');

describe('pullRequest', function() {
  var ghClient;

  before(function() {
    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN
    });
  });

  it('listForRepo', function(done) {
    ghClient.pullRequest.listForRepo('gitterHQ/services', { query: { state: 'all' } })
      .then(function(pulls) {
        assert(Array.isArray(pulls));
        assert(pulls.length > 0);
      })
      .nodeify(done);
  });

  it('listForRepo closed', function(done) {
    ghClient.pullRequest.listForRepo('gitterHQ/services', { query: { state: 'open' } })
      .then(function(pulls) {
        assert(Array.isArray(pulls));
        pulls.forEach(function(pull) {
          assert.strictEqual(pull.state, 'open');
        });
      })
      .nodeify(done);
  });

  it('get', function(done) {
    ghClient.pullRequest.get('gitterHQ/services', 3)
      .then(function(pull) {
        assert(pull);
      })
      .nodeify(done);
  });

  it('get non-existant', function(done) {
    ghClient.pullRequest.get('gitterHQ/services231', 3)
      .then(function(pull) {
        assert(!pull);
      })
      .nodeify(done);
  });

  it('listCommits', function(done) {
    ghClient.pullRequest.listCommits('gitterHQ/services', 3)
      .then(function(commits) {
        assert(Array.isArray(commits));
        assert(commits.length > 0);
      })
      .nodeify(done);
  });

  it('listFiles', function(done) {
    ghClient.pullRequest.listFiles('gitterHQ/services', 3)
      .then(function(files) {
        assert(Array.isArray(files));
        assert(files.length > 0);
      })
      .nodeify(done);
  });

  it('checkMerged', function(done) {
    ghClient.pullRequest.checkMerged('gitterHQ/services', 3)
      .then(function(isMerged) {
        assert(isMerged);
      })
      .nodeify(done);
  });


});
