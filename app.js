// Choice Array

const choices = ['rock', 'paper', 'scissors'];

// Game Variables

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let playing = true;
// Box Elements

const box1 = document.querySelector('#box1');
const box3 = document.querySelector('#box3');
const box2 = document.querySelector('#box2');

// Other Elements

const message = document.querySelector('message');

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

  if (playerChoice === computerChoice) {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You tied!';
  }
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You won|Rock beats scissors.';
  }
  if (playerChoice === 'paper' && computerChoice === 'rock') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You won|Paper beats rock.';
  }
  if (playerChoice === 'scissors' && computerChoice === 'paper') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You won|Scissors beats paper.';
  }
  if (playerChoice === 'rock' && computerChoice === 'paper') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You lost|Paper beats rock.';
  }
  if (playerChoice === 'paper' && computerChoice === 'scissors') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You lost|Scissors beats paper.';
  }
  if (playerChoice === 'scissors' && computerChoice === 'rock') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You lost|Rock beats scissors.';
  }
}
