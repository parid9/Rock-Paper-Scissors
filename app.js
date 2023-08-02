let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const box1 = document.querySelector('#box1');

box1.addEventListener('click', () => {
  game();
});

const box2 = document.querySelector('#box2');

box2.addEventListener('click', () => {
  game();
});

const box3 = document.querySelector('#box3');

box3.addEventListener('click', () => {
  game();
});

function game() {
  console.log('hello');
}

function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(generateComputerChoice());
