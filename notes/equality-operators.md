# EQUALITY OPERATORS

## ===

Strict equality check. Both args must match in type.

## ==

Will perform type coercion first to make args match in type.

## Example

```javascript
const num = 23;
if (num === '23') {
  console.log('NO');
} else if (num == '23') {
  console.log('YES');   // will be executed
}
```
