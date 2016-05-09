var GHClient = require('../..');
var assert = require('assert');
var Promise = require('bluebird');

describe('repoWebhooks', function() {
  var ghClient, repoWithAdmin;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({
      accessToken: process.env.GITHUB_ACCESS_TOKEN
    });

    return ghClient.repo.listForAuthUser()
      .then(function(repos) {
        repoWithAdmin = repos.filter(function(repo) {
          return repo.permissions.admin && !repo.private;
        })[0].full_name;
      });
  });

  it('create', function() {
    return ghClient.repoWebhooks.create(repoWithAdmin, {
      name: 'web',
      config: {
        url: 'http://requestb.in/vn997mvn'
      }
    });
  });

  it('list', function() {
    return ghClient.repoWebhooks.list(repoWithAdmin)
      .then(function(hooks) {
        assert(Array.isArray(hooks));
        assert(hooks.length >= 1);
      });
  });

  it('get', function() {
    return ghClient.repoWebhooks.list(repoWithAdmin)
      .then(function(hooks) {
        var id = hooks[0].id;
        return ghClient.repoWebhooks.get(repoWithAdmin, id)
      })
      .then(function(hook) {
        assert(hook);
      });
  });


  it('update', function() {
    return ghClient.repoWebhooks.list(repoWithAdmin)
      .then(function(hooks) {
        var id = hooks[0].id;
        return ghClient.repoWebhooks.update(repoWithAdmin, id, {
          url: 'https://requestb.in/vn997mvn'
        });
      });
  });

  it('ping', function() {
    return ghClient.repoWebhooks.list(repoWithAdmin)
      .then(function(hooks) {
        var id = hooks[0].id;
        return ghClient.repoWebhooks.ping(repoWithAdmin, id);
      });
  });

  it('delete', function() {
    return ghClient.repoWebhooks.list(repoWithAdmin)
      .then(function(hooks) {
        return Promise.map(hooks, function(hook) {
          return ghClient.repoWebhooks.delete(repoWithAdmin, hook.id);
        });
      });
  });

});
