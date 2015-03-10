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
   * @param {String} query Search query
   * @param {Object} options Optional request options.
   * @example client.search.repos('faye websockets')
   */
  repos: method({
    method: 'GET',
    path: '/search/repositories',
    queryParams: ['q']
  }),

  /**
   * @function
   * @param {String} query Search query
   * @param {Object} options Optional request options.
   * @example client.search.code('gitter user:suprememoocow')
   */
  code: method({
    method: 'GET',
    path: '/search/code',
    queryParams: ['q']
  }),

  /**
   * @function
   * @param {String} query Search query
   * @param {Object} options Optional request options
   * @example client.search.issues('gitter')
   */
  issues: method({
    method: 'GET',
    path: '/search/issues',
    queryParams: ['q']
  }),

  /**
   * @function
   * @param {String} query Search query
   * @param {Object} options Optional request options.
   * @example client.search.users('suprememoocow type:user')
   */
  users: method({
    method: 'GET',
    path: '/search/users',
    queryParams: ['q']
  }),

});
