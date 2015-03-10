# issue

[Issues](https://developer.github.com/v3/issues/)



* * *

### issue.listAllVisibleForAuthUser(options) 

List all issues across all the authenticated user’s visible repositories including owned
repositories, member repositories, and organization repositories.

[GitHub API](https://developer.github.com/v3/issues/#list-issues)

**Parameters**

**options**: `Object`, Optional request options.



### issue.listAllOwnerAndMemberForAuthUser(options) 

List all issues across owned and member repositories for the authenticated user

[GitHub API](https://developer.github.com/v3/issues/#list-issues)

**Parameters**

**options**: `Object`, Optional request options



### issue.listForOrgForAuthUser(full_name, options) 

List all issues for a given organization for the authenticated user

[GitHub API](https://developer.github.com/v3/issues/#list-issues)

**Parameters**

**full_name**: `String`, owner/repo name of repo

**options**: `Object`, Optional request options



### issue.listForRepo(full_name, options) 

List issues for a repository

[GitHub API](https://developer.github.com/v3/issues/#list-issues-for-a-repository)

**Parameters**

**full_name**: `String`, owner/repo name of repo

**options**: `Object`, Optional request options



### issue.get(full_name, number, options) 

Get a single issue

[GitHub API](https://developer.github.com/v3/issues/#get-a-single-issue)

**Parameters**

**full_name**: `String`, owner/repo name of repo

**number**: `String`, Get a single issue

[GitHub API](https://developer.github.com/v3/issues/#get-a-single-issue)

**options**: `Object`, Optional request options




* * *










