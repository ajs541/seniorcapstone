# How to get WebSafari working on your machine

First off, make sure you have node.js and poetry installed on your machine.  Once you have those, then it's only a few commands.

From the root folder of the project, run this command, and that should install concurrently at root, followed by the dependencies for both the web app and the python web server.  This also creates the actual SQLITE file that is used, from the SQL file:
```
npm install
```

After that, just run:
```
npm start
```

Your results may vary.