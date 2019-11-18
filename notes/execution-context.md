# EXECUTION CONTEXT

Runtime env of code. Container that stores variables and in which code evaluated and executed.

## Global Execution Context

Default, created before executing any code. Context for any code not inside functions.

Can think of as object, known as **global object**. In browser, it is `window` object.

```javascript
lastName === window.lastName  // true
```

## Functional Execution Context

Every time function called, gets its own context, pushed to top of **execution stack**. Top of stack is always active context.

![execution stack](https://github.com/zeroDivZero/notes-javascript/blob/master/assets/execution_stack.png)

## Creating Context

**Execution Context Object** contains:
* **Variable Object (VO)**
  * Func args, inner vars, func declarations.
* **Scope Chain**
  * Current VO and VOs of all parents.
* `this`

1. Creation phase:
   * Creation of VO
   * Creation of scope chain
   * Determine value of `this`
2. Execution phase:
   * Code of func that generated current context is executed line by line.

## Variable Object

Arg obj created, containing all args passed to func.

Code scanned for func declarations. For each func, prop created in VO, pointing to func.
