# Project related to DOM

## Link

[Click](https://stackblitz.com/edit/dom-project-chaiaurcode-7cym8gja?file=6-unlimitedColors%2Findex.html,6-unlimitedColors%2Fproj6.js)

# Solution Code
```javascript
const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomcolor());
let intervalid = null;
document.querySelector('#start').addEventListener('click', changecolor);
document.querySelector('#stop').addEventListener('click', stopInt);
function changecolor() {
  if (intervalid === null) {
    intervalid = setInterval(function () {
      document.body.style.backgroundColor = randomcolor();
    }, 1000);
  }
}

function stopInt() {
  clearInterval(intervalid);
  intervalid = null;
}


```
