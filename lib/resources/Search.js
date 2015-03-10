'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Search
 * @module search
 */
module.exports = Resource.extend({

  /**
   * @function
   */
  repos: method({
    method: 'GET',
    path: '/search/repositories',
    queryParams: ['q']
  }),

  /**
   * @function
   */
  code: method({
    method: 'GET',
    path: '/search/code',
    queryParams: ['q']
  }),

  /**
   * @function
   */
  issues: method({
    method: 'GET',
    path: '/search/issues',
    queryParams: ['q']
  }),

  /**
   * @function
   */
  users: method({
    method: 'GET',
    path: '/search/users',
    queryParams: ['q']
  }),

});
