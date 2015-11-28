# Kevernote counters 2

Redux counter, with server-side rendering and disabled JS fallback (aka works
with JS and without).

Related to [https://github.com/joaomilho/redux-counters1](https://github.com/joaomilho/redux-counters1)

#### Running

After cloning, run:

```
npm install
```

##### Only server

```
node .server.js
```

Now go to [http://localhost:3000/](http://localhost:3000/) to see the server running. As you can see, it renders the counters right away, and it works by posting and redirecting on every click.

##### Only client

```
npm start
```

Now go to [http://localhost:3001/](http://localhost:3001/) to see the client running. As you can see it takes some miliseconds to render and replace the `{{component}}` thing. It works, but without the real data. Good for debugging.

##### Both

```
npm start
```

Now go to [http://localhost:3000/](http://localhost:3000/) to see both running.
