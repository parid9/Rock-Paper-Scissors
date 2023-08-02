let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const box1 = document.querySelector('#box1');

box1.addEventListener('click', () => {
  game();
});

function game() {}

function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(generateComputerChoice());
