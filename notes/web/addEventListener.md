# `addEventListener()`

Registers handler (callback) when specified event delivered to target. Part of `EventTarget` interface.

Common targets are `Element` or its children, `Document` and `Window`, but may be any object that supports events (such as `XMLHttpRequest`).

```js
document.addEventListener('DOMContentLoaded', function() {
  alert('Document loaded.');
});
```

```js
function onClick() {
  alert('Button click!')
}

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener('click', onClick);
}
```

Recommended way to register event listener.

* Allows 1+ handlers per event. Useful for code working with other libraries or extensions.
* In contrast to using `onXYZ` property, gives finer-grained control of phase when listener activated (capturing vs. bubbling).
* Works on any event target, not just HTML or SVG elements.

Avoid inline handler:

```js
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

<button onclick="createParagraph()">Click me!</button>
```
