var GHClient = require('../..');
var assert = require('assert');

describe('repoContent', function() {

  describe('non mocked', function() {
    var ghClient;

    before(function() {
      assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

      ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
    });

    it('getReadme', function(done) {
      ghClient.repoContent.getReadme('gitterHQ/tentacles')
        .then(function(content) {
          assert.strictEqual(content.name, 'README.md');
        })
        .nodeify(done);
    });

    it('getContents', function(done) {
      ghClient.repoContent.getContents('gitterHQ/tentacles', 'README.md')
        .then(function(content) {
          assert.strictEqual(content.name, 'README.md');
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


    it('createFile', function(done) {
      var body = {
        branch: "master",
        message: "my commit message",
        committer: {
          name: "Andrew Newdigate",
          email: "andrew@gitter.im"
        },
        "content": "bXkgbmV3IGZpbGUgY29udGVudHM="
      };

      ghClient.repoContent.createFile('suprememoocow/playground', 'text.txt', body)
        .then(function() {
          assert.strictEqual(requestCalls, 1);
          assert.strictEqual(requestOptions.uri, 'https://api.github.com/repos/suprememoocow/playground/contents/text.txt');
          assert.strictEqual(requestOptions.method, 'PUT');
          assert.deepEqual(requestOptions.body, body);
        })
        .nodeify(done);
    });

    it('updateFile', function(done) {
      var body = {
        message: "my commit message",
        committer: {
          name: "Andrew Newdigate",
          email: "andrew@gitter.im"
        },
        content: "bXkgdXBkYXRlZCBmaWxlIGNvbnRlbnRz",
        sha: "329688480d39049927147c162b9d2deaf885005f"
      };

      ghClient.repoContent.updateFile('suprememoocow/playground', 'test.txt', body)
        .then(function() {
          assert.strictEqual(requestCalls, 1);
          assert.equal(requestOptions.uri, 'https://api.github.com/repos/suprememoocow/playground/contents/test.txt');
          assert.strictEqual(requestOptions.method, 'PUT');
          assert.deepEqual(requestOptions.body, body);
        })
        .nodeify(done);
    });

    it('deleteFile', function(done) {
      var body = {
        message: "my commit message",
        committer: {
          name: "Andrew Newdigate",
          email: "andrew@gitter.im"
        },
        sha: "329688480d39049927147c162b9d2deaf885005f"
      };

      ghClient.repoContent.deleteFile('suprememoocow/playground', 'test.txt', body)
        .then(function() {
          assert.strictEqual(requestCalls, 1);
          assert.equal(requestOptions.uri, 'https://api.github.com/repos/suprememoocow/playground/contents/test.txt');
          assert.strictEqual(requestOptions.method, 'DELETE');
          assert.deepEqual(requestOptions.body, body);
        })
        .nodeify(done);
    });


  });

});
