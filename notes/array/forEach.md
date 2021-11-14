# `forEach()`

Executes provided func once for each element. Returns `undefined`.

Cannot break loop other than throwing exception. Use for loop or method like `some` or `findIndex` if need such behavior.

Expects sync func. Doesn't wait for promise.

```js
const items = ['apple', 'orange', 'banana']
const copyItems = []
items.forEach(item => copyItems.push(item))
```

Syntax same as `every`.

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
