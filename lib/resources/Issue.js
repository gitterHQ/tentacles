'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Issue
 * @namespace Issue
 */
module.exports = Resource.extend({

  /**
   * List all issues across all the authenticated user’s visible repositories including owned
   * repositories, member repositories, and organization repositories
   * @function
   * @memberOf Issue
   * @param {Object} [options]
   * @see {@link https://developer.github.com/v3/issues/#list-issues}
   */
  listAllVisibleForAuthUser: method({
    method: 'GET',
    path: '/issues'
  }),

  /**
   * List all issues across owned and member repositories for the authenticated user
   * @function
   * @param {Object} [options]
   * @memberOf Issue
   * @see {@link https://developer.github.com/v3/issues/#list-issues}
   */
  listAllOwnerAndMemberForAuthUser: method({
    method: 'GET',
    path: '/user/issues'
  }),

  /**
   * List all issues for a given organization for the authenticated user
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} [options]
   * @memberOf Issue
   * @see {@link https://developer.github.com/v3/issues/#list-issues}
   */
  listForOrgForAuthUser: method({
    method: 'GET',
    path: '/orgs/:org/issues',
    urlParams: ['org']
  }),

  /**
   * List issues for a repository
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} [options]
   * @memberOf Issue
   * @see {@link https://developer.github.com/v3/issues/#list-issues-for-a-repository}
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/issues',
    urlParams: ['full_name']
  }),

  /**
   * Get a single issue
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} number
   * @param {Object} [options]
   * @memberOf Issue
   * @see {@link https://developer.github.com/v3/issues/#get-a-single-issue}
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
