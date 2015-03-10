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
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/stargazers',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/starred',
    urlParams: ['username']
  }),

  /**
   * @function
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/starred'
  }),

  /**
   * @function
   */
  checkStarForAuthUserForRepo: method({
    method: 'GET',
    path: '/user/starred/:full_name',
    urlParams: ['full_name'],
    checkOperation: true
  })

});
