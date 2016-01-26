# org

Team

[GitHub API](https://developer.github.com/v3/orgs/teams/)



* * *

### org.listForOrg(org, options) 

List teams

[GitHub API](https://developer.github.com/v3/orgs/teams/#list-teams)

**Parameter**| **Description** |
--------------|---------------
**org** | `String`, org to list teams for|
**options** | `Object`, Optional request options|




---------------------------

### org.get(id, options) 

Get team

[GitHub API](https://developer.github.com/v3/orgs/teams/#get-team)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**options** | `Object`, Optional request options|




---------------------------

### org.create(org, body, options) 

Create team

In order to create a team, the authenticated user must be a member of :org.

[GitHub API](https://developer.github.com/v3/orgs/teams/#create-team)

**Parameter**| **Description** |
--------------|---------------
**org** | `String`, owner/repo name of repo|
**body** | `Object`, team details|
**options** | `Object`, Optional request options|




---------------------------

### org.update(id, body, options) 

Edit team

In order to edit a team, the authenticated user must either be an owner of
the org that the team is associated with, or a maintainer of the team.

[GitHub API](https://developer.github.com/v3/orgs/teams/#edit-team)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**body** | `Object`, team details|
**options** | `Object`, Optional request options|




---------------------------

### org.delete(id, options) 

Delete team

In order to delete a team, the authenticated user must be an owner of the
org that the team is associated with, or a maintainer of the team.

[GitHub API](https://developer.github.com/v3/orgs/teams/#delete-team)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**options** | `Object`, Optional request options|




---------------------------

### org.listMembers(id, options) 

List team members

In order to list members in a team, the team must be visible to the
authenticated user.

[GitHub API](https://developer.github.com/v3/orgs/teams/#list-team-members)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**options** | `Object`, Optional request options|




---------------------------

### org.getMembership(id, username, options) 

Get team membership

In order to get a user's membership with a team, the team must be visible to the authenticated user.

[GitHub API](https://developer.github.com/v3/orgs/teams/#get-team-membership)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**username** | `String`, username|
**options** | `Object`, Optional request options|




---------------------------

### org.addMembership(id, username, body, options) 

Add team membership

If the user is already a member of the team's organization, this endpoint
will add the user to the team. In order to add a membership between an
organization member and a team, the authenticated user must be an
organization owner or a maintainer of the team.

[GitHub API](https://developer.github.com/v3/orgs/teams/#add-team-membership)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**username** | `String`, username|
**body** | `Object`, body|
**options** | `Object`, Optional request options|




---------------------------

### org.removeMembership(id, username, options) 

Remove team membership

In order to remove a membership between a user and a team, the
authenticated user must have 'admin' permissions to the team or be an
owner of the organization that the team is associated with.

[GitHub API](https://developer.github.com/v3/orgs/teams/#remove-team-membership)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**username** | `String`, username|
**options** | `Object`, Optional request options|




---------------------------

### org.listRepos(id, options) 

List team repos

[GitHub API](https://developer.github.com/v3/orgs/teams/#list-team-repos)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**options** | `Object`, Optional request options|




---------------------------

### org.checkRepoManages(id, full_name, options) 

Check if a team manages a repository

[GitHub API](https://developer.github.com/v3/orgs/teams/#check-if-a-team-manages-a-repository)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**full_name** | `String`, owner/repo name of repo|
**options** | `Object`, Optional request options|




---------------------------

### org.addOrUpdateTeamRepo(id, full_name, body, options) 

Add or update team repository

In order to add a repository to a team or update the team's permission on
a repository, the authenticated user must have admin access to the
repository, and must be able to see the team. Also, the repository must be
owned by the organization, or a direct fork of a repository owned by the
organization.

[GitHub API](https://developer.github.com/v3/orgs/teams/#add-team-membership)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**full_name** | `String`, owner/repo name of repo|
**body** | `Object`, body|
**options** | `Object`, Optional request options|




---------------------------

### org.removeTeamRepo(id, full_name, options) 

Remove team repository

In order to remove a repository from a team, the authenticated user must
have admin access to the repository or be a maintainer of the team.

[GitHub API](https://developer.github.com/v3/orgs/teams/#remove-team-repository)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**full_name** | `String`, owner/repo name of repo|
**options** | `Object`, Optional request options|




---------------------------

### org.listForAuthUser(full_name, options) 

List user teams

List all of the teams across all of the organizations to which the
authenticated user belongs. This method requires user, repo, or read:org
scope when authenticating via OAuth.

[GitHub API](https://developer.github.com/v3/orgs/teams/#list-user-teams)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**options** | `Object`, Optional request options|




---------------------------


* * *










