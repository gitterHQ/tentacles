'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * User
 * @module user
 */
module.exports = Resource.extend({

  /**
   * @function
   */
  get: method({
    method: 'GET',
    path: '/users/:username',
    urlParams: ['username'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * @function
   */
  getAuthUser: method({
    method: 'GET',
    path: '/user'
  }),

});
