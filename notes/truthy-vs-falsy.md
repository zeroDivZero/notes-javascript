# TRUTHY VS FALSY

These values are considered `false` when evaluated as boolean conditionals:
* `undefined`
* `null`
* `0`
* `NaN`
* `''`

```javascript
let a;
if (a) {
  console.log('will NOT log because "a" is undefined');
}
```
