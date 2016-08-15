'use strict';

var GHClient = require('../..');
var assert = require('assert');

describe('search', function() {
  var ghClient;

  before(function() {
    assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('search repos', function(done) {
    ghClient.search.repos('faye websockets')
      .then(function(searchResults) {
        assert(Array.isArray(searchResults.items));
      })
      .nodeify(done);
  });

  it('search code', function(done) {
    ghClient.search.code('gitter user:suprememoocow')
      .then(function(searchResults) {
        assert(Array.isArray(searchResults.items));
      })
      .nodeify(done);
  });

  it('search issues', function(done) {
    ghClient.search.issues('faye disconnect')
      .then(function(searchResults) {
        assert(Array.isArray(searchResults.items));
      })
      .nodeify(done);
  });

  it('search users', function(done) {
    ghClient.search.users('suprememoocow type:user')
      .then(function(searchResults) {
        assert(Array.isArray(searchResults.items));
      })
      .nodeify(done);
  });

});
