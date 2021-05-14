'use strict';
// Secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
//console.log(secretNumber);

let score = 20;

// High score
let highscore = 0;

//Check button
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // No inpxut given
    document.querySelector('.message').textContent = '💥 Enter any number ';
  } else if (score < 2) {
    //Exhaust all chance
    document.querySelector('.message').textContent =
      '😢 Oops! You lose the match';
    document.querySelector('.score').textContent = 0;
  } else if (guess === secretNumber) {
    //At winning situation
    document.querySelector('.message').textContent =
      '🎉 You enter correct number!!!!! WINNER';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#87cefa';
    document.querySelector('.number').style.backgroundColor = '#98FB98';
    document.querySelector('.number').style.width = '30rem';
    if (score >= highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    //number higher than secretNumber
    document.querySelector('.message').textContent =
      '📉 You enter higher number';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    //number less than secretNumber
    document.querySelector('.message').textContent =
      '📈 You enter lower number';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// Reset button functionality
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.background = '#eee';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing... ';
});
