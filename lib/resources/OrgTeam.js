'use strict';

var Resource = require('../Resource');
var method = Resource.method;

/**
 * Team
 *
 * [GitHub API](https://developer.github.com/v3/orgs/teams/)
 * @module org
 */
module.exports = Resource.extend({

  /**
   * List teams
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#list-teams)
   * @function
   * @param {String} org org to list teams for
   * @param {Object} options Optional request options
   */
  listForOrg: method({
    method: 'GET',
    path: '/orgs/:org/teams',
    urlParams: ['org']
  }),

  /**
   * Get team
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#get-team)
   * @function
   * @param {String} id id of the team
   * @param {Object} options Optional request options
   */
  get: method({
    method: 'GET',
    path: '/teams/:id',
    urlParams: ['id']
  }),

  /**
   * Create team
   *
   * In order to create a team, the authenticated user must be a member of :org.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#create-team)
   * @function
   * @param {String} org owner/repo name of repo
   * @param {Object} body team details
   * @param {Object} options Optional request options
   */
  create: method({
    method: 'POST',
    path: '/orgs/:org/teams',
    urlParams: ['org']
  }),

  /**
   * Edit team
   *
   * In order to edit a team, the authenticated user must either be an owner of
   * the org that the team is associated with, or a maintainer of the team.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#edit-team)
   * @function
   * @param {String} id id of the team
   * @param {Object} body team details
   * @param {Object} options Optional request options
   */
  update: method({
    method: 'PATCH',
    path: ' /teams/:id',
    urlParams: ['id']
  }),

  /**
   * Delete team
   *
   * In order to delete a team, the authenticated user must be an owner of the
   * org that the team is associated with, or a maintainer of the team.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#delete-team)
   * @function
   * @param {String} id id of the team
   * @param {Object} options Optional request options
   */
  delete: method({
    method: 'DELETE',
    path: '/teams/:id',
    urlParams: ['id'],
    noBody: true
  }),

  /**
   * List team members
   *
   * In order to list members in a team, the team must be visible to the
   * authenticated user.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#list-team-members)
   * @function
   * @param {String} id id of the team
   * @param {Object} options Optional request options
   */
  listMembers: method({
    method: 'GET',
    path: '/teams/:id/members',
    urlParams: ['id']
  }),

  /**
   * Get team membership
   *
   * In order to get a user's membership with a team, the team must be visible to the authenticated user.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#get-team-membership)
   * @function
   * @param {String} id id of the team
   * @param {String} username username
   * @param {Object} options Optional request options
   */
  getMembership: method({
    method: 'GET',
    path: '/teams/:id/memberships/:username',
    urlParams: ['id', 'username'],
    options: {
      treat404asEmpty: true
    }
  }),

  /**
   * Add team membership
   *
   * If the user is already a member of the team's organization, this endpoint
   * will add the user to the team. In order to add a membership between an
   * organization member and a team, the authenticated user must be an
   * organization owner or a maintainer of the team.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#add-team-membership)
   * @function
   * @param {String} id id of the team
   * @param {String} username username
   * @param {Object} body body
   * @param {Object} options Optional request options
   */
  addMembership: method({
    method: 'PUT',
    path: '/teams/:id/memberships/:username',
    urlParams: ['id', 'username']
  }),

  /**
   * Remove team membership
   *
   * In order to remove a membership between a user and a team, the
   * authenticated user must have 'admin' permissions to the team or be an
   * owner of the organization that the team is associated with.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#remove-team-membership)
   * @function
   * @param {String} id id of the team
   * @param {String} username username
   * @param {Object} options Optional request options
   */
  removeMembership: method({
    method: 'DELETE',
    path: '/teams/:id',
    urlParams: ['id'],
    noBody: true
  }),

  /**
   * List team repos
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#list-team-repos)
   * @function
   * @param {String} id id of the team
   * @param {Object} options Optional request options
   */
  listRepos: method({
    method: 'GET',
    path: '/teams/:id/repos',
    urlParams: ['id']
  }),

  /**
   * Check if a team manages a repository
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#check-if-a-team-manages-a-repository)
   * @function
   * @param {String} id id of the team
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  checkRepoManages: method({
    method: 'GET',
    path: '/teams/:id/repos/:full_name',
    urlParams: ['org', 'full_name'],
    checkOperation: true
  }),

  /**
   * Add or update team repository
   *
   * In order to add a repository to a team or update the team's permission on
   * a repository, the authenticated user must have admin access to the
   * repository, and must be able to see the team. Also, the repository must be
   * owned by the organization, or a direct fork of a repository owned by the
   * organization.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#add-team-membership)
   * @function
   * @param {String} id id of the team
   * @param {String} full_name owner/repo name of repo
   * @param {Object} body body
   * @param {Object} options Optional request options
   */
  addOrUpdateTeamRepo: method({
    method: 'PUT',
    path: '/teams/:id/repos/:full_name',
    urlParams: ['id', 'full_name']
  }),

  /**
   * Remove team repository
   *
   * In order to remove a repository from a team, the authenticated user must
   * have admin access to the repository or be a maintainer of the team.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#remove-team-repository)
   * @function
   * @param {String} id id of the team
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  removeTeamRepo: method({
    method: 'DELETE',
    path: '/teams/:id/repos/:full_name',
    urlParams: ['id', 'full_name'],
    noBody: true
  }),

  /**
   * List user teams
   *
   * List all of the teams across all of the organizations to which the
   * authenticated user belongs. This method requires user, repo, or read:org
   * scope when authenticating via OAuth.
   *
   * [GitHub API](https://developer.github.com/v3/orgs/teams/#list-user-teams)
   * @function
   * @param {String} full_name owner/repo name of repo
   * @param {Object} options Optional request options
   */
  listForAuthUser: method({
    method: 'GET',
    path: '/user/teams'
  }),

});
