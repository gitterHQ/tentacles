'use strict';

var GHClient = require('../..');
var assert = require('assert');

describe('reaction', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN,
      headers: {
        Accept: 'application/vnd.github.squirrel-girl-preview'
      }
    });
  });

  it('should listForCommitComment', function() {
    return ghClient.reaction.listForCommitComment('gitterHQ/tentacles', 18289723)
      .then(function(reactions) {
        assert(Array.isArray(reactions));
        assert(reactions.length >= 1);
      });
  });

  it('should listForIssue', function() {
    return ghClient.reaction.listForIssue('gitterHQ/tentacles', 5)
      .then(function(reactions) {
        assert(Array.isArray(reactions));
        assert(reactions.length >= 1);
      });
  });

  it('should listForIssueComment', function() {
    return ghClient.reaction.listForIssueComment('gitterHQ/tentacles', 233458395)
      .then(function(reactions) {
        assert(Array.isArray(reactions));
        assert(reactions.length >= 1);
      });
  });

  it('should listForPullRequestReviewComment', function() {
    return ghClient.reaction.listForPullRequestReviewComment('gitterHQ/tentacles', 71230467)
      .then(function(reactions) {
        assert(Array.isArray(reactions));
        assert(reactions.length >= 1);
      });
  });


});
