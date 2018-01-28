# Test usando `chai` y `mocha`

```html
<ul>
  <li>Betty Snyder Holberton</li>
  <li>Jean Jennings Bartik</li>
  <li>Kathleen McNulty Mauchly Antonelli</li>
  <li>Marlyn Wescoff Meltzer</li>
  <li>Ruth Lichterman Teitelbaum</li>
  <li>Frances Bilas Spence</li>
</ul>
```

```js
[...document.querySelectorAll('li')]
  .forEach(el => el.innerHTML = makeVowelsUpperCase(el.innerHTML));
```
