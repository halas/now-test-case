# Test case to understand Now - Amazon ddb connection

This is a simplified test case for application where I would like to have a node deployment on now where we respond with 200 to a request and *after* sending the response log something to Amazon Dynamo DB table. 

## Problem

If I run: 

```
node send-manually.js
```

module `send.js` works correctly and adds info to the table. 

But if I run it on server and hit the page with get request, the `ddb.putItem` request gets hanged as pending promise and no error is served. 

## Try this at home:

Clone repository.
Populate .env with your own Dynamo DB credentials.

Run:

```
now dev

```

And watch what gets logged.


