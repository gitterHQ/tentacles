'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Webhooks
 *
 * [GitHub API](https://developer.github.com/v3/repos/hooks/)
 *
 * @module repoWebHooks
 */
module.exports = Resource.extend({

  /**
   * List hooks
   *
   * [GitHub API](https://developer.github.com/v3/repos/hooks/#list-hooks)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  list: method({
    method: 'GET',
    path: '/repos/:full_name/hooks',
    urlParams: ['full_name']
  }),

  /**
   * Get single hook
   *
   * [GitHub API](https://developer.github.com/v3/repos/hooks/#get-single-hook)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} id id of the webhook
   * @param {Object} options Optional request options
   */
  get: method({
    method: 'GET',
    path: '/repos/:full_name/hooks/:id',
    urlParams: ['full_name', 'id'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * Create a hook
   *
   * [GitHub API](https://developer.github.com/v3/repos/hooks/#create-a-hook)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} body team details
   * @param {Object} options Optional request options
   */
   create: method({
     method: 'POST',
     path: '/repos/:full_name/hooks',
     urlParams: ['full_name']
   }),

   /**
    * Edit a hook
    *
    * [GitHub API](https://developer.github.com/v3/repos/hooks/#edit-a-hook)
    *
    * @function
    * @param {String} id id of the team
    * @param {Object} body team details
    * @param {Object} options Optional request options
    */
   update: method({
     method: 'PATCH',
     path: '/repos/:full_name/hooks/:id',
     urlParams: ['full_name', 'id']
   }),

   /**
    * Ping a hook
    *
    * [GitHub API](https://developer.github.com/v3/repos/hooks/#ping-a-hook)
    *
    * @function
    * @param {String} full_name owner/repo name of repo
    * @param {String} id id of the hook
    * @param {Object} body update details
    * @param {Object} options Optional request options
    */
   ping: method({
     method: 'POST',
     path: '/repos/:full_name/hooks/:id/pings',
     urlParams: ['full_name', 'id'],
     noBody: true
   }),

  /**
   * Delete a hook
   *
   * [GitHub API](https://developer.github.com/v3/repos/hooks/#delete-a-hook)
   *
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} id id of the webhook
   * @param {Object} options Optional request options
   */
  delete: method({
    method: 'DELETE',
    path: '/repos/:full_name/hooks/:id',
    urlParams: ['full_name', 'id'],
    noBody: true
  }),

});
