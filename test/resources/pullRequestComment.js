var GHClient = require('../..');
var assert = require('assert');

describe('pullRequestComment', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN
    });
  });

  it('listForPullRequest', function() {
    return ghClient.pullRequestComment.listForPullRequest('gitterHQ/services', 63)
      .then(function(prComments) {
        assert(Array.isArray(prComments));
        assert(prComments.length > 0);
        console.log(prComments[0])
      });
  });

  it('listForRepo', function() {
    return ghClient.pullRequestComment.listForRepo('gitterHQ/services')
      .then(function(prComments) {
        assert(Array.isArray(prComments));
      });
  });

  it('getById', function() {
    return ghClient.pullRequestComment.getById('gitterHQ/services', 50389055)
      .then(function(prComment) {
        assert(prComment);
      });
  });


});
