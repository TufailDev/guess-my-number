'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correcto!...';

// document.querySelector('.number').textContent = 33;
// document.querySelector('.score').textContent = 33;
// document.querySelector('.guess').value = 33;

// console.log('...', document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const messageText = document.querySelector('.message');
const secretBox = document.querySelector('.number');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const body = document.querySelector('body');
const guessBox = document.querySelector('.guess');

let score = 20;
let highscore = 0;

const updateScore = num => {
  if (num === 1) {
    score--;
  } else if (num === 0) {
    score = 20;
  }
  scoreText.textContent = score;
};

const gameLogic = () => {
  const guess = Number(guessBox.value);
  if (score > 1) {
    // When no input
    if (!guess) {
      messageText.textContent = '⚠️ No number!';
    }
    // when player WINS!
    else if (guess === secretNumber) {
      messageText.textContent = '🎉 Correct Number!';
      body.style.backgroundColor = '#60b347';
      secretBox.style.width = '30rem';

      // Highscore logic
      highscoreText.textContent =
        highscore < score ? (highscore = score) : highscore;

      secretBox.textContent = secretNumber;
    } else if (guess > secretNumber) {
      messageText.textContent = '📈 Too High!';
      updateScore(1);
    } else if (guess < secretNumber) {
      messageText.textContent = '📉 Too Low!';
      updateScore(1);
    }
  } else {
    messageText.textContent = '💥 You Lose!';
    updateScore(1);
  }
};

const resetGame = () => {
  messageText.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  secretBox.style.width = '15rem';
  updateScore(0);
  secretBox.textContent = '?';
  guessBox.value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};

checkBtn.addEventListener('click', gameLogic);

againBtn.addEventListener('click', resetGame);
