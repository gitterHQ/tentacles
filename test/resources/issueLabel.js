'use strict';

var GHClient = require('../..');
var assert = require('assert');

describe('issue', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN
    });
  });

  it('listForRepo', function() {
    return ghClient.issueLabel.listForRepo('nodejs/node')
      .then(function(labels) {
        assert(Array.isArray(labels));
      });
  });

  it('getLabel', function() {
    return ghClient.issueLabel.getLabel('nodejs/node', 'meta')
      .then(function(label) {
        assert(label.hasOwnProperty('name'));
        assert(label.hasOwnProperty('color'));
        assert(label.hasOwnProperty('url'));
      });
  });

  it('listForIssue', function() {
    return ghClient.issueLabel.listForIssue('nodejs/node', 2522)
      .then(function(labels) {
        assert(Array.isArray(labels));
      });
  });


  it('listForMilestone', function() {
    return ghClient.issueLabel.listForMilestone('gitterHQ/gitter', 10)
      .then(function(labels) {
        assert(Array.isArray(labels));
      });
  });



});
