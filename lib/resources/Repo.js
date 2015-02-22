'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listAuthUser: method({
    method: 'GET',
    path: '/user/repos'
  }),

  list: method({
    method: 'GET',
    path: '/users/:username/repos',
    urlParams: ['username']
  }),

  listOrg: method({
    method: 'GET',
    path: '/orgs/:org/repos',
    urlParams: ['org']
  }),

  get: method({
    method: 'GET',
    path: '/repos/:owner_repo',
    urlParams: ['owner_repo'],
    options: {
      treat404asEmpty: true
    }
  }),

  listContributors: method({
    method: 'GET',
    path: '/repos/:owner_repo/contributors',
    urlParams: ['owner_repo']
  }),

  listLanguages: method({
    method: 'GET',
    path: '/repos/:owner_repo/languages',
    urlParams: ['owner_repo']
  }),

  listTeams: method({
    method: 'GET',
    path: '/repos/:owner_repo/teams',
    urlParams: ['owner_repo']
  }),

  listTags: method({
    method: 'GET',
    path: '/repos/:owner_repo/tags',
    urlParams: ['owner_repo']
  }),

  listBranches: method({
    method: 'GET',
    path: '/repos/:owner_repo/branches',
    urlParams: ['owner_repo']
  }),

  getBranch: method({
    method: 'GET',
    path: '/repos/:owner_repo/branches/:branch',
    urlParams: ['owner_repo', 'branch'],
    options: {
      treat404asEmpty: true
    }
  }),

});
