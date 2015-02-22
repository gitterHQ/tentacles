'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listForAuthUser: method({
    method: 'GET',
    path: '/user/emails'
  })

});
