# repoWebHooks

Webhooks

[GitHub API](https://developer.github.com/v3/repos/hooks/)



* * *

### repoWebHooks.list(full_name, options) 

List hooks

[GitHub API](https://developer.github.com/v3/repos/hooks/#list-hooks)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**options** | `Object`, Optional request options|




---------------------------

### repoWebHooks.get(full_name, id, options) 

Get single hook

[GitHub API](https://developer.github.com/v3/repos/hooks/#get-single-hook)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**id** | `String`, id of the webhook|
**options** | `Object`, Optional request options|




---------------------------

### repoWebHooks.create(full_name, body, options) 

Create a hook

[GitHub API](https://developer.github.com/v3/repos/hooks/#create-a-hook)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**body** | `Object`, team details|
**options** | `Object`, Optional request options|




---------------------------

### repoWebHooks.update(id, body, options) 

Edit a hook

[GitHub API](https://developer.github.com/v3/repos/hooks/#edit-a-hook)

**Parameter**| **Description** |
--------------|---------------
**id** | `String`, id of the team|
**body** | `Object`, team details|
**options** | `Object`, Optional request options|




---------------------------

### repoWebHooks.ping(full_name, id, body, options) 

Ping a hook

[GitHub API](https://developer.github.com/v3/repos/hooks/#ping-a-hook)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**id** | `String`, id of the hook|
**body** | `Object`, update details|
**options** | `Object`, Optional request options|




---------------------------

### repoWebHooks.delete(full_name, id, options) 

Delete a hook

[GitHub API](https://developer.github.com/v3/repos/hooks/#delete-a-hook)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**id** | `String`, id of the webhook|
**options** | `Object`, Optional request options|




---------------------------


* * *










