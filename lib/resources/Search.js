'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  repos: method({
    method: 'GET',
    path: '/search/repositories',
    queryParams: ['q']
  }),

  code: method({
    method: 'GET',
    path: '/search/code',
    queryParams: ['q']
  }),

  issues: method({
    method: 'GET',
    path: '/search/issues',
    queryParams: ['q']
  }),

  users: method({
    method: 'GET',
    path: '/search/users',
    queryParams: ['q']
  }),

});
