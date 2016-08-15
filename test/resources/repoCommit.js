'use strict';

var GHClient = require('../..');
var assert = require('assert');

describe('repoCommit', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('list', function(done) {
    ghClient.repoCommit.list('gitterHQ/tentacles')
      .then(function(commits) {
        assert(Array.isArray(commits));
        assert(commits.length > 0);
      })
      .nodeify(done);
  });

  it('get', function(done) {
    ghClient.repoCommit.get('gitterHQ/tentacles', '2dcebd7ba1dd1a0132781e7d1408ee5b96fa0346')
      .then(function(commit) {
        assert(commit.sha, '2dcebd7ba1dd1a0132781e7d1408ee5b96fa0346');
      })
      .nodeify(done);
  });

  it('compare', function(done) {
    ghClient.repoCommit.compare('gitterHQ/tentacles', '2dcebd7ba1dd1a0132781e7d1408ee5b96fa0346', 'bc919da85c41a15f807ce517df9ef5ddd577abca')
      .then(function(compare) {
        assert(compare.base_commit.sha, '2dcebd7ba1dd1a0132781e7d1408ee5b96fa0346');
      })
      .nodeify(done);
  });

});
