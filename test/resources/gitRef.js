var GHClient = require('../..');
var assert = require('assert');

describe('gitRef', function() {
  describe('non mocked', function() {

    var ghClient;

    before(function() {
      assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

      ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
    });

    it('get', function(done) {
      ghClient.gitRef.get('gitterHQ/tentacles', 'heads/master')
        .then(function(ref) {
          assert(ref.ref);
        })
        .nodeify(done);
    });

    it('listAll', function(done) {
      ghClient.gitRef.listAll('gitterHQ/tentacles')
        .then(function(refs) {
          assert(Array.isArray(refs));
          assert(refs.every(function(r) {
            return !!r.ref;
          }));
        })
        .nodeify(done);
    });
  });

  describe('mocked', function() {
    var mockRequest, requestCalls, requestOptions;

    beforeEach(function() {
      requestCalls = 0;
      requestOptions = null;
      mockRequest = function(options, callback) {
        requestCalls++;
        requestOptions = options;
        callback(null, { statusCode: 200 }, { });
      };

      ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN, request: mockRequest });
    });

    it('create', function(done) {
      var body = {
        ref: "refs/heads/featureA",
        sha: "aa218f56b14c9653891f9e74264a383fa43fefbd"
      };

      ghClient.gitRef.create('suprememoocow/playground', body)
        .then(function() {
          assert.strictEqual(requestCalls, 1);
          assert.strictEqual(requestOptions.uri, 'https://api.github.com/repos/suprememoocow/playground/git/refs');
          assert.strictEqual(requestOptions.method, 'POST');
          assert.deepEqual(requestOptions.body, body);
        })
        .nodeify(done);
    });

    it('update', function(done) {
      var body = {
        "ref": "refs/heads/featureA",
        "sha": "aa218f56b14c9653891f9e74264a383fa43fefbd"
      };

      ghClient.gitRef.update('suprememoocow/playground', 'heads/featureA', body)
        .then(function() {
          assert.strictEqual(requestCalls, 1);
          assert.strictEqual(requestOptions.uri, 'https://api.github.com/repos/suprememoocow/playground/git/refs/heads/featureA');
          assert.strictEqual(requestOptions.method, 'PATCH');
          assert.deepEqual(requestOptions.body, body);
        })
        .nodeify(done);
    });

    it('delete', function(done) {
      ghClient.gitRef.delete('suprememoocow/playground', 'heads/featureA')
        .then(function() {
          assert.strictEqual(requestCalls, 1);
          assert.strictEqual(requestOptions.uri, 'https://api.github.com/repos/suprememoocow/playground/git/refs/heads/featureA');
          assert.strictEqual(requestOptions.method, 'DELETE');
          assert(!requestOptions.body);
        })
        .nodeify(done);
    });


  });

});
