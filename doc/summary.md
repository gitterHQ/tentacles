Functions
=========


###[addMembership](OrgTeam.md):
Add team membership

If the user is already a member of the team&#39;s organization, this endpoint
will add the user to the team. In order to add a membership between an
organization member and a team, the authenticated user must be an
organization owner or a maintainer of the team.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#add-team-membership) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[addOrUpdateTeamRepo](OrgTeam.md):
Add or update team repository

In order to add a repository to a team or update the team&#39;s permission on
a repository, the authenticated user must have admin access to the
repository, and must be able to see the team. Also, the repository must be
owned by the organization, or a direct fork of a repository owned by the
organization.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#add-team-membership) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[checkAuthUserFollowing](UserFollower.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;UserFollower.js](../lib/resources/UserFollower.js))



###[checkFollowing](UserFollower.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;UserFollower.js](../lib/resources/UserFollower.js))



###[checkForUser](RepoCollaborator.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;RepoCollaborator.js](../lib/resources/RepoCollaborator.js))



###[checkMembershipForUser](OrgMember.md):
Check membership (in [..&#x2F;lib&#x2F;resources&#x2F;OrgMember.js](../lib/resources/OrgMember.js))



###[checkMerged](PullRequest.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;PullRequest.js](../lib/resources/PullRequest.js))



###[checkPublicMembership](OrgMember.md):
Check public membership (in [..&#x2F;lib&#x2F;resources&#x2F;OrgMember.js](../lib/resources/OrgMember.js))



###[checkRepoManages](OrgTeam.md):
Check if a team manages a repository

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#check-if-a-team-manages-a-repository) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[checkStarForAuthUserForRepo](Starring.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Starring.js](../lib/resources/Starring.js))



###[checkWatchForAuthUser](Watching.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Watching.js](../lib/resources/Watching.js))



###[code](Search.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Search.js](../lib/resources/Search.js))



###[compare](RepoCommit.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;RepoCommit.js](../lib/resources/RepoCommit.js))



###[create](GitCommit.md):
Create a Commit

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;commits&#x2F;#create-a-commit) (in [..&#x2F;lib&#x2F;resources&#x2F;GitCommit.js](../lib/resources/GitCommit.js))



###[create](GitRef.md):
Create a Reference

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;refs&#x2F;#create-a-reference) (in [..&#x2F;lib&#x2F;resources&#x2F;GitRef.js](../lib/resources/GitRef.js))



###[create](GitTree.md):
Create a Tree

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;trees&#x2F;#create-a-tree) (in [..&#x2F;lib&#x2F;resources&#x2F;GitTree.js](../lib/resources/GitTree.js))



###[create](OrgTeam.md):
Create team

In order to create a team, the authenticated user must be a member of :org.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#create-team) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[createFile](RepoContent.md):
Create a file

This method creates a new file in a repository

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;repos&#x2F;contents&#x2F;#create-a-file) (in [..&#x2F;lib&#x2F;resources&#x2F;RepoContent.js](../lib/resources/RepoContent.js))



###[delete](GitRef.md):
Delete a Reference

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;refs&#x2F;#delete-a-reference) (in [..&#x2F;lib&#x2F;resources&#x2F;GitRef.js](../lib/resources/GitRef.js))



###[delete](OrgTeam.md):
Delete team

In order to delete a team, the authenticated user must be an owner of the
org that the team is associated with, or a maintainer of the team.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#delete-team) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[delete](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[deleteFile](RepoContent.md):
Delete a file
This method deletes a file in a repository

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;repos&#x2F;contents&#x2F;#delete-a-file) (in [..&#x2F;lib&#x2F;resources&#x2F;RepoContent.js](../lib/resources/RepoContent.js))



###[get](PullRequest.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;PullRequest.js](../lib/resources/PullRequest.js))



###[get](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[get](Issue.md):
Get a single issue

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;issues&#x2F;#get-a-single-issue) (in [..&#x2F;lib&#x2F;resources&#x2F;Issue.js](../lib/resources/Issue.js))



###[get](GitCommit.md):
Get a Commit

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;commits&#x2F;#get-a-commit) (in [..&#x2F;lib&#x2F;resources&#x2F;GitCommit.js](../lib/resources/GitCommit.js))



###[get](GitRef.md):
Get a Reference

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;refs&#x2F;#get-a-reference) (in [..&#x2F;lib&#x2F;resources&#x2F;GitRef.js](../lib/resources/GitRef.js))



###[get](Org.md):
Get an organization

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;#get-an-organization) (in [..&#x2F;lib&#x2F;resources&#x2F;Org.js](../lib/resources/Org.js))



###[get](RepoCommit.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;RepoCommit.js](../lib/resources/RepoCommit.js))



###[get](OrgTeam.md):
Get team

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#get-team) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[get](GitTree.md):
Get a Tree

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;trees&#x2F;#get-a-tree) (in [..&#x2F;lib&#x2F;resources&#x2F;GitTree.js](../lib/resources/GitTree.js))



###[get](User.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;User.js](../lib/resources/User.js))



###[getAuthUser](User.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;User.js](../lib/resources/User.js))



###[getBranch](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[getById](Repo.md):
Undocumented function to return a repository by its ID. See http:&#x2F;&#x2F;stackoverflow.com&#x2F;questions&#x2F;28778568&#x2F;how-to-find-the-new-location-of-a-repository-after-a-rename (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[getById](User.md):
Undocumented function to return a user by her ID. (in [..&#x2F;lib&#x2F;resources&#x2F;User.js](../lib/resources/User.js))



###[getById](Org.md):
Undocumented function to return an organization by its ID. (in [..&#x2F;lib&#x2F;resources&#x2F;Org.js](../lib/resources/Org.js))



###[getContents](RepoContent.md):
Get contents

This method returns the contents of a file or directory in a repository.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;repos&#x2F;contents&#x2F;#get-contents) (in [..&#x2F;lib&#x2F;resources&#x2F;RepoContent.js](../lib/resources/RepoContent.js))



###[getMembership](OrgTeam.md):
Get team membership

In order to get a user&#39;s membership with a team, the team must be visible to the authenticated user.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#get-team-membership) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[getMembershipForAuthUser](OrgMember.md):
Get your organization membership (in [..&#x2F;lib&#x2F;resources&#x2F;OrgMember.js](../lib/resources/OrgMember.js))



###[getMembershipForUser](OrgMember.md):
Get organization membership (in [..&#x2F;lib&#x2F;resources&#x2F;OrgMember.js](../lib/resources/OrgMember.js))



###[getReadme](RepoContent.md):
Get the README

This method returns the preferred README for a repository.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;repos&#x2F;contents&#x2F;#get-the-readme) (in [..&#x2F;lib&#x2F;resources&#x2F;RepoContent.js](../lib/resources/RepoContent.js))



###[getSubscriptionForAuthUser](Watching.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Watching.js](../lib/resources/Watching.js))



###[issues](Search.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Search.js](../lib/resources/Search.js))



###[list](RepoCommit.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;RepoCommit.js](../lib/resources/RepoCommit.js))



###[list](RepoCollaborator.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;RepoCollaborator.js](../lib/resources/RepoCollaborator.js))



###[listAll](GitRef.md):
Get all References

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;refs&#x2F;#get-all-references) (in [..&#x2F;lib&#x2F;resources&#x2F;GitRef.js](../lib/resources/GitRef.js))



###[listAllOwnerAndMemberForAuthUser](Issue.md):
List all issues across owned and member repositories for the authenticated user

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;issues&#x2F;#list-issues) (in [..&#x2F;lib&#x2F;resources&#x2F;Issue.js](../lib/resources/Issue.js))



###[listAllVisibleForAuthUser](Issue.md):
List all issues across all the authenticated user’s visible repositories including owned
repositories, member repositories, and organization repositories.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;issues&#x2F;#list-issues) (in [..&#x2F;lib&#x2F;resources&#x2F;Issue.js](../lib/resources/Issue.js))



###[listBranches](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[listCommits](PullRequest.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;PullRequest.js](../lib/resources/PullRequest.js))



###[listContributors](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[listEventsForUser](Events.md):
List events performed by a user (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listFiles](PullRequest.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;PullRequest.js](../lib/resources/PullRequest.js))



###[listFollowingForAuthUser](UserFollower.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;UserFollower.js](../lib/resources/UserFollower.js))



###[listFollowingForUser](UserFollower.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;UserFollower.js](../lib/resources/UserFollower.js))



###[listForAuthUser](OrgTeam.md):
List user teams

List all of the teams across all of the organizations to which the
authenticated user belongs. This method requires user, repo, or read:org
scope when authenticating via OAuth.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#list-user-teams) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[listForAuthUser](UserEmail.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;UserEmail.js](../lib/resources/UserEmail.js))



###[listForAuthUser](Starring.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Starring.js](../lib/resources/Starring.js))



###[listForAuthUser](UserFollower.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;UserFollower.js](../lib/resources/UserFollower.js))



###[listForAuthUser](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[listForAuthUser](Org.md):
List your organizations

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;#list-your-organizations) (in [..&#x2F;lib&#x2F;resources&#x2F;Org.js](../lib/resources/Org.js))



###[listForAuthUser](Watching.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Watching.js](../lib/resources/Watching.js))



###[listForOrg](OrgTeam.md):
List teams

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#list-teams) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[listForOrg](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[listForOrg](Events.md):
List public events for an organization (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listForOrgForAuthUser](Issue.md):
List all issues for a given organization for the authenticated user

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;issues&#x2F;#list-issues) (in [..&#x2F;lib&#x2F;resources&#x2F;Issue.js](../lib/resources/Issue.js))



###[listForRepo](PullRequest.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;PullRequest.js](../lib/resources/PullRequest.js))



###[listForRepo](Watching.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Watching.js](../lib/resources/Watching.js))



###[listForRepo](Events.md):
List repository events (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listForRepo](Issue.md):
List issues for a repository

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;issues&#x2F;#list-issues-for-a-repository) (in [..&#x2F;lib&#x2F;resources&#x2F;Issue.js](../lib/resources/Issue.js))



###[listForRepo](Starring.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Starring.js](../lib/resources/Starring.js))



###[listForUser](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[listForUser](Starring.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Starring.js](../lib/resources/Starring.js))



###[listForUser](Watching.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Watching.js](../lib/resources/Watching.js))



###[listForUser](Org.md):
List user organizations

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;#list-user-organizations) (in [..&#x2F;lib&#x2F;resources&#x2F;Org.js](../lib/resources/Org.js))



###[listForUser](UserFollower.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;UserFollower.js](../lib/resources/UserFollower.js))



###[listForUserInOrg](Events.md):
List events for an organization (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listIssueEventsForRepo](Events.md):
List issue events for a repository (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listLanguages](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[listMembers](OrgMember.md):
Members list (in [..&#x2F;lib&#x2F;resources&#x2F;OrgMember.js](../lib/resources/OrgMember.js))



###[listMembers](OrgTeam.md):
List team members

In order to list members in a team, the team must be visible to the
authenticated user.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#list-team-members) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[listMembershipsForAuthUser](OrgMember.md):
List your organization memberships (in [..&#x2F;lib&#x2F;resources&#x2F;OrgMember.js](../lib/resources/OrgMember.js))



###[listNetworkEventsForRepo](Events.md):
List public events for a network of repositories (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listPublic](Events.md):
List public events (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listPublicEventsForUser](Events.md):
List public events performed by a user (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listPublicMembers](OrgMember.md):
Public members list (in [..&#x2F;lib&#x2F;resources&#x2F;OrgMember.js](../lib/resources/OrgMember.js))



###[listPublicReceivedEventsForUser](Events.md):
List public events that a user has received (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listReceivedEventsForUser](Events.md):
List events that a user has received (in [..&#x2F;lib&#x2F;resources&#x2F;Events.js](../lib/resources/Events.js))



###[listRepos](OrgTeam.md):
List team repos

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#list-team-repos) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[listTags](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[listTeams](Repo.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Repo.js](../lib/resources/Repo.js))



###[removeMembership](OrgTeam.md):
Remove team membership

In order to remove a membership between a user and a team, the
authenticated user must have &#39;admin&#39; permissions to the team or be an
owner of the organization that the team is associated with.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#remove-team-membership) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[removeTeamRepo](OrgTeam.md):
Remove team repository

In order to remove a repository from a team, the authenticated user must
have admin access to the repository or be a maintainer of the team.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#remove-team-repository) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[repos](Search.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Search.js](../lib/resources/Search.js))



###[update](OrgTeam.md):
Edit team

In order to edit a team, the authenticated user must either be an owner of
the org that the team is associated with, or a maintainer of the team.

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;orgs&#x2F;teams&#x2F;#edit-team) (in [..&#x2F;lib&#x2F;resources&#x2F;OrgTeam.js](../lib/resources/OrgTeam.js))



###[update](GitRef.md):
Update a Reference

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;git&#x2F;refs&#x2F;#update-a-reference) (in [..&#x2F;lib&#x2F;resources&#x2F;GitRef.js](../lib/resources/GitRef.js))



###[updateFile](RepoContent.md):
Update a file

This method updates a file in a repository

[GitHub API](https:&#x2F;&#x2F;developer.github.com&#x2F;v3&#x2F;repos&#x2F;contents&#x2F;#update-a-file) (in [..&#x2F;lib&#x2F;resources&#x2F;RepoContent.js](../lib/resources/RepoContent.js))



###[users](Search.md):
 (in [..&#x2F;lib&#x2F;resources&#x2F;Search.js](../lib/resources/Search.js))





Classes
=======


