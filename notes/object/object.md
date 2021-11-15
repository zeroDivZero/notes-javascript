# OBJECT

Most important data grouping construct.

## Property

```javascript
// object literal
const john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john.lastName);
console.log(john['family']);
john.job = 'designer';
john['isMarried'] = true;

// new Object()
const jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.birthYear = 1992;
```

## Method

```js
john.calcAge = function() {
    const date = new Date();
    return date.getFullYear() - this.birthYear;
}
console.log(john.calcAge());
```

`this` refers to object itself. Can be used to assign value to property within func as well.
