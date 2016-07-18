# issueLabel

[Issues Labels](https://developer.github.com/v3/issues/labels/)



* * *

### issueLabel.listForRepo(full_name, options) 

List all labels for this repository

[GitHub API](https://developer.github.com/v3/issues/labels/#list-all-labels-for-this-repository)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.getLabel(full_name, name, options) 

Get a single label

[GitHub API](https://developer.github.com/v3/issues/labels/#get-a-single-label)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**name** | `String`, name of the label|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.createLabel(full_name, body, options) 

Create a label

[GitHub API](https://developer.github.com/v3/issues/labels/#create-a-label)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**body** | `Object`, body of label|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.updateLabel(full_name, name, body, options) 

Update a label

[GitHub API](https://developer.github.com/v3/issues/labels/#update-a-label)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**name** | `String`, name of the label|
**body** | `Object`, body of label|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.deleteLabel(full_name, name, options) 

Delete a label

[GitHub API](https://developer.github.com/v3/issues/labels/#delete-a-label)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**name** | `String`, name of the label|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.listForIssue(full_name, number, options) 

List labels on an issue

[GitHub API](https://developer.github.com/v3/issues/labels/#list-labels-on-an-issue)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**number** | `Number`, number of the issue|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.addToIssue(full_name, number, body, options) 

Add labels to an issue

[GitHub API](https://developer.github.com/v3/issues/labels/#add-labels-to-an-issue)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**number** | `Number`, number of the issue|
**body** | `Object`, body of label|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.removeFromIssue(full_name, number, name, options) 

Remove a label from an issue

[GitHub API](https://developer.github.com/v3/issues/labels/#remove-a-label-from-an-issue)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**number** | `Number`, number of the issue|
**name** | `String`, name of the label|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.replaceAllForIssue(full_name, number, body, options) 

Replace all labels for an issue

[GitHub API](https://developer.github.com/v3/issues/labels/#replace-all-labels-for-an-issue)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**number** | `Number`, number of the issue|
**body** | `Object`, body of label|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.removeAllFromIssue(full_name, number, options) 

Remove all labels from an issue

[GitHub API](https://developer.github.com/v3/issues/labels/#remove-all-labels-from-an-issue)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**number** | `Number`, number of the issue|
**options** | `Object`, Optional request options|




---------------------------

### issueLabel.listForMilestone(full_name, number, options) 

Get labels for every issue in a milestone

[GitHub API](https://developer.github.com/v3/issues/labels/#get-labels-for-every-issue-in-a-milestone)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**number** | `Number`, number of the issue|
**options** | `Object`, Optional request options|




---------------------------


* * *










