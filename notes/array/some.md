# `some()`

Checks if any element passes test of provided func. Returns Boolean. Always `false` on empty array.

Stops when callback returns truthy value, can be shortcut of `forEach`.

```js
const array = [1, 2, 3, 4, 5]
console.log(array.some(element => element % 2 === 0))  // true
```

Syntax same as `every`.

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
