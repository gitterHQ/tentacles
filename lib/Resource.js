'use strict';

// Provide extension mechanism for Client Resource Sub-Classes
Resource.extend = require('./extend');

// Expose method-creator & prepared (basic) methods
Resource.method = require('./Method');

// Encapsulates request logic for a Client Resource
function Resource(client) {
  this._client = client;
}

Resource.prototype = {
};

module.exports = Resource;
