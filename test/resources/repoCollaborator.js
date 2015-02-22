var GHClient = require('../..');
var assert = require('assert');

describe('repoCollaborator', function() {
  var ghClient, publicRepoWithAdmin, username;

  before(function(done) {
    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN
    });

    ghClient.repo.listForAuthUser()
      .spread(function(repos) {
        var adminTeams = repos.filter(function(repo) {
          return repo.permissions.admin && !repo.private;
        });

        publicRepoWithAdmin = adminTeams[0].full_name;
        return ghClient.user.getAuthUser();
      })
      .spread(function(user) {
        username = user.login;
      })
      .nodeify(done);
  });

  it('list', function(done) {
    ghClient.repoCollaborator.list(publicRepoWithAdmin)
      .spread(function(collaborators) {
        assert(Array.isArray(collaborators));
        assert(collaborators.length > 0);
      })
      .nodeify(done);
  });

  it('checkForUser positive', function(done) {
    ghClient.repoCollaborator.checkForUser(publicRepoWithAdmin, username)
      .spread(function(isCollaborator) {
        assert(isCollaborator);
      })
      .nodeify(done);
  });

  it('checkForUser negative', function(done) {
    ghClient.repoCollaborator.checkForUser(publicRepoWithAdmin, 'tj')
      .spread(function(isCollaborator) {
        assert(!isCollaborator);
      })
      .nodeify(done);
  });


});
