# `JSON.parse()`

`JSON.parse(text[, reviver])`

Parses JSON string, constructing JS value or object.

```javascript
const json = '{"result": true, "count": 42}';
const obj = JSON.parse(json);

console.log(obj.count);  // 42
console.log(obj.result); // true
```

```javascript
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```

## `reviver`

Optional function to perform transformation on resulting obj before returned.

Computed value and all its properties (beginning with most nested properties and proceeding to original value itself) are individually run through reviver. Then it is called, with object containing the property being processed as this, and with the property name as a string, and the property value as arguments. If the reviver function returns undefined (or returns no value, for example, if execution falls off the end of the function), the property is deleted from the object. Otherwise, the property is redefined to be the return value.

```javascript
JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // return value * 2 for numbers
    : value     // return everything else unchanged
);
// { p: 10 }
```

## Restrictions

Does not allow trailing comma and single-quote.
