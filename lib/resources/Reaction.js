'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Reactions
 * @module reactions
 */
module.exports = Resource.extend({

  /**
   * List reactions for a commit comment
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#list-reactions-for-a-commit-comment)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} id id of the commit
   * @param {Object} options Optional request options
   */
  listForCommitComment: method({
    method: 'GET',
    path: '/repos/:full_name/comments/:id/reactions',
    urlParams: ['full_name', 'id']
  }),

  /**
   * Create reaction for a commit comment
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#create-reaction-for-a-commit-comment)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} id id of the commit
   * @param {Object} body body of the reaction
   * @param {Object} options Optional request options
   */
  createForCommitComment: method({
    method: 'POST',
    path: '/repos/:full_name/comments/:id/reactions',
    urlParams: ['full_name', 'id']
  }),

  /**
   * List reactions for an issue
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#list-reactions-for-an-issue)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the issue
   * @param {Object} options Optional request options
   */
  listForIssue: method({
    method: 'GET',
    path: '/repos/:full_name/issues/:number/reactions',
    urlParams: ['full_name', 'number']
  }),

  /**
   * Create reaction for an issue
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#create-reaction-for-an-issue)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the issue
   * @param {Object} body body of the reaction
   * @param {Object} options Optional request options
   */
  createForIssue: method({
    method: 'POST',
    path: '/repos/:full_name/issues/:number/reactions',
    urlParams: ['full_name', 'number']
  }),

  /**
   * List reactions for an issue comment
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#list-reactions-for-an-issue-comment)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} id id of the issue comment
   * @param {Object} options Optional request options
   */
  listForIssueComment: method({
    method: 'GET',
    path: '/repos/:full_name/issues/comments/:id/reactions',
    urlParams: ['full_name', 'id']
  }),

  /**
   * Create reaction for an issue comment
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#create-reaction-for-an-issue-comment)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} id id of the issue comment
   * @param {Object} body body of the reaction
   * @param {Object} options Optional request options
   */
  createForIssueComment: method({
    method: 'POST',
    path: '/repos/:full_name/issues/comments/:id/reactions',
    urlParams: ['full_name', 'id']
  }),

  /**
   * List reactions for a pull request review comment
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#list-reactions-for-a-pull-request-review-comment)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} id id of the pull request comment
   * @param {Object} options Optional request options
   */
  listForPullRequestReviewComment: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/comments/:id/reactions',
    urlParams: ['full_name', 'id']
  }),

  /**
   * Create reaction for a pull request review comment
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#create-reaction-for-a-pull-request-review-comment)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} id id of the pull request comment
   * @param {Object} body body of the reaction
   * @param {Object} options Optional request options
   */
  createForPullRequestReviewComment: method({
    method: 'POST',
    path: '/repos/:full_name/pulls/comments/:id/reactions',
    urlParams: ['full_name', 'id']
  }),

  /**
   * Delete a reaction
   *
   * [GitHub API](https://developer.github.com/v3/reactions/#delete-a-reaction)
   * @function
   * @param {Number} id id of reaction
   * @param {Object} options Optional request options
   */
  deleteById: method({
    method: 'DELETE',
    path: '/reactions/:id',
    urlParams: ['id'],
    noBody: true
  }),

});
