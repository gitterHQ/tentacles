var GHClient = require('../..');
var assert = require('assert');

describe('issue', function() {
  var ghClient, orgName;

  before(function(done) {
    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN
    });

    ghClient.org.listForAuthUser()
      .then(function(orgs) {
        orgName = orgs[0].login;
      })
      .nodeify(done);
  });

  it('listAllVisibleForAuthUser', function(done) {
    ghClient.issue.listAllVisibleForAuthUser()
      .then(function(issues) {
        assert(Array.isArray(issues));
      })
      .nodeify(done);
  });

  it('listAllOwnerAndMemberForAuthUser', function(done) {
    ghClient.issue.listAllOwnerAndMemberForAuthUser()
      .then(function(issues) {
        assert(Array.isArray(issues));
      })
      .nodeify(done);
  });

  it('listForOrgForAuthUser', function(done) {
    ghClient.issue.listForOrgForAuthUser(orgName)
      .then(function(issues) {
        assert(Array.isArray(issues));
      })
      .nodeify(done);
  });

  it('listForRepo', function(done) {
    ghClient.issue.listForRepo('gitterHQ/gitter')
      .then(function(issues) {
        assert(Array.isArray(issues));
        assert(issues.length > 0);
      })
      .nodeify(done);
  });

  it('get', function(done) {
    ghClient.issue.get('gitterHQ/gitter', 1)
      .then(function(issue) {
        assert(issue);
      })
      .nodeify(done);
  });

  it('get does not exist', function(done) {
    ghClient.issue.get('gitterHQ/gitter21312312312', 1)
      .then(function(issue) {
        assert(!issue);
      })
      .nodeify(done);
  });



});
