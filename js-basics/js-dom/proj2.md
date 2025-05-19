# Project related to DOM

## Link

[Click](https://stackblitz.com/edit/dom-project-chaiaurcode-7cym8gja?file=1-colorChanger%2Findex.html,2-BMICalculator%2Findex.html)

# Solution Code

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give valid weight';
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.appendChild(document.createTextNode(' -Underweight'));
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.appendChild(document.createTextNode(' -Normal Range'));
    } else {
      results.appendChild(document.createTextNode(' -Overweight'));
    }
  }
});



```