'use strict';
// ===============< Selected Elements >===============================
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');
let score = Number(document.querySelector('.score').textContent);
let hightScore = 0;
// ===============< Again Function >==================================
const againButton = document.querySelector('.again');
againButton.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  score = '20';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  const message = document.querySelector('.message');
  message.textContent = 'Start Gussing...';
  number.textContent = '?';
  number.style.width = '15rem';
});
// ===============< Check Function >==================================
const checkValue = document.querySelector('.check');
checkValue.addEventListener('click', () => {
  const value = Number(document.querySelector('.guess').value);
  // ====< if no value >=========
  if (!value) {
    const message = document.querySelector('.message');
    message.textContent = '⛔ No Number Enterd';
  }
  //=< if the value === randomNumber >=
  else if (value == randomNumber) {
    const message = document.querySelector('.message');
    message.textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.textContent = randomNumber;
    number.style.width = '30rem';
    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  }
  //=< if the value > randomNumber >=
  else if (value > randomNumber) {
    if (score > 1) {
      const message = document.querySelector('.message');
      message.textContent = '📈 To Hight';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      const message = document.querySelector('.message');
      message.textContent = '💥 You lost The Game';
    }
  }
  //=< if the value < randomNumber >=
  else if (value < randomNumber) {
    if (score > 1) {
      const message = document.querySelector('.message');
      message.textContent = '📉 To low!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      const message = document.querySelector('.message');
      message.textContent = '💥 You lost The Game';
    }
  }
  if (value > 20 || value < 0) {
    const message = document.querySelector('.message');
    message.textContent = '🚫 Unvalid Number';
  }
});
