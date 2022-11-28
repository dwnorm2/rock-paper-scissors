//ROCK PAPER SCISSORS

/* 5 round game of RPS pseudocode:
start game
start round
generate computer RPS pick
ask user for RPS pick (convert to all lowercase)
check who wins
add 1 point to winner's score
declare winner of round with message
loop this sequence 5 times
declare winner of game with message (compare user and computrer score)
reset all values to zero and repeat

variable to make?
playerSelection
computerSelection
playerScore
computerScore

functions to make?
getComputerChoice()
playRound()
game() {
for (let i = 0; i < 5; i++) {
   // your code here!
} 
}
compareChoices?
*/

function getComputerChoice() {
    var choice = [ "rock", "paper", "scissors" ];
   return choice[ Math.floor(Math.random() * choice.length)];

}
const computerSelection = getComputerChoice()
const playerSelection = prompt("Rock, Papaer, or Scissors?").toLowerCase();
console.log(`Computer picked ${computerSelection}`);
function playRound(playerSelection, computerSelection) {
    //tie
    if (playerSelection === computerSelection) {
        console.log("It's a Tie");
    } 
    //rock
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You Lose! Paper beats Rock")
        } else {
            console.log("You Win! Rock beats Scissors")
        }
    }
    //paper
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You Lose! Scissors beats Paper")
        } else {
            console.log("You Win! Paper beats Rock")
        }
    }
    //scissors
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors")
        } else {
            console.log("You win! Scissors beats Paper")
        }
    } else {
        console.log("Please enter Rock, Paper, or Scissors")
    }
}

playRound(playerSelection, computerSelection)

