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
   * @param {String} username username of the user
   * @param {Object} options Optional request options
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
   * @param {Object} options Optional request options
   */
  getAuthUser: method({
    method: 'GET',
    path: '/user'
  }),

});
