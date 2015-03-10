'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * [GitData Commits](https://developer.github.com/v3/git/commits/)
 * @module gitTree
 */
module.exports = Resource.extend({

  /**
   * Get a Commit
   *
   * [GitHub API](https://developer.github.com/v3/git/commits/#get-a-commit)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} sha sha of the commit
   * @param {Object} options Optional request options
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/git/commits/:sha',
    urlParams: ['full_name', 'sha']
  }),

  /**
   * Create a Commit
   *
   * [GitHub API](https://developer.github.com/v3/git/commits/#create-a-commit)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} body commit create body
   * @param {Object} options Optional request options
   */
  create: method({
    method: 'POST',
    path: '/repos/:full_name/git/commits',
    urlParams: ['full_name']
  })

});
