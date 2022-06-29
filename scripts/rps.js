function computerPlay() {
    let a = [
        "rock",
        "paper",
        "scissor"
    ];
    let computer = a[Math.floor(Math.random() * a.length)];
    return computer;
};

function playerPlay() {
    let play = prompt("Rock Paper or Scissor");
    let pplay = play.toLowerCase();
    return pplay;
};

var playerSelection = playerPlay();
var computerSelection = computerPlay();
console.log(playerSelection, computerSelection);

function result(playerSelection, computerSelection) {
    if (playerSelection === "scissor" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissor" || playerSelection === "rock" && computerSelection === "paper") {
        console.log("computer wins! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === computerSelection) {
        console.log("nobody wins! Draw");
    } else {
        console.log("you win! " + playerSelection + " beats " + computerSelection + ".");
    };
};

result(playerSelection, computerSelection);