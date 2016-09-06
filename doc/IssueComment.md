# issueComment

[Issues Comments](https://developer.github.com/v3/issues/comments/)



* * *

### issueComment.listForIssue(full_name, number, options) 

List comments on an issue
[GitHub API](https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**number** | `Number`, issue number|
**options** | `Object`, Optional request options|




---------------------------

### issueComment.listForRepo(full_name, options) 

List comments in a repository
[GitHub API](https://developer.github.com/v3/issues/comments/#list-comments-in-a-repository)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**options** | `Object`, Optional request options|




---------------------------

### issueComment.getComment(full_name, id, options) 

Get a single comment
[GitHub API](https://developer.github.com/v3/issues/comments/#get-a-single-comment)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**id** | `String`, id of the comment|
**options** | `Object`, Optional request options|




---------------------------

### issueComment.createComment(full_name, number, body, options) 

Create a comment
[GitHub API](https://developer.github.com/v3/issues/comments/#create-a-comment)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**number** | `Number`, issue number|
**body** | `Object`, body of the comment|
**options** | `Object`, Optional request options|




---------------------------

### issueComment.updateComment(full_name, id, body, options) 

Edit a comment
[GitHub API](https://developer.github.com/v3/issues/comments/#edit-a-comment)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**id** | `String`, id of the comment|
**body** | `Object`, body of the comment|
**options** | `Object`, Optional request options|




---------------------------

### issueComment.remove(full_name, id, options) 

Delete a comment
[GitHub API](https://developer.github.com/v3/issues/comments/#delete-a-comment)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**id** | `String`, id of the comment|
**options** | `Object`, Optional request options|




---------------------------


* * *










