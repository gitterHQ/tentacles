'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Repository Commit
 * @module repoCommit
 */
module.exports = Resource.extend({

  /**
   * @function
   */
  list: method({
    method: 'GET',
    path: '/repos/:full_name/commits',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/commits/:sha',
    urlParams: ['full_name', 'sha']
  }),

  /**
   * @function
   */
  compare: method({
    method: 'GET',
    path: '/repos/:full_name/compare/:base...:head',
    urlParams: ['full_name', 'base', 'head']
  })


});
