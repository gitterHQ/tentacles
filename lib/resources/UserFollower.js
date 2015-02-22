'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listForUser: method({
    method: 'GET',
    path: '/users/:username/following',
    urlParams: ['username']
  }),

  listForAuthUser: method({
    method: 'GET',
    path: '/user/followers'
  }),

  listFollowingForUser: method({
    method: 'GET',
    path: '/users/:username/following',
    urlParams: ['username']
  }),

  listFollowingForAuthUser: method({
    method: 'GET',
    path: '/user/following'
  }),

  checkAuthUserFollowing: method({
    method: 'GET',
    path: '/user/following/:username',
    urlParams: ['username'],
    checkOperation: true
  }),

  checkFollowing: method({
    method: 'GET',
    path: '/users/:username/following/:target_user',
    urlParams: ['username', 'target_user'],
    checkOperation: true
  }),

});
