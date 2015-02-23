'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Organization
 * @namespace Organization
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf Organization
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/orgs'
  }),

  /**
   * @function
   * @param {String} username
   * @param {Object} [options]
   * @memberOf Organization
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/orgs',
    urlParams: ['username']
  }),

  /**
   * @function
   * @param {String} org
   * @param {Object} [options]
   * @memberOf Organization
   */
  get: method({
    method: 'GET',
    path: '/orgs/:org',
    urlParams: ['org'],
    options: {
      treat404asEmpty: true
    }
  }),



});
