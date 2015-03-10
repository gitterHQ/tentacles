var GHClient = require('../..');
var assert = require('assert');

describe('gitCommit', function() {
  describe('non mocked', function() {

    var ghClient;

    before(function() {
      assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

      ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
    });

    it('get', function(done) {
      ghClient.gitCommit.get('gitterHQ/tentacles', '23ba77b441de50d61f4fa2b219fcad5859480c74')
        .then(function(commit) {
          assert.strictEqual(commit.sha, '23ba77b441de50d61f4fa2b219fcad5859480c74');
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
        "message": "my commit message",
        "author": {
          "name": "Andrew Newdigate",
          "email": "andrew@gitter.im",
          "date": "2008-07-09T16:13:30+12:00"
        },
        "parents": [
          "7d1b31e74ee336d15cbd21741bc88a537ed063a0"
        ],
        "tree": "827efc6d56897b048c772eb4087f854f46256132"
      };

      ghClient.gitCommit.create('suprememoocow/playground', body)
        .then(function() {
          assert.strictEqual(requestCalls, 1);
          assert.strictEqual(requestOptions.uri, 'https://api.github.com/repos/suprememoocow/playground/git/commits');
          assert.strictEqual(requestOptions.method, 'POST');
          assert.deepEqual(requestOptions.body, body);
        })
        .nodeify(done);
    });

  });

});
