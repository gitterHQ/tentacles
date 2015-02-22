var GHClient = require('../..');
var assert = require('assert');

describe('test', function() {
  var ghClient;

  before(function() {
    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('listForAuthUser', function(done) {
    ghClient.userEmail.listForAuthUser()
      .spread(function(emails) {
        assert(Array.isArray(emails));
        assert(emails.length > 0);
      })
      .nodeify(done);
  });



});
