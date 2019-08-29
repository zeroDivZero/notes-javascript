# SWITCH

Same as C's `switch`.

```javascript
const fruit = 'Papayas';
switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}
```

Trick to test conditional:

```javascript
const age = 25;
switch (true) {
  case age < 13:
    console.log('kid');
    break;
  case age < 18:
    console.log('teenager');
    break;
  case age > 30 && age < 50:
    console.log('prime');
    break;
  case age >= 70:
    console.log('elderly');
    break;
  case age < 100:
    console.log('adult');
    break;
  default:
    console.log('unknown');
}
```
