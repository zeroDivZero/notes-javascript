# HOW TO ADD TO PAGE

Add `<script>` to bottom of `<head>`.

## Internal/Embedded

Add code directly in `<script>` section. Not recommended except for very simple pages.

```html
<head>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
      }

      const buttons = document.querySelectorAll('button');

      for (let i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener('click', createParagraph);
      }
    });
  </script>
</head>
```

## External

Save code in separate (`.js`) files. Better organization and promotes reuse.

```html
<head>
  <script src="script.js" defer></script>
</head>
```

```js
// script.js
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener('click', createParagraph);
}
```

## `async` vs `defer`

Both fetch scripts in parallel to page parse.

`async` attribute means when fetch completes, script is executed, which blocks page rendering. No guarantee scripts run in order. For scripts that should run immediately and have no dependencies.

`defer` waits for page content loaded before executing, and executed in order scripts appear in page. Useful if scripts depend on DOM or each other.

![async defer](../../assets/async_defer.jpg)
