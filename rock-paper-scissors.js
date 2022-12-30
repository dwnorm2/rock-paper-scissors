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

// function intro() {
//   let gameStart;
//   if (gameStart) {
//     game();
//   }
// }

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

// function getPlayerChoice() {
//   let input = prompt("Rock, Paper, or Scissors?");
//   if (input == null) {
//     intro();
//   }
//   input = input.toLowerCase();

//   let check = validateInput(input);
//   while (check == false) {
//     input = prompt("Type rock, paper, or scissors - Check Spelling");
//     if (input == null) {
//       intro();
//     }
//     input = input.toLowerCase();
//     check = validateInput(input);
//   }
//   return input;
// }

// function validateInput(input) {
//   if (choice.includes(input)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function game() {
//   // for (let i = 0; i < 5; i++) {
//   //   playRound();
//   // }
//   do {
//     playRound();
//   } while (playerScore < 5 && computerScore < 5);
//   getScore();
//   let playAgain = window.confirm("Play another game?");
//   if (playAgain) {
//     game();
//   } else {
//     intro();
//   }
// }

function playRound() {
  finalScore.textContent = "";
  const computerSelection = getComputerChoice();
  computerChoiceDiv.textContent = `Computer Choice: ${computerSelection}`;
  // console.log(`Computer picked ${computerSelection}`);
  //tie
  if (playerSelection === computerSelection) {
    resultsDiv.textContent = "Results: It's a Tie";
    // console.log("It's a Tie");
  }
  //rock
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      resultsDiv.textContent = "Results: You Lose! Paper beats Rock";
      // console.log("You Lose! Paper beats Rock");
      computerScore++;
    } else {
      resultsDiv.textContent = "Results: You Win! Rock beats Scissors";
      // console.log("You Win! Rock beats Scissors");
      playerScore++;
    }
  }
  //paper
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      resultsDiv.textContent = "Results: You Lose! Scissors beats Paper";
      // console.log("You Lose! Scissors beats Paper");
      computerScore++;
    } else {
      resultsDiv.textContent = "Results: You Win! Paper beats Rock";
      // console.log("You Win! Paper beats Rock");
      playerScore++;
    }
  }
  //scissors
  else {
    if (computerSelection === "rock") {
      resultsDiv.textContent = "Results: You Lose! Rock beats Scissors";
      // console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else {
      resultsDiv.textContent = "Results: You Win! Scissors beats Paper";
      // console.log("You win! Scissors beats Paper");
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
    // console.log(`It's a tie! ${playerScore} - ${computerScore}.`);
  } else if (playerScore > computerScore) {
    finalScore.textContent = "You Win!";
    // console.log(`You won! ${playerScore} - ${computerScore}.`);
  } else {
    finalScore.textContent = "You Lose!";
    // console.log(`You lost! ${playerScore} - ${computerScore}.`);
  }
  //reset score:
  playerScore = 0;
  computerScore = 0;
}

// container.insertAdjacentText('beforeend', ', Kiwi, Melon');
