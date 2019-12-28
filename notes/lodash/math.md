# MATH

## `_.maxBy(array, [iteratee=_.identity])`

Finds max in array by invoking `iteratee` on each element to generate value to rank.

```javascript
const a = [{ n: 1 }, { n: 10 }, { n: 4 }];

_.maxBy(a, (o) => o.n );
// => { n: 10 }

// `_.property` iteratee shorthand
_.maxBy(a, 'n');
// => { n: 10 }
```
