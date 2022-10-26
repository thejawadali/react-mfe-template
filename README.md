
# React MFE Template

This a boilerplate/template for micro-frontend (MFE) apps for React.

### Clone to local
```
npx degit thejawadali/react-mfe-template my-mfe-app
cd my-mfe-app
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```


## Micro-frontend (MFEs)

To expose or make a component or importable in another app,
go to `webpack.config.js` and expose it with the name you want.
```javascript
new ModuleFederationPlugin({
    ...
    name: "MY_REMOTE_APP"
    exposes: {
        "./REMOTE_COMPONENT_NAME": "./src/Wrapper.tsx"
    }
})
```
In this example we are exposing our component named `Wrapper.tsx` to 
use in other apps.

To use that component in host application, declare it in remotes object in `webpack.config.js` 

```javascript
new ModuleFederationPlugin({
    ...
    name: "MY_HOST_APP"
    remotes: {
        remoteApp: "MY_REMOTE_APP@<remote_app_url>/remoteEntry.js"
    }
})
```

To use this component in any of our host app's component

```javascript
import React, { useEffect, useRef } from 'react'
import RemoteApp from "remoteApp/REMOTE_COMPONENT_NAME";

  function RemoteComponent() {
    const remoteRef = useRef(null)

    useEffect(()=> {
      RemoteApp(remoteRef.current)
    }, [])

    return (
      <div ref={remoteRef} />
    )
  }
import
```

You can pass props to remote component in second parameter.

Use With Vue.js
```javascript
<template>
  <div ref="remoteComponent" />
</template>

<script setup>
import RemoteApp from "remoteApp/REMOTE_COMPONENT_NAME";
import { ref, onMounted } from "vue"

const remoteComponent = ref(null)

onMounted(()=> {
  RemoteApp(remoteComponent)
})
</script>

```
## Authors

- [@jawadali](https://www.github.com/thejawadali)

