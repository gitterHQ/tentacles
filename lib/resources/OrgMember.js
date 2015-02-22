'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listMembers: method({
    method: 'GET',
    path: '/orgs/:org/members',
    urlParams: ['org']
  }),

  checkMembershipForUser: method({
    method: 'GET',
    path: '/orgs/:org/members/:username',
    urlParams: ['org', 'username'],
    checkOperation: true
  }),

  listPublicMembers: method({
    method: 'GET',
    path: '/orgs/:org/public_members',
    urlParams: ['org']
  }),

  checkPublicMembership: method({
    method: 'GET',
    path: '/orgs/:org/public_members/:username',
    urlParams: ['org', 'username'],
    checkOperation: true
  }),

  getMembershipForUser: method({
    method: 'GET',
    path: '/orgs/:org/memberships/:username',
    urlParams: ['org', 'username'],
    options: {
      treat404asEmpty: true
    }
  }),

  listMembershipsForAuthUser: method({
    method: 'GET',
    path: '/user/memberships/orgs'
  }),

  getMembershipForAuthUser: method({
    method: 'GET',
    path: '/user/memberships/orgs/:org',
    urlParams: ['org'],
    options: {
      treat404asEmpty: true
    }
  }),


});
