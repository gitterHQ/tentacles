'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Repository Commit
 * @namespace RepoCommit
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf RepoCommit
   */
  list: method({
    method: 'GET',
    path: '/repos/:full_name/commits',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf RepoCommit
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/commits/:sha',
    urlParams: ['full_name', 'sha']
  }),

  /**
   * @function
   * @memberOf RepoCommit
   */
  compare: method({
    method: 'GET',
    path: '/repos/:full_name/compare/:base...:head',
    urlParams: ['full_name', 'base', 'head']
  })


});
