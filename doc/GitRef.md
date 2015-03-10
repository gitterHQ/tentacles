# gitRef

[GitData References](https://developer.github.com/v3/git/refs/)



* * *

### gitRef.get(full_name, ref, options) 

Get a Reference

[GitHub API](https://developer.github.com/v3/git/refs/#get-a-reference)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**ref** | `String`, full git ref|
**options** | `Object`, Optional request options|



**Example**:
```js
tentacles.gitRef.get('gitterHQ/tentacles', 'heads/master')
```


---------------------------

### gitRef.listAll(full_name, ref, options) 

Get all References

[GitHub API](https://developer.github.com/v3/git/refs/#get-all-references)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**ref** | `String`, full git ref|
**options** | `Object`, Optional request options|




---------------------------

### gitRef.create(full_name, body, options) 

Create a Reference

[GitHub API](https://developer.github.com/v3/git/refs/#create-a-reference)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**body** | `Object`, reference create body|
**options** | `Object`, Optional request options|




---------------------------

### gitRef.update(full_name, ref, body, options) 

Update a Reference

[GitHub API](https://developer.github.com/v3/git/refs/#update-a-reference)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**ref** | `String`, full git ref|
**body** | `Object`, reference create body|
**options** | `Object`, Optional request options|




---------------------------

### gitRef.delete(full_name, ref, options) 

Delete a Reference

[GitHub API](https://developer.github.com/v3/git/refs/#delete-a-reference)

**Parameter**| **Description** |
--------------|---------------
**full_name** | `String`, owner/repo name of repo|
**ref** | `String`, full git ref|
**options** | `Object`, Optional request options|




---------------------------


* * *










