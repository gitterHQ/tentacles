'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * [Issues Comments](https://developer.github.com/v3/issues/comments/)
 * @namespace
 * @module issueLabel
 */
module.exports = Resource.extend({

  /**
   * List comments on an issue
   * [GitHub API](https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number issue number
   * @param {Object} options Optional request options
   */
  listForIssue: method({
    method: 'GET',
    path: '/repos/:full_name/issues/:number/comments',
    urlParams: ['full_name', 'number']
  }),

  /**
   * List comments in a repository
   * [GitHub API](https://developer.github.com/v3/issues/comments/#list-comments-in-a-repository)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/issues/comments',
    urlParams: ['full_name']
  }),

  /**
   * Get a single comment
   * [GitHub API](https://developer.github.com/v3/issues/comments/#get-a-single-comment)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} id id of the comment
   * @param {Object} options Optional request options
   */
  getComment: method({
    method: 'GET',
    path: '/repos/:full_name/issues/comments/:id',
    urlParams: ['full_name', 'id']
  }),

  /**
   * Create a comment
   * [GitHub API](https://developer.github.com/v3/issues/comments/#create-a-comment)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number issue number
   * @param {Object} body body of the comment
   * @param {Object} options Optional request options
   */
  createComment: method({
    method: 'POST',
    path: '/repos/:full_name/issues/:number/comments',
    urlParams: ['full_name', 'number']
  }),

  /**
   * Edit a comment
   * [GitHub API](https://developer.github.com/v3/issues/comments/#edit-a-comment)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} id id of the comment
   * @param {Object} body body of the comment
   * @param {Object} options Optional request options
   */
  updateComment: method({
    method: 'PATCH',
    path: '/repos/:full_name/issues/comments/:id',
    urlParams: ['full_name', 'id']
  }),

  /**
   * Delete a comment
   * [GitHub API](https://developer.github.com/v3/issues/comments/#delete-a-comment)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} id id of the comment
   * @param {Object} options Optional request options
   */
  remove: method({
    method: 'DELETE',
    path: '/repos/:full_name/issues/comments/:id',
    urlParams: ['full_name', 'id'],
    noBody: true
  }),

});
