//ROCK PAPER SCISSORS
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const playerChoiceDiv = document.querySelector(".player-selection");
const computerChoiceDiv = document.querySelector(".computer-selection");
const resultsDiv = document.querySelector(".results");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");
const finalScore = document.querySelector(".final-score");
let playerSelection;

rockButton.addEventListener("click", () => {
  playerSelection = "rock";
  playerChoiceDiv.textContent = "Your Choice: rock";
  playRound();
});

paperButton.addEventListener("click", () => {
  playerSelection = "paper";
  playerChoiceDiv.textContent = "Your Choice: paper";
  playRound();
});

scissorsButton.addEventListener("click", () => {
  playerSelection = "scissors";
  playerChoiceDiv.textContent = "Your Choice: scissors";
  playRound();
});

let playerScore = 0;
let computerScore = 0;
let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound() {
  finalScore.textContent = "";
  const computerSelection = getComputerChoice();
  computerChoiceDiv.textContent = `Computer Choice: ${computerSelection}`;

  //tie
  if (playerSelection === computerSelection) {
    resultsDiv.textContent = "Results: It's a Tie";
  }
  //rock
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      resultsDiv.textContent = "Results: You Lose! Paper beats Rock";

      computerScore++;
    } else {
      resultsDiv.textContent = "Results: You Win! Rock beats Scissors";

      playerScore++;
    }
  }
  //paper
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      resultsDiv.textContent = "Results: You Lose! Scissors beats Paper";

      computerScore++;
    } else {
      resultsDiv.textContent = "Results: You Win! Paper beats Rock";

      playerScore++;
    }
  }
  //scissors
  else {
    if (computerSelection === "rock") {
      resultsDiv.textContent = "Results: You Lose! Rock beats Scissors";

      computerScore++;
    } else {
      resultsDiv.textContent = "Results: You Win! Scissors beats Paper";

      playerScore++;
    }
  }
  playerScoreDiv.textContent = `Your Score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
  //game stops at 5 points
  if (playerScore == 5 || computerScore == 5) {
    getScore();
  }
}

function getScore() {
  //calculate and declare winner:
  if (playerScore === computerScore) {
    finalScore.textContent = "It's a tie!";
  } else if (playerScore > computerScore) {
    finalScore.textContent = "You Win!";
  } else {
    finalScore.textContent = "You Lose!";
  }
  //reset score:
  playerScore = 0;
  computerScore = 0;
}
