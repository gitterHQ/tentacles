'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listMembers: method({
    method: 'GET',
    path: '/orgs/:org/members',
    urlParams: ['org']
  }),

  checkMember: method({
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

  checkPublicMember: method({
    method: 'GET',
    path: '/orgs/:org/public_members/:username',
    urlParams: ['org', 'username'],
    checkOperation: true
  }),

  getMembership: method({
    method: 'GET',
    path: '/orgs/:org/memberships/:username',
    urlParams: ['org', 'username'],
    options: {
      treat404asEmpty: true
    }
  }),

  listAuthUserMemberships: method({
    method: 'GET',
    path: '/user/memberships/orgs'
  }),

  getAuthUserMembership: method({
    method: 'GET',
    path: '/user/memberships/orgs/:org',
    urlParams: ['org'],
    options: {
      treat404asEmpty: true
    }
  }),


});
