# ARROW

## Simpler syntax

Regular func:

```javascript
function addTwo(val) {
    return val + 2
}
```

Arrow equivalent:

```javascript
var addTwo = (val) => {
  return val + 2
}
```

If only 1 arg, can omit `()`. If returning expression, can omit `return` and `{}`. Above is same as:

```javascript
var addTwo = val => val + 2
```

## No `this` binding

In following example, will repeatedly log `NaN`:

```javascript
function Counter() {
  this.num = 0;
  this.timer = setInterval(function add() {
    this.num++;
    console.log(this.num);
  }, 1000);
}

var a = new Counter();
```

`setInterval()` not called on declared obj, and `new` is on `Counter()` not `setInterval()`. Without  `call()`, `apply()`, `bind()`, `setInterval()` is normal func, so `this` inside is bound to global obj.

Arrow func doesn't bind `this`:

```javascript
function Counter() {
  this.num = 0;
  this.timer = setInterval(() => {
    this.num++;
    console.log(this.num);
  }, 1000);
}

var a = new Counter();

// 1, 2, 3, ...
```

In above example, original `this` binding created by `Counter` constructor function preserved (bound to `a`).
