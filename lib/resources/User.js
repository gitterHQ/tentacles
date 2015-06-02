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
   * Undocumented function to return a user by her ID.
   * @function
   * @param {String} id id of the user
   * @param {Object} options Optional request options
   */
  getById: method({
    method: 'GET',
    path: '/user/:id',
    urlParams: ['id'],
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
