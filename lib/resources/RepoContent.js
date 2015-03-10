'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * [Repo Contents](https://developer.github.com/v3/repos/contents/)
 * @module repoContent
 */
module.exports = Resource.extend({

  /**
   * Get the README
   *
   * This method returns the preferred README for a repository.
   *
   * [GitHub API](https://developer.github.com/v3/repos/contents/#get-the-readme)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  getReadme: method({
    method: 'GET',
    path: '/repos/:full_name/readme',
    urlParams: ['full_name']
  }),

  /**
   * Get contents
   *
   * This method returns the contents of a file or directory in a repository.
   *
   * [GitHub API](https://developer.github.com/v3/repos/contents/#get-contents)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} path path of the file
   * @param {Object} options Optional request options
   */
  getContents: method({
    method: 'GET',
    path: '/repos/:full_name/contents/:path',
    urlParams: ['full_name', 'path']
  }),


  /**
   * Create a file
   *
   * This method creates a new file in a repository
   *
   * [GitHub API](https://developer.github.com/v3/repos/contents/#create-a-file)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} path path of the file
   * @param {Object} body file create body
   * @param {Object} options Optional request options
   */
  createFile: method({
    method: 'PUT',
    path: '/repos/:full_name/contents/:path',
    urlParams: ['full_name', 'path']
  }),

  /**
   * Update a file
   *
   * This method updates a file in a repository
   *
   * [GitHub API](https://developer.github.com/v3/repos/contents/#update-a-file)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} path path of the file
   * @param {Object} body file update body
   * @param {Object} options Optional request options
   */
  updateFile: method({
    method: 'PUT',
    path: '/repos/:full_name/contents/:path',
    urlParams: ['full_name', 'path']
  }),

  /**
   * Delete a file
   * This method deletes a file in a repository
   *
   * [GitHub API](https://developer.github.com/v3/repos/contents/#delete-a-file)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {String} path path of the file
   * @param {Object} body file delete body
   * @param {Object} options Optional request options
   */
  deleteFile: method({
    method: 'DELETE',
    path: '/repos/:full_name/contents/:path',
    urlParams: ['full_name', 'path']
  }),

});
