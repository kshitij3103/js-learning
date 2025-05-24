# Project related to DOM

## Link

[Click](https://stackblitz.com/edit/dom-project-chaiaurcode-7cym8gja?file=6-unlimitedColors%2Findex.html,6-unlimitedColors%2Fproj6.js,5-keyboard%2Findex.html,5-keyboard%2Fproj5.js)

# Solution Code
```javascript

const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.key}</td>
  </tr>
  
</table>
  </div>
  `;
});







```