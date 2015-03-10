'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Repository Collaborator
 * @module repoCollaborator
 */
module.exports = Resource.extend({

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  list: method({
    method: 'GET',
    path: '/repos/:full_name/collaborators',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  checkForUser: method({
    method: 'GET',
    path: '/repos/:full_name/collaborators/:username',
    urlParams: ['full_name', 'username'],
    checkOperation: true
  })


});
