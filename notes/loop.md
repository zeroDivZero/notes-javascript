# LOOP

## for

```javascript
const continents = ["Asia", "Australia", "Europe", "Africa", "North America", "South America", "Antarctica"];

for (let i = 0; i < continents.length; ++i) {
    console.log(i + " " + continents[i]);
}
```

Initializer, conditional, and stepper in for-loop all optional.

Initializer and stepper can contain multiple variables:

```javascript
for (let exp = 1, pow = 2; exp <= 10; ++exp, pow *= 2) {
    console.log("2 to the " + exp + "th power is " + pow + ".");
}
```

## for..in

```javascript
for (const i in continents) {
    console.log(i + " " + continents[i]);
}

const person = {initials: 'DR', age: 40, job: 'Professor'};
for (const key in person) {
    console.log(key + " = " + person[key]);
}
```

## for..of

```javascript
for (const v of continents) {   // value
    console.log(v);
}
```

## while

```javascript
let i = 10;
while (i > 0) {
    console.log(i);
    --i;
}
```

## do..while

```javascript
let j = 0;
do {
    console.log(j);
    ++j;
} while (j < 10);
```

## break, continue

Work like in C.
