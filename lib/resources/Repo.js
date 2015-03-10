'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Repository
 * @module repo
 */
module.exports = Resource.extend({

  /**
   * @function
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/repos'
  }),

  /**
   * @function
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/repos',
    urlParams: ['username']
  }),

  /**
   * @function
   */
  listForOrg: method({
    method: 'GET',
    path: '/orgs/:org/repos',
    urlParams: ['org']
  }),

  /**
   * @function
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name',
    urlParams: ['full_name'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * @function
   */
  listContributors: method({
    method: 'GET',
    path: '/repos/:full_name/contributors',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  listLanguages: method({
    method: 'GET',
    path: '/repos/:full_name/languages',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  listTeams: method({
    method: 'GET',
    path: '/repos/:full_name/teams',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  listTags: method({
    method: 'GET',
    path: '/repos/:full_name/tags',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  listBranches: method({
    method: 'GET',
    path: '/repos/:full_name/branches',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  getBranch: method({
    method: 'GET',
    path: '/repos/:full_name/branches/:branch',
    urlParams: ['full_name', 'branch'],
    options: {
      treat404asEmpty: true
    }
  }),

});
