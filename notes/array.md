# ARRAY

```javascript
let names = ['John', 'Mark', 'Jane'];
const years = new Array(1978, 1949, 1990);  // less used

names[names.length] = 'Mary';
names[1] = 'Ben';   // ['John', 'Ben', 'Jane', 'Mary']
```

Elements don't have to be of same type.

## Common Methods

```javascript
names.push('Mike');           // add to end
const name1 = names.pop();    // remove from end

names.unshift('Mike');        // add to front
const name2 = names.shift();  // remove from front

const index = names.indexOf('Jane');  // 2; -1 if not found
```
