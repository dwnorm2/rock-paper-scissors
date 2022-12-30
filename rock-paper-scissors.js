//ROCK PAPER SCISSORS
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
let playerSelection;

rockButton.addEventListener("click", () => {
  playerSelection = "rock";
  playRound();
});

paperButton.addEventListener("click", () => {
  playerSelection = "paper";
  playRound();
});

scissorsButton.addEventListener("click", () => {
  playerSelection = "scissors";
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
  const computerSelection = getComputerChoice();
  console.log(`Computer picked ${computerSelection}`);
  //tie
  if (playerSelection === computerSelection) {
    console.log("It's a Tie");
  }
  //rock
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore++;
    } else {
      console.log("You Win! Rock beats Scissors");
      playerScore++;
    }
  }
  //paper
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
    } else {
      console.log("You Win! Paper beats Rock");
      playerScore++;
    }
  }
  //scissors
  else {
    if (computerSelection === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else {
      console.log("You win! Scissors beats Paper");
      playerScore++;
    }
  }
  //game stops at 5 points
  if (playerScore == 5 || computerScore == 5) {
    getScore();
  }
}

function getScore() {
  //calculate and declare winner:
  if (playerScore === computerScore) {
    console.log(`It's a tie! ${playerScore} - ${computerScore}.`);
  } else if (playerScore > computerScore) {
    console.log(`You won! ${playerScore} - ${computerScore}.`);
  } else {
    console.log(`You lost! ${playerScore} - ${computerScore}.`);
  }
  //reset score:
  playerScore = 0;
  computerScore = 0;
}
