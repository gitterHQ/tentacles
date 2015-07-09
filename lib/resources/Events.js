'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * [Activity Events](https://developer.github.com/v3/activity/events/)
 * @module events
 */
module.exports = Resource.extend({
  /**
   * List public events
   * @function
   * @param {Object} options Optional request options
   */
  listPublic: method({
    method: 'GET',
    path: '/events'
  }),

  /**
   * List repository events
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/events',
    urlParams: ['full_name']
  }),

  /**
   * List issue events for a repository
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listIssueEventsForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/issues/events',
    urlParams: ['full_name']
  }),

  /**
   * List public events for a network of repositories
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listNetworkEventsForRepo: method({
    method: 'GET',
    path: '/networks/:full_name/events',
    urlParams: ['full_name']
  }),

  /**
   * List public events for an organization
   * @function
   * @param {String} org org name
   * @param {Object} options Optional request options
   */
  listForOrg: method({
    method: 'GET',
    path: '/orgs/:org/events',
    urlParams: ['org']
  }),

  /**
   * List events that a user has received
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  listReceivedEventsForUser: method({
    method: 'GET',
    path: '/users/:username/received_events',
    urlParams: ['username']
  }),

  /**
   * List public events that a user has received
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  listPublicReceivedEventsForUser: method({
    method: 'GET',
    path: '/users/:username/received_events/public',
    urlParams: ['username']
  }),

  /**
   * List events performed by a user
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  listEventsForUser: method({
    method: 'GET',
    path: '/users/:username/events',
    urlParams: ['username']
  }),

  /**
   * List public events performed by a user
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  listPublicEventsForUser: method({
    method: 'GET',
    path: '/users/:username/events/public',
    urlParams: ['username']
  }),

  /**
   * List events for an organization
   * @function
   * @param {String} username username of the user
   * @param {String} org org name
   * @param {Object} options Optional request options
   */
  listForUserInOrg: method({
    method: 'GET',
    path: '/users/:username/events/orgs/:org',
    urlParams: ['username', 'org']
  })

});
