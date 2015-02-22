'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  list: method({
    method: 'GET',
    path: '/repos/:owner_repo/collaborators',
    urlParams: ['owner_repo']
  }),

  check: method({
    method: 'GET',
    path: '/repos/:owner_repo/collaborators/:username',
    urlParams: ['owner_repo', 'username'],
    checkOperation: true
  })


});
