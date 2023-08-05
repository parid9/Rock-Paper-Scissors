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

  if (playing !== true) {
    return;
  }
  if (playerScore === 5) {
    playing = false;
  }
  if (computerScore === 5) {
    playing = false;
  }
  if (playerChoice === computerChoice) {
    let outCome = document.getElementById('message');
    outCome.textContent = `You tied! Player choice: ${playerChoice}|Computer choice: ${computerChoice}`;
  }
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You won|Rock beats scissors.';
    if (playerScore < 5) {
      playerScore += 1;
      document.getElementById('player').innerHTML = playerScore;
    }
  }
  if (playerChoice === 'paper' && computerChoice === 'rock') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You won|Paper beats rock.';
    if (playerScore < 5) playerScore += 1;
    document.getElementById('player').innerHTML = playerScore;
  }
  if (playerChoice === 'scissors' && computerChoice === 'paper') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You won|Scissors beats paper.';
    if (playerScore < 5) playerScore += 1;
    document.getElementById('player').innerHTML = playerScore;
  }
  if (playerChoice === 'rock' && computerChoice === 'paper') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You lost|Paper beats rock.';
    if (computerScore < 5) computerScore += 1;
    document.getElementById('computer').innerHTML = computerScore;
  }
  if (playerChoice === 'paper' && computerChoice === 'scissors') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You lost|Scissors beats paper.';
    if (computerScore < 5) computerScore += 1;
    document.getElementById('computer').innerHTML = computerScore;
  }
  if (playerChoice === 'scissors' && computerChoice === 'rock') {
    let outCome = document.getElementById('message');
    outCome.textContent = 'You lost|Rock beats scissors.';
    if (computerScore < 5) computerScore += 1;
    document.getElementById('computer').innerHTML = computerScore;
  }
}
