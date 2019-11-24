# THIS

Regular func call: `this` points to global obj (`window` in browser).

Method call: `this` points to obj calling the method.

`this` not assigned value until func where it is defined is called (since it lives in exec cxt, which is created when func invoked; i.e., it is dynamic).
