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
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  list: method({
    method: 'GET',
    path: '/repos/:full_name/commits',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} sha sha of the commit
   * @param {Object} options Optional request options
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/commits/:sha',
    urlParams: ['full_name', 'sha']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} base sha of the base commit
   * @param {String} head sha of the head commit
   * @param {Object} options Optional request options
   */
  compare: method({
    method: 'GET',
    path: '/repos/:full_name/compare/:base...:head',
    urlParams: ['full_name', 'base', 'head']
  })


});
