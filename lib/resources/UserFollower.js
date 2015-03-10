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
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/following',
    urlParams: ['username']
  }),

  /**
   * @function
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/followers'
  }),

  /**
   * @function
   */
  listFollowingForUser: method({
    method: 'GET',
    path: '/users/:username/following',
    urlParams: ['username']
  }),

  /**
   * @function
   */
  listFollowingForAuthUser: method({
    method: 'GET',
    path: '/user/following'
  }),

  /**
   * @function
   */
  checkAuthUserFollowing: method({
    method: 'GET',
    path: '/user/following/:username',
    urlParams: ['username'],
    checkOperation: true
  }),

  /**
   * @function
   */
  checkFollowing: method({
    method: 'GET',
    path: '/users/:username/following/:target_user',
    urlParams: ['username', 'target_user'],
    checkOperation: true
  }),

});
