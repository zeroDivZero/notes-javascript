# FUNCTION

## Function Statement

Aka **function declaration**.

```javascript
function calcRectArea(width, height) {
  return width * height;
}
```

## Function Expression

```javascript
let getRectArea = function(width, height) {
  return width * height;
}
```

Can be part of larger expression. Usually _anonymous_, but can be _named_ (like **statement**); useful in stack trace.

Not _hoisted_ to beginning of scope, so cannot be used before definition.

### Arrow Function Expression

More compact than regular function expression.

```javascript
([param[, param]]) => {
   statements
}
```

Arg parentheses optional if only 1 arg. Body curly braces optional if statement consists of only 1 return expression.

```javascript
singleParam => expression
singleParam => ({ foo: bar }) // returns object literal expression

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
console.log(materials.map(material => material.length));
```

### IIFE (Immediately Invokable Function Expression)

Invoked as soon as defined. Common pattern if function only used once.

```javascript
(function() {
  statements
})();
```

## Arguments

Args passed by value. Though object references passed by value, changing object properties visible outside function.

## First-Class Object

Can have properties and methods, but function can be invoked. It's of type `Function`.

However, `this` doesn't refer to executing function, so must refer to `Function` object by name, even within function body.
