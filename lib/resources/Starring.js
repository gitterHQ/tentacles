'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/stargazers',
    urlParams: ['full_name']
  }),

  listForUser: method({
    method: 'GET',
    path: '/users/:username/starred',
    urlParams: ['username']
  }),

  listForAuthUser: method({
    method: 'GET',
    path: '/user/starred'
  }),

  checkStarForAuthUserForRepo: method({
    method: 'GET',
    path: '/user/starred/:full_name',
    urlParams: ['full_name'],
    checkOperation: true
  })

});
