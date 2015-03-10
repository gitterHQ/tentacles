'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * User Follower
 * @module userFollower
 */
module.exports = Resource.extend({

  /**
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/following',
    urlParams: ['username']
  }),

  /**
   * @function
   * @param {Object} options Optional request options
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/followers'
  }),

  /**
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  listFollowingForUser: method({
    method: 'GET',
    path: '/users/:username/following',
    urlParams: ['username']
  }),

  /**
   * @function
   * @param {Object} options Optional request options
   */
  listFollowingForAuthUser: method({
    method: 'GET',
    path: '/user/following'
  }),

  /**
   * @function
   * @param {String} username username of the user
   * @param {Object} options Optional request options
   */
  checkAuthUserFollowing: method({
    method: 'GET',
    path: '/user/following/:username',
    urlParams: ['username'],
    checkOperation: true
  }),

  /**
   * @function
   * @param {String} username username of the user
   * @param {String} target_user username of the target_user
   * @param {Object} options Optional request options
   */
  checkFollowing: method({
    method: 'GET',
    path: '/users/:username/following/:target_user',
    urlParams: ['username', 'target_user'],
    checkOperation: true
  }),

});
