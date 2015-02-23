'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Pull Request
 * @namespace PullRequest
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf PullRequest
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/pulls',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf PullRequest
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number',
    urlParams: ['full_name', 'number'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * @function
   * @memberOf PullRequest
   */
  listCommits: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/commits',
    urlParams: ['full_name', 'number']
  }),

  /**
   * @function
   * @memberOf PullRequest
   */
  listFiles: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/files',
    urlParams: ['full_name', 'number']
  }),

  /**
   * @function
   * @memberOf PullRequest
   */
  checkMerged: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/merge',
    urlParams: ['full_name', 'number'],
    checkOperation: true
  }),

});
