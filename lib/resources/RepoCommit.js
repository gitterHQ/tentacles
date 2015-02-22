'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  list: method({
    method: 'GET',
    path: '/repos/:full_name/commits',
    urlParams: ['full_name']
  }),

  get: method({
    method: 'GET',
    path: '/repos/:full_name/commits/:sha',
    urlParams: ['full_name', 'sha']
  }),

  compare: method({
    method: 'GET',
    path: '/repos/:full_name/compare/:base...:head',
    urlParams: ['full_name', 'base', 'head']
  })


});
