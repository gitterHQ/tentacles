'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Pull Request
 * @module pullRequest
 */
module.exports = Resource.extend({

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options.
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/pulls',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} number pull request number
   * @param {Object} options Optional request options.
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number',
    urlParams: ['full_name', 'number'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} number pull request number
   * @param {Object} options Optional request options.
   */
  listCommits: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/commits',
    urlParams: ['full_name', 'number']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} number pull request number
   * @param {Object} options Optional request options.
   */
  listFiles: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/files',
    urlParams: ['full_name', 'number']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} number pull request number
   * @param {Object} options Optional request options.
   */
  checkMerged: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/merge',
    urlParams: ['full_name', 'number'],
    checkOperation: true
  }),

});
