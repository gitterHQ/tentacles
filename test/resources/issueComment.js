'use strict';

var GHClient = require('../..');
var assert = require('assert');

describe('issueComment', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN
    });
  });

  it('listForIssue', function() {
    return ghClient.issueComment.listForIssue('gitterHQ/tentacles', 7)
      .then(function(issueComments) {
        assert(Array.isArray(issueComments));
        assert(issueComments.length > 0);
      });
  });

  it('listForRepo', function() {
    return ghClient.issueComment.listForRepo('gitterHQ/tentacles')
      .then(function(issueComments) {
        assert(Array.isArray(issueComments));
        assert(issueComments.length > 0);
      });
  });

  it('getComment', function() {
    return ghClient.issueComment.getComment('gitterHQ/tentacles', 244998065)
      .then(function(comment) {
        assert(comment.user);
        assert(comment.id);
      });
  });

});
