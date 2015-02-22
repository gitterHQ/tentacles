'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listForAuthUser: method({
    method: 'GET',
    path: '/user/repos'
  }),

  listForUser: method({
    method: 'GET',
    path: '/users/:username/repos',
    urlParams: ['username']
  }),

  listForOrg: method({
    method: 'GET',
    path: '/orgs/:org/repos',
    urlParams: ['org']
  }),

  get: method({
    method: 'GET',
    path: '/repos/:full_name',
    urlParams: ['full_name'],
    options: {
      treat404asEmpty: true
    }
  }),

  listContributors: method({
    method: 'GET',
    path: '/repos/:full_name/contributors',
    urlParams: ['full_name']
  }),

  listLanguages: method({
    method: 'GET',
    path: '/repos/:full_name/languages',
    urlParams: ['full_name']
  }),

  listTeams: method({
    method: 'GET',
    path: '/repos/:full_name/teams',
    urlParams: ['full_name']
  }),

  listTags: method({
    method: 'GET',
    path: '/repos/:full_name/tags',
    urlParams: ['full_name']
  }),

  listBranches: method({
    method: 'GET',
    path: '/repos/:full_name/branches',
    urlParams: ['full_name']
  }),

  getBranch: method({
    method: 'GET',
    path: '/repos/:full_name/branches/:branch',
    urlParams: ['full_name', 'branch'],
    options: {
      treat404asEmpty: true
    }
  }),

});
