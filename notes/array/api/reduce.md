# `reduce()`

 Executes provided "reducer" callback func on each element, passing in return value from calculation on preceding element. Returns final result  of running reducer across all elements. E.g., sum of all elements.

```js
const getMax = (a, b) => Math.max(a, b);
[1, 50, 100].reduce(getMax); // 100
[1, 3, 9].reduce(getMax, 10); // 10
```

Accepts arrow func, callback func, or inline callback func, and optionally `initialValue`.

Reducer takes 4 args:

* `previousValue` (value resulting from previous call)
* `currentValue` (value of current element)
* `currentIndex` (optional)
* `array` (array on which this was called, optional)

`initialValue` is to which `previousValue` is initialized first time reducer called. If specified, `currentValue` is initialized to first value of array. If not, `previousValue` is initialized to first value, and `currentValue` is initialized to second.

Throws `TypeError` if array contains no elements and `initialValue` not provided.

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
