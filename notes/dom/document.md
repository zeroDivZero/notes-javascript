# `document`

Object representing HTML document itself, in DOM (Document Object Model) representation.

## `querySelector()`

Returns first element matching selector, or group of selectors. If no match, returns `null`.

```javascript
// find elem of id "hello"
document.querySelector("#hello").textContent = "Hello~";
```

```javascript
document.querySelector("#hello").innerHTML = "<em>Hello~</em>";
```

```javascript
// find elem of class "pixel" and hide it
document.querySelector(".pixel").style.display = "none";
```
