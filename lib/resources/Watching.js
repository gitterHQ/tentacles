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
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/subscribers',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/subscriptions',
    urlParams: ['username']
  }),

  /**
   * @function
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/subscriptions'
  }),

  /**
   * @function
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
   */
  checkWatchForAuthUser: method({
    method: 'GET',
    path: '/user/subscriptions/:full_name',
    urlParams: ['full_name'],
    checkOperation: true
  })

});
