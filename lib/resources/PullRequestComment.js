'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Pull Request Review Comments
 *
 * [GitHub API](https://developer.github.com/v3/pulls/comments/)
 *
 * @module pullRequestComments
 */
module.exports = Resource.extend({

  /**
   * List comments on a pull request
   *
   * [GitHub API](https://developer.github.com/v3/pulls/comments/#list-comments-on-a-pull-request)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} number number of the pull request
   * @param {Object} options Optional request options
   */
  listForPullRequest: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/comments',
    urlParams: ['full_name', 'number']
  }),

  /**
   * List comments in a repository
   *
   * [GitHub API](https://developer.github.com/v3/pulls/comments/#list-comments-in-a-repository)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/comments',
    urlParams: ['full_name']
  }),

  /**
   * Get a single comment
   *
   * [GitHub API](https://developer.github.com/v3/pulls/comments/#get-a-single-comment)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} id of the pull request comment
   * @param {Object} options Optional request options
   */
  getById: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/comments/:id',
    urlParams: ['full_name', 'id']
  }),

  /**
   * Create a comment
   *
   * [GitHub API](https://developer.github.com/v3/pulls/comments/#create-a-comment)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the pull requst
   * @param {Object} body pull request create body
   * @param {Object} options Optional request options
   */
  create: method({
    method: 'POST',
    path: '/repos/:full_name/pulls/:number/comments',
    urlParams: ['full_name', 'number']
  }),

  /**
   * Edit a comment
   *
   * [GitHub API](https://developer.github.com/v3/pulls/comments/#edit-a-comment)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the pull requst
   * @param {Object} body pull request edit body
   * @param {Object} options Optional request options
   */
  edit: method({
    method: 'PATCH',
    path: '/repos/:full_name/pulls/comments/:id',
    urlParams: ['full_name', 'id']
  }),

  /**
   * Delete a comment
   *
   * [GitHub API](https://developer.github.com/v3/pulls/comments/#delete-a-comment)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} ref full git ref
   * @param {Object} options Optional request options
   */
  delete: method({
    method: 'DELETE',
    path: '/repos/:full_name/pulls/comments/:id',
    urlParams: ['full_name', 'id'],
    noBody: true
  }),

});
