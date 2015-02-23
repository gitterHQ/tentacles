'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * User Email
 * @namespace UserEmail
 */
module.exports = Resource.extend({

  /**
   * @function
   * @memberOf UserEmail
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/emails'
  })

});
