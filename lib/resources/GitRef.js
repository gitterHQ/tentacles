'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * [GitData References](https://developer.github.com/v3/git/refs/)
 * @module gitRef
 */
module.exports = Resource.extend({

  /**
   * Get a Reference
   *
   * [GitHub API](https://developer.github.com/v3/git/refs/#get-a-reference)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} ref full git ref
   * @param {Object} options Optional request options
   * @example tentacles.gitRef.get('gitterHQ/tentacles', 'heads/master')
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/git/refs/:ref',
    urlParams: ['full_name', 'ref']
  }),

  /**
   * Get all References
   *
   * [GitHub API](https://developer.github.com/v3/git/refs/#get-all-references)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} ref full git ref
   * @param {Object} options Optional request options
   */
  listAll: method({
    method: 'GET',
    path: '/repos/:full_name/git/refs',
    urlParams: ['full_name']
  }),

  /**
   * Create a Reference
   *
   * [GitHub API](https://developer.github.com/v3/git/refs/#create-a-reference)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} body reference create body
   * @param {Object} options Optional request options
   */
  create: method({
    method: 'POST',
    path: '/repos/:full_name/git/refs',
    urlParams: ['full_name']
  }),

  /**
   * Update a Reference
   *
   * [GitHub API](https://developer.github.com/v3/git/refs/#update-a-reference)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} ref full git ref
   * @param {Object} body reference create body
   * @param {Object} options Optional request options
   */
  update: method({
    method: 'PATCH',
    path: '/repos/:full_name/git/refs/:ref',
    urlParams: ['full_name', 'ref']
  }),

  /**
   * Delete a Reference
   *
   * [GitHub API](https://developer.github.com/v3/git/refs/#delete-a-reference)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} ref full git ref
   * @param {Object} options Optional request options
   */
  delete: method({
    method: 'DELETE',
    path: '/repos/:full_name/git/refs/:ref',
    urlParams: ['full_name', 'ref'],
    noBody: true
  }),



});
