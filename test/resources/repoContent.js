var GHClient = require('../..');
var assert = require('assert');
var nock = require('nock');
nock.enableNetConnect();

describe('repoContent', function() {
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

  describe('mocked', function() {
    beforeEach(function() {
      nock.disableNetConnect();
    });

    afterEach(function() {
      nock.enableNetConnect();
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

      var scope = nock('https://api.github.com')
        .put('/repos/suprememoocow/playground/contents/text.txt', JSON.stringify(body))
        .reply(201);

      ghClient.repoContent.createFile('suprememoocow/playground', 'text.txt', body)
        .then(function() {
          scope.done();
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

      var scope = nock('https://api.github.com')
        .put('/repos/suprememoocow/playground/contents/test.txt', JSON.stringify(body))
        .reply(201);

      ghClient.repoContent.updateFile('suprememoocow/playground', 'test.txt', body)
        .then(function() {
          scope.done();
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

      var scope = nock('https://api.github.com')
        .delete('/repos/suprememoocow/playground/contents/test.txt', JSON.stringify(body))
        .reply(200);

      ghClient.repoContent.deleteFile('suprememoocow/playground', 'test.txt', body)
        .then(function() {
          scope.done();
        })
        .nodeify(done);
    });


  });

});
