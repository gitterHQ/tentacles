var GHClient = require('../..');
var assert = require('assert');

describe('repo', function() {

  function specs(postMoondragon) {
    var ghClient, publicRepoWithAdmin;

    before(function(done) {
      assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

      var headers;

      if (postMoondragon) {
        headers = {
          'Accept': 'application/vnd.github.moondragon+json'
        };
      }

      ghClient = new GHClient({
        accessToken: process.env.GITHUB_ACCESS_TOKEN,
        headers: headers
      });

      ghClient.repo.listForAuthUser()
        .then(function(repos) {
          var adminTeams = repos.filter(function(repo) {
            return repo.permissions.admin && !repo.private;
          });

          publicRepoWithAdmin = adminTeams[0].full_name;
        })
        .nodeify(done);

    });

    it('listAuthUser', function(done) {
      ghClient.repo.listForAuthUser()
        .then(function(repos) {
          assert(Array.isArray(repos));
          assert(repos.length > 0);
        })
        .nodeify(done);
    });

    it('listAuthUser with parameters', function(done) {
      ghClient.repo.listForAuthUser({ query: { type: 'public'} })
        .then(function(repos) {
          assert(Array.isArray(repos));
          repos.forEach(function(repo) {
            assert(!repo.private);
          });
        })
        .nodeify(done);
    });

    it('listForUser', function(done) {
      ghClient.repo.listForUser('suprememoocow')
        .then(function(repos) {
          assert(Array.isArray(repos));
          assert(repos.length > 0);
        })
        .nodeify(done);
    });

    it('listForOrg', function(done) {
      ghClient.repo.listForOrg('gitterHQ')
        .then(function(repos) {
          assert(Array.isArray(repos));
          assert(repos.length > 0);
        })
        .nodeify(done);
    });

    it('get', function(done) {
      ghClient.repo.get('gitterHQ/tentacles')
        .then(function(repo) {
          assert.strictEqual('gitterHQ/tentacles', repo.full_name);
        })
        .nodeify(done);
    });

    it('get non-existent', function(done) {
      ghClient.repo.get('gitterHQ/tentacles-asduioisd')
        .then(function(repo) {
          assert(!repo);
        })
        .nodeify(done);
    });

    it('listLanguages', function(done) {
      ghClient.repo.listLanguages('gitterHQ/tentacles')
        .then(function(langs) {
          assert(langs.JavaScript);
        })
        .nodeify(done);
    });

    it('listTeams', function(done) {
      return ghClient.repo.listTeams(publicRepoWithAdmin)
        .then(function(teams) {
          assert(Array.isArray(teams));
        })
        .nodeify(done);
    });

    it('listTags', function(done) {
      ghClient.repo.listTags('gitterHQ/tentacles')
        .then(function(tags) {
          assert(Array.isArray(tags));
        })
        .nodeify(done);
    });

    it('listBranches', function(done) {
      ghClient.repo.listBranches('gitterHQ/tentacles')
        .then(function(branches) {
          assert(Array.isArray(branches));
          assert(branches.length > 0);
        })
        .nodeify(done);
    });

    it('getBranch', function(done) {
      ghClient.repo.getBranch('gitterHQ/tentacles', 'master')
        .then(function(branch) {
          assert(branch);
        })
        .nodeify(done);
    });

  }

  describe('pre-moondragon', function() {
    specs(false);
  });

  describe('post-moondragon', function() {
    specs(true);
  });


});
