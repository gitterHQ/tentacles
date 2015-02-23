'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * User
 * @namespace User
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf User
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
   * @memberOf User
   */
  getAuthUser: method({
    method: 'GET',
    path: '/user'
  }),

});
