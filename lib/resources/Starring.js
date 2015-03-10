'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Activity Starring
 * @module starring
 */
module.exports = Resource.extend({

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options.
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/stargazers',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options.
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/starred',
    urlParams: ['username']
  }),

  /**
   * @function
   * @param {Object} options Optional request options.
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/starred'
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options.
   */
  checkStarForAuthUserForRepo: method({
    method: 'GET',
    path: '/user/starred/:full_name',
    urlParams: ['full_name'],
    checkOperation: true
  })

});
