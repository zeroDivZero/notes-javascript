# `every()`

Checks if all elements pass test of provided func. Returns Boolean. Always `true` on empty array.

Stops when callback returns falsy value, can be shortcut of `forEach`.

```js
function isSubset(array1, array2) {
  return array2.every(element => array1.includes(element));
}

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

Accepts arrow func, callback func, or inline callback func. Func takes current element, index (optional), and array (optional) on which `every` was called. If using callback, optionally takes `thisArg` as `this` when executing callback.

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
