'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Repository
 * @namespace Repo
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf Repo
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/repos'
  }),

  /**
   * @function
   * @memberOf Repo
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/repos',
    urlParams: ['username']
  }),

  /**
   * @function
   * @memberOf Repo
   */
  listForOrg: method({
    method: 'GET',
    path: '/orgs/:org/repos',
    urlParams: ['org']
  }),

  /**
   * @function
   * @memberOf Repo
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
   * @memberOf Repo
   */
  listContributors: method({
    method: 'GET',
    path: '/repos/:full_name/contributors',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf Repo
   */
  listLanguages: method({
    method: 'GET',
    path: '/repos/:full_name/languages',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf Repo
   */
  listTeams: method({
    method: 'GET',
    path: '/repos/:full_name/teams',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf Repo
   */
  listTags: method({
    method: 'GET',
    path: '/repos/:full_name/tags',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf Repo
   */
  listBranches: method({
    method: 'GET',
    path: '/repos/:full_name/branches',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf Repo
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
