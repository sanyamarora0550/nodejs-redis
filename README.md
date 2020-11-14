NodeJs - Redis Caching
==========

Install with npm: `npm install redis`

Simple Node.js based Redis cache for storing large collections of data.

RedisCache makes it very simple to asynchronously respond with a collection of models from the cache. It uses <a href="http://en.wikipedia.org/wiki/Method_chaining">method chaining</a> for clarity in conjunction with the <a href="http://en.wikipedia.org/wiki/Futures_and_promises">promise pattern</a>.

Installation
----------

It's a prerequisite to have Redis installed. Once installed you can begin the Redis server with `redis-server`.

Initiate the Node.js server with `node app.js` and then point your browser to `localhost:3000`.

Getting Started
----------

Using Node.js you need to first include RedisCache to begin using it.



By default RedisCache will attempt to connect to `127.0.0.1` on port `6379` with no auth password.

```javascript
const client = redis.createClient();
```
RedisCache should now have connected with Redis, and you're ready to begin adding Redis caching to your actions.
