# EXECUTION CONTEXT

Runtime env of code. Container that stores variables and in which code evaluated and executed.

## Global Execution Context

Default, created before executing any code. Context for any code not inside functions.

Can think of as object, known as **global object**. In browser, it is `window` object.

```javascript
lastName === window.lastName  // true
```

## Context for Function

Every time function called, gets its own context, pushed to top of **execution stack**. Top of stack is always active context.

![execution stack](https://github.com/zeroDivZero/notes-javascript/blob/master/assets/execution_stack.png)
