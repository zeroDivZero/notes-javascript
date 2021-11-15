# `of()`

Static method to create new `Array` from variable number of args, regardless of types.

`Array.of(7)` creates array with single element `7`.

`Array(7)` creates empty array with `length` 7 (7 empty slots, not slots with `undefined` values).

```js
Array.of(1); // [1]
Array.of(1, 'apple', true); // [1, 'apple', true]
Array.of(undefined); // [undefined]
```

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
