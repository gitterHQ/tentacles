tentacles [![Build Status](https://travis-ci.org/gitterHQ/tentacles.svg?branch=v0.1.8)](https://travis-ci.org/gitterHQ/tentacles) [![Coverage Status](https://coveralls.io/repos/gitterHQ/tentacles/badge.svg?branch=master)](https://coveralls.io/r/gitterHQ/tentacles?branch=master) [![Dependencies](https://david-dm.org/gitterHQ/tentacles.svg)](https://david-dm.org/gitterHQ/tentacles)
=========

Tentacles is a extensible, promise-based GitHub client for node.js. It's
designed to be easy to configure and to be as stateless as possible, making it
suitable for server environments.

It can also cache GitHub HTTP responses to speed up your app and reduce rate limits.

Tentacles does not yet cover the entire GitHub API: the methods currently available are
mostly those used by [Gitter](https://gitter.im). It is, however, very easy to extend
and we welcome pull-requests.

The client aims to maintain a direct one-to-one mapping with the GitHub API as much
as possible.

# Usage

Basic usage is straight-forward:

```javascript
var Tentacles = require('tentacles');
var tentacles = new Tentacles();

tentacles.user.get('suprememoocow')
  .then(function(user) {
    // ...
  });
```

To specify an access token:

```javascript
var Tentacles = require('tentacles');
var tentacles = new Tentacles();

tentacles.user.get('suprememoocow', { accessToken: '...' })
  .then(function(user) {
    // ...
  });
```

... or specify the access token globally ...

```javascript
var Tentacles = require('tentacles');
var tentacles = new Tentacles({ accessToken: '...' });

tentacles.user.get('suprememoocow')
  .then(function(user) {
    // ...
  });

```
## General Pattern

All API methods adhere to the same pattern:

 * **For `GET` methods**: `method`(`param1`, `param2`, ..., `options`).
 * **For `POST`/`PUT`/`POST`/`DELETE` methods**: `method`(`param1`, `param2`, `body`, `options`).

`options` is not required. If specified, it should contain:

 * `query`: a hash of query parameters. For example ` { query: { sort: 'state' } } `
 * `accessToken`: the access token to pass in for non-anonymous requests. This will be used to set the `Authorization` header.
 * `spread`: set to true to make the promise return an array of [`body`, `response`], which will give you access to the headers, status code, etc. [Read more here.](#accessing-the-response)
 * `headers`: a hash of headers to send through with the request.

#### Prefixes

Methods which return a **boolean value** will generally be prefixed with `check`.

Methods which return a **single object** will generally be prefixed with `get`.

Methods which return an **array** will generally be prefixed with `list`.

## Resources

The following resources are supports

 * **Activity**
   * [`tentacles.starring`](doc/Starring.md)
   * [`tentacles.watching`](doc/Watching.md)
 * **Git Data**
   * [`tentacles.gitCommit`](doc/GitCommit.md)
   * [`tentacles.gitRef`](doc/GitRef.md)
   * [`tentacles.gitTree`](doc/GitTree.md)
 * **Issues**  
   * [`tentacles.issue`](doc/Issue.md)
 * **Organisations**  
   * [`tentacles.org`](doc/Org.md)
   * [`tentacles.orgMember`](doc/OrgMember.md)
 * **Pull Requests**
   * [`tentacles.pullRequest`](doc/PullRequest.md)
 * **Repositories**
   * [`tentacles.repo`](doc/Repo.md)
   * [`tentacles.repoCollaborator`](doc/RepoCollaborator.md)
   * [`tentacles.repoCommit`](doc/RepoCommit.md)
   * [`tentacles.repoContent`](doc/RepoContent.md)
 * **Search**
   * [`tentacles.search`](doc/Search.md)
 * **User**
   * [`tentacles.user`](doc/User.md)
   * [`tentacles.userEmail`](doc/UserEmail.md)
   * [`tentacles.userFollower`](doc/UserFollower.md)

## Global Default Headers

It's possible to configure global default headers, which will be sent on all requests (unless overridden in the method options),
by specifying the `headers` option in the constructor.

```javascript
var tentacles = new Tentacles({
  headers: {
    Accept: 'application/vnd.github.moondragon+json'
  },
});
```

## Anonymous Usage

GitHub heavily limits anonymous API usage. If you expect to be using the API
for anonymous users, it's highly recommended that you pass in a `clientId`/`clientSecret`.
This will allow a much higher API limit.

```javascript
var Tentacles = require('tentacles');
var tentacles = new Tentacles({ clientId: '...', clientSecret: '...' });

tentacles.user.get('suprememoocow')
  .then(function(user) {
    // ...
  });

```

Some APIs will use your clientId/clientSecret. If you prefer to use a different
set of credentials for anonymous usage, use `anonymousClientId`/`anonymousClientSecret`
instead:

```javascript
var Tentacles = require('tentacles');
var tentacles = new Tentacles({ anonymousClientId: '...', anonymousClientSecret: '...' });

tentacles.user.get('suprememoocow')
  .then(function(user) {
    // ...
  });

```

## Accessing the Response

Sometimes it's useful to access the response headers. In order to do this, use the
`spread` option. When `spread` is `true`, the promise will resolve an array of
[`body`, `response`]. This can then be spread across the parameters of the promise
callback using Q's `spread` method, like this:

```javascript
var Tentacles = require('tentacles');
var tentacles = new Tentacles();

tentacles.user.get('suprememoocow', { spread: true })
  .spread(function(user, response) {
    // Access `response.headers`, `response.statusCode` etc
  });
```

It's also possible to specify this option globally, like so
```javascript
var Tentacles = require('tentacles');
var tentacles = new Tentacles({ spread: true });

tentacles.user.get('suprememoocow')
  .spread(function(user, response) {
    // Access `response.headers`, `response.statusCode` etc
  });
```

## Extensibility

Under the covers, Tentacles uses [request-extensible](https://github.com/suprememoocow/request-extensible)
to allow additional middleware layers to be added to the outgoing (or incoming)
GitHub API request. This adds a great deal of extensiblity to the library.

Add extensions through the `extensions` option on the constructor:

```javascript
var Tentacles = require('tentacles');
var tentacles = new Tentacles({
  extensions: [
    githubApiStats,       // These are request-extensible extensions
    rateLimiterWarning
  ]
});
```

## Caching GitHub API responses

By using HTTP caching semantics and conditional requests you can speed up your application
and reduce rate limiting. We've built an [request-http-cache](https://github.com/gitterHQ/request-http-cache)
for Tentacles to do exactly this.

You can cache responses from GitHub in-memory, or (better for production) in a Redis instance.

Read more over at [request-http-cache](https://github.com/gitterHQ/request-http-cache).

Here's a simple example setup:

```javascript
var RequestHttpCache = require('request-http-cache');
var httpRequestCache = new RequestHttpCache({
  max: 1024*1024 // Maximum cache size (1mb) defaults to 512Kb
});

var Tentacles = require('tentacles');
var tentacles = new Tentacles({
  extensions: [
    httpRequestCache.extension
  ]
});
```

### Streaming pagenated results

Prefer using streams for pagenated results? Take a look at [Tentacles Streams](https://github.com/gitterHQ/tentacles-streams), which has an identical API to Tentacles, but returns objectstreams of all the pages of results.

## Authors

Lovingly build by [@suprememoocow](https://twitter.com/suprememoocow) and the team at [Gitter](https://gitter.im).

## Contributing

Please adhere to the [airbnb/javascript](https://github.com/airbnb/javascript)
style guide for any PRs.

Please add documentation for any methods in the [JSDox format](http://jsdox.org).
To regenerate the markdown documentation, run `npm run-script doc`

#### Where to put your changes

There are many ways to categorise API methods. To avoid confusion, this client
matches the documentation structure as it is presented on
[developer.github.com](https://developer.github.com).


# Licence
```
License
The MIT License (MIT)

Copyright (c) 2015, Troupe Technology Limited

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
