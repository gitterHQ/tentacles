'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * User Following
 * @namespace UserFollowing
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf UserFollowing
   */
  listForUser: method({
    method: 'GET',
    path: '/users/:username/following',
    urlParams: ['username']
  }),

  /**
   * @function
   * @memberOf UserFollowing
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/followers'
  }),

  /**
   * @function
   * @memberOf UserFollowing
   */
  listFollowingForUser: method({
    method: 'GET',
    path: '/users/:username/following',
    urlParams: ['username']
  }),

  /**
   * @function
   * @memberOf UserFollowing
   */
  listFollowingForAuthUser: method({
    method: 'GET',
    path: '/user/following'
  }),

  /**
   * @function
   * @memberOf UserFollowing
   */
  checkAuthUserFollowing: method({
    method: 'GET',
    path: '/user/following/:username',
    urlParams: ['username'],
    checkOperation: true
  }),

  /**
   * @function
   * @memberOf UserFollowing
   */
  checkFollowing: method({
    method: 'GET',
    path: '/users/:username/following/:target_user',
    urlParams: ['username', 'target_user'],
    checkOperation: true
  }),

});
