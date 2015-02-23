'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Search
 * @namespace Search
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf Search
   */
  repos: method({
    method: 'GET',
    path: '/search/repositories',
    queryParams: ['q']
  }),

  /**
   * @function
   * @memberOf Search
   */
  code: method({
    method: 'GET',
    path: '/search/code',
    queryParams: ['q']
  }),

  /**
   * @function
   * @memberOf Search
   */
  issues: method({
    method: 'GET',
    path: '/search/issues',
    queryParams: ['q']
  }),

  /**
   * @function
   * @memberOf Search
   */
  users: method({
    method: 'GET',
    path: '/search/users',
    queryParams: ['q']
  }),

});
