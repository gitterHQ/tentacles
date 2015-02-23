'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Activity Watching
 * @namespace Watching
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf Watching
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/subscribers',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf Watching
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/subscriptions',
    urlParams: ['username']
  }),

  /**
   * @function
   * @memberOf Watching
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/subscriptions'
  }),

  /**
   * @function
   * @memberOf Watching
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
   * @memberOf Watching
   */
  checkWatchForAuthUser: method({
    method: 'GET',
    path: '/user/subscriptions/:full_name',
    urlParams: ['full_name'],
    checkOperation: true
  })

});
