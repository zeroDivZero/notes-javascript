# `Object.entries()`

Returns array of given object's enumerable string-keyed property `[key, value]` pairs. Same as iterating with `for...in` loop, but `for...in` enumerates properties in prototype chain as well.

```js
const obj1 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(obj1)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

const obj2 = {
  a: 'somestring',
  b: 42,
  c: false
};
for (const [key, value] of Object.entries(obj2)) {
  console.log(`${key}: ${value}`);
}
// a: somestring
// b: 42
// c: false
```

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
