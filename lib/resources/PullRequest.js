'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Pull Request
 * @module pullRequest
 */
module.exports = Resource.extend({

  /**
   * @function
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/pulls',
    urlParams: ['full_name']
  }),

  /**
   * @function
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
   */
  listCommits: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/commits',
    urlParams: ['full_name', 'number']
  }),

  /**
   * @function
   */
  listFiles: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/files',
    urlParams: ['full_name', 'number']
  }),

  /**
   * @function
   */
  checkMerged: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/merge',
    urlParams: ['full_name', 'number'],
    checkOperation: true
  }),

});
