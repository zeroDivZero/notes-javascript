# `import`, `export`

Export as **named** or **default** (no name). If named, import must use same name. For default, import can rename.

```javascript
// export_module.js
const appName = 'My Application'
const supportEmail = 'help@email.com'

const getGreeting = (name) => {
  return `Welcome to the world ${name}`
}

export { supportEmail, getGreeting, appName as default }

// import_module.js
import nameOfApp, {supportEmail, getGreeting } from './export_module'

console.log(nameOfApp, supportEmail)
console.log(getGreeting('John Smith'))
```
