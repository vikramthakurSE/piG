'use strict';

const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const current_0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.getElementsByClassName('btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.getElementsByClassName('btn--hold');

//starting condition
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

//Rolling dice
btnRoll.addEventListener('click', function () {
  //generating a random dice number
  const diceNo = Math.trunc(Math.random() * 6) + 1;

  //display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNo}.png`;

  if (diceNo !== 1) {
    currentScore += diceNo;
    console.log(activePlayer);
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  //switch current player
  else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
