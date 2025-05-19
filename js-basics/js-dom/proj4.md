# Project related to DOM

## Link

[Click](http://stackblitz.com/edit/dom-project-chaiaurcode-7cym8gja?file=3-DigitalClock%2Findex.html,3-DigitalClock%2Fproj3.js,4-GuessTheNumber%2Findex.html)

# Solution Code

```javascript

let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const low_high = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please add valid number');
  } else if (guess < 1) {
    alert('please enter number more than 1');
  } else if (guess > 100) {
    alert('please add number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      display_msg(`Game Over  Random Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNum) {
    display_msg(`You guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    display_msg(`Number is low`);
  } else if (guess > randomNum) {
    display_msg(`Number is high`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function display_msg(message) {
  low_high.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p)
  playGame=false;
  newGame()
   
}
function newGame() {
 const newGameButton= document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGuess=[]
  numGuess=1;
  guessSlot.innerHTML=''
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p);

   playGame=true;
 });
}




```