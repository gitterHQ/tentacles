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
   */
  list: method({
    method: 'GET',
    path: '/repos/:full_name/collaborators',
    urlParams: ['full_name']
  }),

  /**
   * @function
   */
  checkForUser: method({
    method: 'GET',
    path: '/repos/:full_name/collaborators/:username',
    urlParams: ['full_name', 'username'],
    checkOperation: true
  })


});
