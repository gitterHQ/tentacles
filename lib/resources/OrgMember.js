'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Organization Member
 * @namespace OrgMember
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf OrgMember
   */
  listMembers: method({
    method: 'GET',
    path: '/orgs/:org/members',
    urlParams: ['org']
  }),

  /**
   * @function
   * @memberOf OrgMember
   */
  checkMembershipForUser: method({
    method: 'GET',
    path: '/orgs/:org/members/:username',
    urlParams: ['org', 'username'],
    checkOperation: true
  }),

  /**
   * @function
   * @memberOf OrgMember
   */
  listPublicMembers: method({
    method: 'GET',
    path: '/orgs/:org/public_members',
    urlParams: ['org']
  }),

  /**
   * @function
   * @memberOf OrgMember
   */
  checkPublicMembership: method({
    method: 'GET',
    path: '/orgs/:org/public_members/:username',
    urlParams: ['org', 'username'],
    checkOperation: true
  }),

  /**
   * @function
   * @memberOf OrgMember
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
   * @function
   * @memberOf OrgMember
   */
  listMembershipsForAuthUser: method({
    method: 'GET',
    path: '/user/memberships/orgs'
  }),

  /**
   * @function
   * @memberOf OrgMember
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
