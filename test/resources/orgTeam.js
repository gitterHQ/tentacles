var GHClient = require('../..');
var assert = require('assert');

describe('orgTeam', function() {

  var ghClient;

  before(function() {
    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN,
    });
  });

  it('listForOrg', function(done) {
    ghClient.orgTeam.listForOrg('gitterHQ')
      .then(function(members) {
        assert(Array.isArray(members));
        assert(members.length > 0);
      })
      .nodeify(done);
  });

  it('get success', function(done) {
    ghClient.orgTeam.get(1907449)
      .then(function(result) {
        assert(result);
      })
      .nodeify(done);
  });

  it('listMembers', function(done) {
    ghClient.orgTeam.listMembers(1907449)
      .then(function(members) {
        assert(Array.isArray(members));
        assert(members.length > 0);
      })
      .nodeify(done);
  });

  it('getMembership fail', function(done) {
    ghClient.orgTeam.getMembership(1907449, 'tj')
      .then(function() {
        assert(false);
      }, function() {
      })
      .nodeify(done);
  });

  it('getMembership success', function(done) {
    ghClient.orgTeam.getMembership(1907449, 'gittertestbot')
      .then(function(result) {
        assert(result);
      })
      .nodeify(done);
  });

  it('listRepos', function(done) {
    ghClient.orgTeam.listRepos(1907449)
      .then(function(repos) {
        assert(Array.isArray(repos));
      })
      .nodeify(done);
  });

  it('listForAuthUser', function(done) {
    ghClient.orgTeam.listForAuthUser()
      .then(function(teams) {
        console.log('TEAMS',teams)
        assert(Array.isArray(teams));
      })
      .nodeify(done);
  });

});
