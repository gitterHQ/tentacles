'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/pulls',
    urlParams: ['full_name']
  }),

  get: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number',
    urlParams: ['full_name', 'number'],
    options: {
      treat404asEmpty: true
    }
  }),

  listCommits: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/commits',
    urlParams: ['full_name', 'number']
  }),

  listFiles: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/files',
    urlParams: ['full_name', 'number']
  }),

  checkMerged: method({
    method: 'GET',
    path: '/repos/:full_name/pulls/:number/merge',
    urlParams: ['full_name', 'number'],
    checkOperation: true
  }),

});
