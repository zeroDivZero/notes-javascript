# `Promise`

Handles result (success or failure) of asynchronous operation in future. Prevents nested callbacks.

## Create

```js
let promise = new Promise(function(resolve, reject) {
  // logic
});
```

## Anatomy

Promise has STATE and RESULT.

A promise has 3 states:

Pending
Fulfilled
Rejected
Pending promises in JavaScript, much like in the real world, is a promise that has been executed but not yet completed and can therefore move to the ‘Fulfilled’ or ‘Rejected’ state.

Fulfilled promises are resolved or completed, indicating a successful outcome.

Rejected promises indicate an unsuccessful outcome due to an error or a timeout.
