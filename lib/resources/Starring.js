'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Activity Starring
 * @namespace Starring
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf Starring
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/stargazers',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf Starring
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/starred',
    urlParams: ['username']
  }),

  /**
   * @function
   * @memberOf Starring
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/starred'
  }),

  /**
   * @function
   * @memberOf Starring
   */
  checkStarForAuthUserForRepo: method({
    method: 'GET',
    path: '/user/starred/:full_name',
    urlParams: ['full_name'],
    checkOperation: true
  })

});
