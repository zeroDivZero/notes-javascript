# `Object.keys()`

Returns array of given object's enumerable property names, iterated in same order normal loop would.

```js
const obj = {
  a: 'somestring',
  b: 42,
  c: false
};
Object.keys(obj); // ['a', 'b', 'c']

const arr = ['a', 'b', 'c'];
Object.keys(arr); // ['0', '1', '2']

Object.keys('foo');  // ['0', '1', '2']
```

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
