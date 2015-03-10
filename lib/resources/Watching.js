'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Activity Watching
 * @module watching
 */
module.exports = Resource.extend({

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options.
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/subscribers',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options.
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/subscriptions',
    urlParams: ['username']
  }),

  /**
   * @function
   * @param {Object} options Optional request options.
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/subscriptions'
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options.
   */
  getSubscriptionForAuthUser: method({
    method: 'GET',
    path: '/repos/:full_name/subscription',
    urlParams: ['full_name'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * @function
   * @deprecated
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options.
   */
  checkWatchForAuthUser: method({
    method: 'GET',
    path: '/user/subscriptions/:full_name',
    urlParams: ['full_name'],
    checkOperation: true
  })

});
