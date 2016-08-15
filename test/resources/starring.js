'use strict';

var GHClient = require('../..');
var assert = require('assert');

describe('user', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('listForRepo', function(done) {
    ghClient.starring.listForRepo('gitterHQ/gitter')
      .then(function(users) {
        assert(Array.isArray(users));
        assert(users.length > 0);
      })
      .nodeify(done);
  });

  it('listForUser', function(done) {
    ghClient.starring.listForUser('suprememoocow')
      .then(function(users) {
        assert(Array.isArray(users));
        assert(users.length > 0);
      })
      .nodeify(done);
  });

  it('listForAuthUser', function(done) {
    ghClient.starring.listForAuthUser()
      .then(function(users) {
        assert(Array.isArray(users));
      })
      .nodeify(done);
  });

  it('checkStarForAuthUserForRepo', function(done) {
    ghClient.starring.checkStarForAuthUserForRepo('gitterHQ/gitter')
      .then(function(isStarred) {
        assert(isStarred === true || isStarred === false);
      })
      .nodeify(done);
  });

});
