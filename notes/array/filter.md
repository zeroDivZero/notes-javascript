# `filter()`

Creates new array with elements passing test of provided func. If no elements pass, returns empty array.

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// filter by search criteria (query)
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
```

Syntax same as `every`.

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
