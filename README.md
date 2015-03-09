tentacles [![Build Status](https://travis-ci.org/gitterHQ/tentacles.svg?branch=v0.1.8)](https://travis-ci.org/gitterHQ/tentacles) [![Coverage Status](https://coveralls.io/repos/gitterHQ/tentacles/badge.svg?branch=master)](https://coveralls.io/r/gitterHQ/tentacles?branch=master)
=========

Tentacles is a customisable, promise-based GitHub client for node.js. It's
designed to be easy to configure and to be as stateless as possible, making it
suitable for server environments.

It does not yet cover the entire GitHub API: the methods currently available are
mostly those used by Gitter. It is, however, very easy to extend and we welcome
pull-requests.


# Usage

Basic usage is straight-forward:

```javascript
var GHClient = require('tentacles');
var ghClient = new GHClient();

ghClient.user.get('suprememoocow')
  .then(function(user) {
    // ...
  });
```

To specify an access token:

```javascript
var GHClient = require('tentacles');
var ghClient = new GHClient();

ghClient.user.get('suprememoocow', { accessToken: '...' })
  .then(function(user) {
    // ...
  });
```

... or specify the access token globally ...

```javascript
var GHClient = require('tentacles');
var ghClient = new GHClient({ accessToken: '...' });

ghClient.user.get('suprememoocow')
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

## Anonymous Usage

GitHub heavily limits anonymous API usage. If you expect to be using the API
for anonymous users, it's highly recommended that you pass in a `clientId`/`clientSecret`.
This will allow a much higher API limit.

```javascript
var GHClient = require('tentacles');
var ghClient = new GHClient({ clientId: '...', clientSecret: '...' });

ghClient.user.get('suprememoocow')
  .then(function(user) {
    // ...
  });

```

Some APIs will use your clientId/clientSecret. If you prefer to use a different
set of credentials for anonymous usage, use `anonymousClientId`/`anonymousClientSecret`
instead:

```javascript
var GHClient = require('tentacles');
var ghClient = new GHClient({ anonymousClientId: '...', anonymousClientSecret: '...' });

ghClient.user.get('suprememoocow')
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
var GHClient = require('tentacles');
var ghClient = new GHClient();

ghClient.user.get('suprememoocow', { spread: true })
  .spread(function(user, response) {
    // Access `response.headers`, `response.statusCode` etc
  });
```

It's also possible to specify this option globally, like so
```javascript
var GHClient = require('tentacles');
var ghClient = new GHClient({ spread: true });

ghClient.user.get('suprememoocow')
  .spread(function(user, response) {
    // Access `response.headers`, `response.statusCode` etc
  });
```


## Contributing

Please adhere to the [airbnb/javascript](https://github.com/airbnb/javascript)
style guide for any PRs.

#### Where to put your changes

There are many ways to categorise API methods. To avoid confusion, this client
matches the documentation structure as it is presented on
[developer.github.com](https://developer.github.com).
