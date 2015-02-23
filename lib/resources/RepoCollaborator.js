'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Repository Collaborator
 * @namespace RepoCollaborator
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf RepoCollaborator
   */
  list: method({
    method: 'GET',
    path: '/repos/:full_name/collaborators',
    urlParams: ['full_name']
  }),

  /**
   * @function
   * @memberOf RepoCollaborator
   */
  checkForUser: method({
    method: 'GET',
    path: '/repos/:full_name/collaborators/:username',
    urlParams: ['full_name', 'username'],
    checkOperation: true
  })


});
