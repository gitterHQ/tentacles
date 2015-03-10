'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * [GitData Trees](https://developer.github.com/v3/git/trees/)
 * @module gitTree
 */
module.exports = Resource.extend({

  /**
   * Get a Tree
   *
   * [GitHub API](https://developer.github.com/v3/git/trees/#get-a-tree)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} sha sha of the commit
   * @param {Object} options Optional request options
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/git/trees/:sha',
    urlParams: ['full_name', 'sha']
  }),

  /**
   * Create a Tree
   *
   * [GitHub API](https://developer.github.com/v3/git/trees/#create-a-tree)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} body tree create body
   * @param {Object} options Optional request options
   */
  create: method({
    method: 'POST',
    path: '/repos/:full_name/git/trees',
    urlParams: ['full_name']
  })

});
