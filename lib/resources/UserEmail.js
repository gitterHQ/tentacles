'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * User Email
 * @module userEmail
 */
module.exports = Resource.extend({

  /**
   * @function
   * @param {Object} options Optional request options.
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/emails'
  })

});
