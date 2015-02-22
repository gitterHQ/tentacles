'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listAllVisibleForAuthUser: method({
    method: 'GET',
    path: '/issues'
  }),

  listAllOwnerAndMemberForAuthUser: method({
    method: 'GET',
    path: '/user/issues'
  }),

  listForOrgForAuthUser: method({
    method: 'GET',
    path: '/orgs/:org/issues',
    urlParams: ['org']
  }),

  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/issues',
    urlParams: ['full_name']
  }),

  get: method({
    method: 'GET',
    path: '/repos/:full_name/issues/:number',
    urlParams: ['full_name', 'number'],
    options: {
      treat404asEmpty: true
    }
  }),

});
