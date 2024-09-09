'use strict';
// ===============< Selected Elements >===============================
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');
let score = Number(document.querySelector('.score').textContent);
let hightScore = 0;
// ===============< genaric Function >==================================
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// ===============< Again Function >==================================
const againButton = document.querySelector('.again');
againButton.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  score = '20';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start Gussing...');
  number.textContent = '?';
  number.style.width = '15rem';
});
// ===============< Check Function >==================================
const checkValue = document.querySelector('.check');
checkValue.addEventListener('click', () => {
  const value = Number(document.querySelector('.guess').value);
  // ====< if no value >=========
  if (!value) {
    displayMessage('⛔ No Number Enterd');
  }
  //=< if the value === randomNumber >=
  else if (value === randomNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.textContent = randomNumber;
    number.style.width = '30rem';
    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  } else if (value !== randomNumber) {
    if (score > 1) {
      displayMessage(value > randomNumber ? '📈 To Hight' : '📉 To low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost The Game');
    }
  }
});
