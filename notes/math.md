# MATH

Built-in object with properties and methods. Not function object. Works with `Number`, not `BigInt`.

Unlike other global objects, not constructor. All properties and methods static.

## Functions

### Random

```javascript
var rnd = Math.random();  // [0, 1)
```

### Floor, Trunc, Ceil, Round

```javascript
var floor = Math.floor(-3.141592);  // -4
var trunc = Math.round(-3.141592);  // -3
var ceil = Math.ceil(3.141592);  // 4
var round = Math.round(3.141592);  // 3
```

All trig funcs (`sin()`, `cos()`, `tan()`, `asin()`, etc.) return or accept radians.

## Properties

```javascript
Math.PI
```

Ratio of circle's circumference to its diameter, approximately 3.14159.

```javascript
Math.E
```

Euler's constant, base of natural log, approximately 2.718.

```javascript
Math.SQRT2
```

Square root of 2, approximately 1.414.
