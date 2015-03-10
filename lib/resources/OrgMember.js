'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Organization Member
 *
 * [GitHub API](https://developer.github.com/v3/orgs/members/)
 * @module orgMember
 */
module.exports = Resource.extend({

  /**
   * Members list
   * @function
   * @param {String} org org name
   * @param {Object} options Optional request options.
   */
  listMembers: method({
    method: 'GET',
    path: '/orgs/:org/members',
    urlParams: ['org']
  }),

  /**
   * Check membership
   * @function
   * @param {String} org org name
   * @param {String} username username
   * @param {Object} options Optional request options.
   */
  checkMembershipForUser: method({
    method: 'GET',
    path: '/orgs/:org/members/:username',
    urlParams: ['org', 'username'],
    checkOperation: true
  }),

  /**
   * Public members list
   * @function
   * @param {String} org org name
   * @param {Object} options Optional request options.
   */
  listPublicMembers: method({
    method: 'GET',
    path: '/orgs/:org/public_members',
    urlParams: ['org']
  }),

  /**
   * Check public membership
   * @function
   * @param {String} org org name
   * @param {String} username username
   * @param {Object} options Optional request options.
   */
  checkPublicMembership: method({
    method: 'GET',
    path: '/orgs/:org/public_members/:username',
    urlParams: ['org', 'username'],
    checkOperation: true
  }),

  /**
   * Get organization membership
   * @function
   * @param {String} org org name
   * @param {String} username username
   * @param {Object} options Optional request options.
   */
  getMembershipForUser: method({
    method: 'GET',
    path: '/orgs/:org/memberships/:username',
    urlParams: ['org', 'username'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * List your organization memberships
   * @function
   * @param {Object} options Optional request options.
   */
  listMembershipsForAuthUser: method({
    method: 'GET',
    path: '/user/memberships/orgs'
  }),

  /**
   * Get your organization membership
   * @function
   * @param {String} org org name
   * @param {Object} options Optional request options.
   */
  getMembershipForAuthUser: method({
    method: 'GET',
    path: '/user/memberships/orgs/:org',
    urlParams: ['org'],
    options: {
      treat404asEmpty: true
    }
  }),


});
