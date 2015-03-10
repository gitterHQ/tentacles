'use strict';

var createError = require('create-error');

var TentaclesError = createError('TentaclesError');
var TentaclesGitHubError = createError(TentaclesError, 'TentaclesGitHubError');

module.exports = {
  TentaclesError: TentaclesError,
  TentaclesGitHubError: TentaclesGitHubError
};
