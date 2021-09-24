# `export`, `import`

Export as **named** or **default** (no name). If named, must import with same name; for default, can rename.

```js
// export_module.js
const appName = 'My Application'
const supportEmail = 'help@email.com'

const getGreeting = (name) => {
  return `Welcome to the world ${name}`
}

export { supportEmail, getGreeting, appName as default }
```

```js
// import_module.js
import nameOfApp, {supportEmail, getGreeting } from './export_module'

console.log(nameOfApp, supportEmail)
console.log(getGreeting('John Smith'))
```
