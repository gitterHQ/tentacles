var GHClient = require('../..');
var assert = require('assert');

describe('userEmail', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('listForAuthUser', function(done) {
    ghClient.userEmail.listForAuthUser()
      .then(function(emails) {
        assert(Array.isArray(emails));
        assert(emails.length > 0);
      })
      .nodeify(done);
  });



});
