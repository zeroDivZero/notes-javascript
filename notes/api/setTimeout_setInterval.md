# `setTimeout()`, `setInterval()`

Delay instruction execution.

## `setTimeout()`

Sets timer which executes function or code once when timer expires.

```
var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = setTimeout(code[, delay]);
```

`code` is string that gets compiled and executed, but not recommended for security.

`delay` optional; default 0 (executes func immediately). `arg#` are optional additional args passed to func.

### `clearTimeout()`

`setTimeout()` returns `timeoutID` as positive int to identify timer. Pass it to `clearTimeout()` to cancel.

### Example

Move image rightward:

```html
<html><head><script>
  var timer, xPos = 0, image;
  function setTimer() {
    image = document.getElementById("stones_image");
    xPos = xPos + 50;
    image.style.left = xPos;
    timer = setTimeout(setTimer, 500);
  }
</script></head>

<body onload="setTimer()">
  <img src="stones.png" id="stones_image" style="position:absolute; left:0">
</body></html>
```

## `setInterval()`

Repeatedly calls function or executes code, with fixed time delay between each call.

```
var intervalID = setInterval(func, delay, [arg1, arg2, ...]);
var intervalID = setInterval(code, delay);
```

Similar to `setTimeout()`. Func recommended over `code` for similar security reason as `eval()`.

### `clearInterval()`

`setInterval()` returns `intervalID` as numeric non-0 value to identify timer. Pass it to `clearInterval()` to cancel.

### Example

```javascript
var intervalID = setInterval(myCallback, 500, 'Param 1', 'Param 2');

function myCallback(a, b)
{
  console.log(a);
  console.log(b);
}
```
