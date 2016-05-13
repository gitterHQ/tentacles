'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Organization
 *
 * [GitHub API](https://developer.github.com/v3/orgs/)
 * @module org
 */
module.exports = Resource.extend({

  /**
   * List your organizations
   *
   * [GitHub API](https://developer.github.com/v3/orgs/#list-your-organizations)
   * @function
   * @param {Object} options Optional request options
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/orgs'
  }),

  /**
   * List user organizations
   *
   * [GitHub API](https://developer.github.com/v3/orgs/#list-user-organizations)
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/orgs',
    urlParams: ['username']
  }),

  /**
   * Get an organization
   *
   * [GitHub API](https://developer.github.com/v3/orgs/#get-an-organization)
   * @function
   * @param {String} org org name
   * @param {Object} options Optional request options
   */
  get: method({
    method: 'GET',
    path: '/orgs/:org',
    urlParams: ['org'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * Undocumented function to return an organization by its ID.
   * @function
   * @param {String} id id of the organization
   * @param {Object} options Optional request options
   */
  getById: method({
    method: 'GET',
    path: '/organizations/:id',
    urlParams: ['id'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * Get all organizations
   *
   * [GitHub API](https://developer.github.com/v3/orgs/#list-all-organizations)
   * @function
   * @param {Object} options Optional request options
   */
  listAll: method({
    method: 'GET',
    path: '/organizations'
  }),
});
