var GHClient = require('../..');
var assert = require('assert');

describe('events', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('listPublic', function(done) {
    ghClient.events.listPublic()
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listForRepo', function(done) {
    ghClient.events.listForRepo('gitterHQ/gitter')
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listIssueEventsForRepo', function(done) {
    ghClient.events.listIssueEventsForRepo('gitterHQ/gitter')
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listNetworkEventsForRepo', function(done) {
    ghClient.events.listNetworkEventsForRepo('faye/faye')
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listForOrg', function(done) {
    ghClient.events.listForOrg('gitterHQ')
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listReceivedEventsForUser', function(done) {
    ghClient.events.listReceivedEventsForUser('substack')
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listPublicReceivedEventsForUser', function(done) {
    ghClient.events.listPublicReceivedEventsForUser('substack')
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listEventsForUser', function(done) {
    ghClient.events.listEventsForUser('substack')
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listPublicEventsForUser', function(done) {
    ghClient.events.listPublicEventsForUser('substack')
      .then(function(result) {
        assert(Array.isArray(result));
        assert(result.length > 0);
      })
      .nodeify(done);
  });

  it('listForUserInOrg', function(done) {
    ghClient.events.listForUserInOrg('gittertestbot', 'gitterHQ')
      .then(function(result) {
        assert(Array.isArray(result));
      })
      .nodeify(done);
  });

});
