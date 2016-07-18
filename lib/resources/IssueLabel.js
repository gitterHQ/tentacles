'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * [Issues Labels](https://developer.github.com/v3/issues/labels/)
 * @namespace
 * @module issueLabel
 */
module.exports = Resource.extend({

  /**
   * List all labels for this repository
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#list-all-labels-for-this-repository)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/labels',
    urlParams: ['full_name']
  }),

  /**
   * Get a single label
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#get-a-single-label)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} name name of the label
   * @param {Object} options Optional request options
   */
  getLabel: method({
    method: 'GET',
    path: '/repos/:full_name/labels/:name',
    urlParams: ['full_name', 'name']
  }),

  /**
   * Create a label
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#create-a-label)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} body body of label
   * @param {Object} options Optional request options
   */
  createLabel: method({
    method: 'POST',
    path: '/repos/:full_name/labels',
    urlParams: ['full_name']
  }),

  /**
   * Update a label
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#update-a-label)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} name name of the label
   * @param {Object} body body of label
   * @param {Object} options Optional request options
   */
  updateLabel: method({
    method: 'PATCH',
    path: '/repos/:full_name/labels/:name',
    urlParams: ['full_name', 'name']
  }),

  /**
   * Delete a label
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#delete-a-label)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} name name of the label
   * @param {Object} options Optional request options
   */
  deleteLabel: method({
    method: 'DELETE',
    path: '/repos/:full_name/labels/:name',
    urlParams: ['full_name', 'name']
  }),

  /**
   * List labels on an issue
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#list-labels-on-an-issue)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the issue
   * @param {Object} options Optional request options
   */
  listForIssue: method({
    method: 'GET',
    path: '/repos/:full_name/issues/:number/labels',
    urlParams: ['full_name', 'number']
  }),

  /**
   * Add labels to an issue
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#add-labels-to-an-issue)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the issue
   * @param {Object} body body of label
   * @param {Object} options Optional request options
   */
  addToIssue: method({
    method: 'POST',
    path: '/repos/:full_name/issues/:number/labels',
    urlParams: ['full_name', 'number']
  }),

  /**
   * Remove a label from an issue
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#remove-a-label-from-an-issue)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the issue
   * @param {String} name name of the label
   * @param {Object} options Optional request options
   */
  removeFromIssue: method({
    method: 'DELETE',
    path: '/repos/:full_name/issues/:number/labels/:name',
    urlParams: ['full_name', 'number', 'name'],
    noBody: true
  }),

  /**
   * Replace all labels for an issue
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#replace-all-labels-for-an-issue)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the issue
   * @param {Object} body body of label
   * @param {Object} options Optional request options
   */
  replaceAllForIssue: method({
    method: 'PUT',
    path: '/repos/:full_name/issues/:number/labels',
    urlParams: ['full_name', 'number']
  }),

  /**
   * Remove all labels from an issue
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#remove-all-labels-from-an-issue)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the issue
   * @param {Object} options Optional request options
   */
  removeAllFromIssue: method({
    method: 'DELETE',
    path: '/repos/:full_name/issues/:number/labels',
    urlParams: ['full_name', 'number'],
    noBody: true
  }),

  /**
   * Get labels for every issue in a milestone
   *
   * [GitHub API](https://developer.github.com/v3/issues/labels/#get-labels-for-every-issue-in-a-milestone)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Number} number number of the issue
   * @param {Object} options Optional request options
   */
  listForMilestone: method({
    method: 'GET',
    path: '/repos/:full_name/milestones/:number/labels',
    urlParams: ['full_name', 'number']
  }),

});
