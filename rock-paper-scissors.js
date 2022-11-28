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
showScore
*/


let playerScore = 0;
let computerScore = 0;

function game() { 
    for (let i = 0; i < 5; i++) {
    function getComputerChoice() {
        var choice = [ "rock", "paper", "scissors" ];
    return choice[ Math.floor(Math.random() * choice.length)];
    }

    const computerSelection = getComputerChoice()
    const playerSelection = prompt("Rock, Papaer, or Scissors?").toLowerCase();
    console.log(`Computer picked ${computerSelection}`);
    for (let i = 0; i < 5; i++) {}
    function playRound() {
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
                console.log("You Lose! Scissors beats Paper")
                computerScore++;
            } else {
                console.log("You Win! Paper beats Rock");
                playerScore++;
            }
        }
        //scissors
        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                console.log("You lose! Rock beats Scissors")
                computerScore++;
            } else {
                console.log("You win! Scissors beats Paper")
                playerScore++;
            }
        } else {
            console.log("Please enter Rock, Paper, or Scissors")
        }
    }
    playRound()
    }
    
    if (playerScore === computerScore) {
        console.log(`It's a tie! ${playerScore} - ${computerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`You won! ${playerScore} - ${computerScore}`)
    } else {
        console.log(`You lost! ${playerScore} - ${computerScore}`)
    }
}

game()


