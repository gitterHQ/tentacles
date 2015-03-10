'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * [Issues](https://developer.github.com/v3/issues/)
 * @namespace
 * @module issue
 */
module.exports = Resource.extend({

  /**
   * List all issues across all the authenticated user’s visible repositories including owned
   * repositories, member repositories, and organization repositories.
   *
   * [GitHub API](https://developer.github.com/v3/issues/#list-issues)
   * @function
   * @param {Object} options Optional request options.
   * @example client.issue.listAllVisibleForAuthUser({ query: { state: 'open' } })
   */
  listAllVisibleForAuthUser: method({
    method: 'GET',
    path: '/issues'
  }),

  /**
   * List all issues across owned and member repositories for the authenticated user
   *
   * [GitHub API](https://developer.github.com/v3/issues/#list-issues)
   * @function
   * @param {Object} options Optional request options
   */
  listAllOwnerAndMemberForAuthUser: method({
    method: 'GET',
    path: '/user/issues'
  }),

  /**
   * List all issues for a given organization for the authenticated user
   *
   * [GitHub API](https://developer.github.com/v3/issues/#list-issues)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listForOrgForAuthUser: method({
    method: 'GET',
    path: '/orgs/:org/issues',
    urlParams: ['org']
  }),

  /**
   * List issues for a repository
   *
   * [GitHub API](https://developer.github.com/v3/issues/#list-issues-for-a-repository)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/issues',
    urlParams: ['full_name']
  }),

  /**
   * Get a single issue
   *
   * [GitHub API](https://developer.github.com/v3/issues/#get-a-single-issue)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} number issue number
   * @param {Object} options Optional request options
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/issues/:number',
    urlParams: ['full_name', 'number'],
    options: {
      treat404asEmpty: true
    }
  }),

});
