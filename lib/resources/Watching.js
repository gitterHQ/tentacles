'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  listForRepo: method({
    method: 'GET',
    path: '/repos/:full_name/subscribers',
    urlParams: ['full_name']
  }),

  listForUser: method({
    method: 'GET',
    path: '/users/:username/subscriptions',
    urlParams: ['username']
  }),

  listForAuthUser: method({
    method: 'GET',
    path: '/user/subscriptions'
  }),

  getSubscriptionForAuthUser: method({
    method: 'GET',
    path: '/repos/:full_name/subscription',
    urlParams: ['full_name'],
    options: {
      treat404asEmpty: true
    }
  }),

  /* legacy */
  checkWatchForAuthUser: method({
    method: 'GET',
    path: '/user/subscriptions/:full_name',
    urlParams: ['full_name'],
    checkOperation: true
  })

});
