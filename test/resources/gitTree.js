var GHClient = require('../..');
var assert = require('assert');

describe('gitTree', function() {
  describe('non mocked', function() {

    var ghClient;

    before(function() {
      assert(process.env.GITHUB_ACCESS_TOKEN, 'Please set GITHUB_ACCESS_TOKEN');

      ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
    });

    it('get', function(done) {
      ghClient.gitTree.get('gitterHQ/tentacles', '23ba77b441de50d61f4fa2b219fcad5859480c74')
        .then(function(tree) {
          assert(Array.isArray(tree.tree));
          assert.strictEqual(tree.sha, '23ba77b441de50d61f4fa2b219fcad5859480c74');
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
        "base_tree": "9fb037999f264ba9a7fc6274d15fa3ae2ab98312",
        "tree": [
          {
            "path": "file.rb",
            "mode": "100644",
            "type": "blob",
            "sha": "44b4fc6d56897b048c772eb4087f854f46256132"
          }
        ]
      };

      ghClient.gitTree.create('suprememoocow/playground', body)
        .then(function() {
          assert.strictEqual(requestCalls, 1);
          assert.strictEqual(requestOptions.uri, 'https://api.github.com/repos/suprememoocow/playground/git/trees');
          assert.strictEqual(requestOptions.method, 'POST');
          assert.deepEqual(requestOptions.body, body);
        })
        .nodeify(done);
    });

  });

});
