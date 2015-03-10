# repoContent

[Repo Contents](https://developer.github.com/v3/repos/contents/)



* * *

### repoContent.getReadme(full_name, options) 

Get the README

This method returns the preferred README for a repository.

[GitHub API](https://developer.github.com/v3/repos/contents/#get-the-readme)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**options** | `Object`, Optional request options|




---------------------------

### repoContent.getContents(full_name, options) 

Get contents

This method returns the contents of a file or directory in a repository.

[GitHub API](https://developer.github.com/v3/repos/contents/#get-contents)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**options** | `Object`, Optional request options|




---------------------------

### repoContent.createFile(full_name, path, body, options) 

Create a file

This method creates a new file in a repository

[GitHub API](https://developer.github.com/v3/repos/contents/#create-a-file)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**path** | `String`, path of the file|
**body** | `Object`, file create body|
**options** | `Object`, Optional request options|




---------------------------

### repoContent.updateFile(full_name, path, body, options) 

Update a file

This method updates a file in a repository

[GitHub API](https://developer.github.com/v3/repos/contents/#update-a-file)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**path** | `String`, path of the file|
**body** | `Object`, file update body|
**options** | `Object`, Optional request options|




---------------------------

### repoContent.deleteFile(full_name, path, body, options) 

Delete a file
This method deletes a file in a repository

[GitHub API](https://developer.github.com/v3/repos/contents/#delete-a-file)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**path** | `String`, path of the file|
**body** | `Object`, file delete body|
**options** | `Object`, Optional request options|




---------------------------


* * *










