// Choice Array

const choices = ['rock', 'paper', 'scissors'];

// Game Variables

let playerScore = 0;
let computerScore = 0;
let playerChoice;

// Box Elements

const box1 = document.querySelector('#box1');
const box3 = document.querySelector('#box3');
const box2 = document.querySelector('#box2');

// Boxes Functionality

box1.addEventListener('click', () => {
  playerChoice = 'rock';
  game();
});

box2.addEventListener('click', () => {
  playerChoice = 'paper';
  game();
});

box3.addEventListener('click', () => {
  playerChoice = 'scissors';
  game();
});
function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function game() {
  const computerChoice = generateComputerChoice();
  console.log(computerChoice);

  if (playerChoice === computerChoice) {
  }
}
