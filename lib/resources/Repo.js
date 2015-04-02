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
   * @param {Object} options Optional request options
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/repos'
  }),

  /**
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/repos',
    urlParams: ['username']
  }),

  /**
   * @function
   * @param {String} org org name
   * @param {Object} options Optional request options
   */
  listForOrg: method({
    method: 'GET',
    path: '/orgs/:org/repos',
    urlParams: ['org']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
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
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listContributors: method({
    method: 'GET',
    path: '/repos/:full_name/contributors',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listLanguages: method({
    method: 'GET',
    path: '/repos/:full_name/languages',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listTeams: method({
    method: 'GET',
    path: '/repos/:full_name/teams',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listTags: method({
    method: 'GET',
    path: '/repos/:full_name/tags',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listBranches: method({
    method: 'GET',
    path: '/repos/:full_name/branches',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} branch name of the branch
   * @param {Object} options Optional request options
   */
  getBranch: method({
    method: 'GET',
    path: '/repos/:full_name/branches/:branch',
    urlParams: ['full_name', 'branch'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  delete: method({
    method: 'DELETE',
    path: '/repos/:full_name',
    urlParams: ['full_name'],
    noBody: true
  }),

});
