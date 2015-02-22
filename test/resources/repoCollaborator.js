var GHClient = require('../..');
var assert = require('assert');

describe('repoCollaborator', function() {
  var ghClient, publicRepoWithAdmin, username;

  before(function(done) {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN
    });

    ghClient.repo.listForAuthUser()
      .then(function(repos) {
        var adminTeams = repos.filter(function(repo) {
          return repo.permissions.admin && !repo.private;
        });

        publicRepoWithAdmin = adminTeams[0].full_name;
        return ghClient.user.getAuthUser();
      })
      .then(function(user) {
        username = user.login;
      })
      .nodeify(done);
  });

  it('list', function(done) {
    ghClient.repoCollaborator.list(publicRepoWithAdmin)
      .then(function(collaborators) {
        assert(Array.isArray(collaborators));
        assert(collaborators.length > 0);
      })
      .nodeify(done);
  });

  it('checkForUser positive', function(done) {
    ghClient.repoCollaborator.checkForUser(publicRepoWithAdmin, username)
      .then(function(isCollaborator) {
        assert(isCollaborator);
      })
      .nodeify(done);
  });

  it('checkForUser negative', function(done) {
    ghClient.repoCollaborator.checkForUser(publicRepoWithAdmin, 'tj')
      .then(function(isCollaborator) {
        assert(!isCollaborator);
      })
      .nodeify(done);
  });


});
