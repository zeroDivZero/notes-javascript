# THIS

Regular func call: `this` points to global obj (`window` in browser).

Method call: `this` points to obj calling the method.

`this` not assigned value until func where it is defined is called (since it lives in exec cxt, which is created when func invoked; i.e., it is dynamic).

## `new`

Typically, in following example `this` bound to global obj:

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
};
```

But when `new` is used `this` is set to new blank obj, in this case, `myCar`:

```javascript
var myCar = new Car('Ford', 'Escape');
console.log(myCar);
// Car {make: "Ford", model: "Escape"}
```

## `call()`, `apply()`, `bind()`

Can set `this` explicitly.

`call()` and `apply()` are invoked immediately. `call()` takes any number of params: `this`, followed by additional args. `apply()` takes 2 params: `this` and array of additional args.

```javascript
function add(c, d) {
  console.log(this.a + this.b + c + d);
}
var ten = {a: 1, b: 2};

add.call(ten, 3, 4);   // 10
add.apply(ten, [3,4]); // 10
```

`bind()` takes identical params as `call()`, but `bind()` not invoked immediately. Instead, `bind()` returns a func with context of `this` bound. Useful when params unknown up front.

```javascript
var small = {
  a: 1,
  go: function(b, c, d) {
    console.log(this.a + b + c + d);
  }
}

var large = {
  a: 100
}

var bindTest = small.go.bind(large, 2); // `this` bound to `large`; 2nd param known

// later when remaining params known
bindTest(3, 4); // (100+2+3+4) = 109
```

## Arrow Func

Arrow func doesn't bind `this` — instead bound lexically (i.e., based on original context).
