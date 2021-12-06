# DATA TYPES

JS is **dynamically** and **weakly typed**.

## Dynamically Typed

Type inferred at runtime. Can change anytime.

```javascript
let a = 1   // type 'number'
a = 'test'  // type 'string'
```

Opposite of _statically typed_.

## Weakly Typed

Allows type to be inferred as another type (**type coercion**).

```javascript
let b = 1 + '2'  // '12'
```

Opposite of _strongly typed_.

## `typeof`

Operator to reveal type of variable.

```javascript
typeof true  // 'boolean'
```

## Primitives

6 non-object types, no methods of their own. Immutable.

* **Boolean** — `true` or `false`.
* **Number** — Floating point. No separate integer type.
* **String** — Array of characters.
* **Null** — _Absence of value_. Represented by `null`.
* **Undefined** — Type of variable that hasn't been assigned a value. Don't assign `undefined` to variable.
* **Symbol** — Unique value not equal to any other value.

## Object

Collection of related data. Every non-primitive is **Object** type.
