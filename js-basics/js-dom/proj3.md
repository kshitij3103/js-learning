# Project related to DOM

## Link

[Click](https://stackblitz.com/edit/dom-project-chaiaurcode-7cym8gja?file=3-DigitalClock%2Findex.html)

# Solution Code

```javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
}, 1000);




```