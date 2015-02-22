'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listForAuthUser: method({
    method: 'GET',
    path: '/user/orgs'
  }),

  listForUser: method({
    method: 'GET',
    path: '/users/:username/orgs',
    urlParams: ['username']
  }),

  get: method({
    method: 'GET',
    path: '/orgs/:org',
    urlParams: ['org'],
    options: {
      treat404asEmpty: true
    }
  }),



});
