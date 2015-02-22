'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  get: method({
    method: 'GET',
    path: '/users/:username',
    urlParams: ['username'],
    options: {
      treat404asEmpty: true
    }
  }),

  getAuthUser: method({
    method: 'GET',
    path: '/user'
  }),

});
