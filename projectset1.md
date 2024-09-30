# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 (Change bg by clicking the colour)
```javascript
console.log("Hitesh)
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener("click", (e)=>{
    console.log(e);
    console.log(e.target);
    switch(e.target.id)
    {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor=e.target.id;
        break;
      case "blue":
        body.style.backgroundColor=e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor=e.target.id;
        break; 
      case "purple":
        body.style.backgroundColor=e.target.id;
        break; 
    }
  })
})

```
## project 2 (bmi calculator)
```javascript
const form = document.querySelector("form")
document.querySelector("label") 
form.addEventListener("submit",((e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if(height==="" || height<=0 || isNaN(height))
  {
    results.innerHTML = `Please enter a valid height ${height}`;
  }
  else if(weight==="" || weight<=0 || isNaN(weight))
  {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  }
  else
  {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // display in result
    results.innerHTML = `<span> ${bmi} </span>`
    if(bmi < 18.6){
      results.innerHeight = `Under Weight` 
    }else if(bmi>= 18.6 && bmi<= 24.9){
      results.innerHTML = `Fit ${bmi}`
    }else{
      results.innerHTML = 'Over Weight ${bmi}'
    }
  }
}));
```
## project 3 (digital clock using setInterval())
```javascript

const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString()); this was to check the time in console that if the thing is working.
  clock.innerHTML = date.toLocaleTimeString(); 
}, 1000);

```
## project (Guess the number game)
```javascript
const input = document.querySelector('#guessfield');
let numberToGuess = parseInt(Math.random() * 10 + 1);
const submitbutton = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousguess = [];
let numGuess = 1;
let playGame = true;

// lets make functions that will be used during this project:

//when to play game
if (playGame) {
  submitbutton.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    console.log(guess);
    validate(guess);
  });
}

// validate for a valid guess
validate = (guess) => {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number grater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    previousguess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displaymessage(`Game Over.Random number was ${numberToGuess}`);
      endGame();
    } else {
      displayguess(guess);
      check(guess);
    }
  }
};

// check guess
check = (guess) => {
  if (guess === numberToGuess) {
    displaymessage('You guessed it right');
    endGame();
  } else if (guess < numberToGuess) {
    displaymessage(`Number to guess is greater than the guessed number`);
  } else if (guess > numberToGuess) {
    displaymessage(`Number to guess is smaller than the guessed number`);
  }
};

// display guess (cleanup method)
function displayguess(guess) {
  input.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

// display message
displaymessage = (message) => {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
};

// New Game
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    numberToGuess = parseInt(Math.random() * 100 + 1);
    previousguess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    input.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

// End Game
function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

```