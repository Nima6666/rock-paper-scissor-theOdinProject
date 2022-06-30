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


var playerWinCount = 0;
var computerWinCount = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "scissor" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissor" || playerSelection === "rock" && computerSelection === "paper") {
        console.log(playerSelection, computerSelection);
        computerWinCount = computerWinCount + 1;
        console.log(playerWinCount, computerWinCount);
        return ("computer wins! this round. " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === computerSelection) {
        console.log(playerSelection, computerSelection);
        console.log(playerWinCount, computerWinCount);
        return ("nobody wins! this round Draw");
    } else {
        console.log(playerSelection, computerSelection);
        playerWinCount = playerWinCount + 1;
        console.log(playerWinCount, computerWinCount);
        return ("you win! this round " + playerSelection + " beats " + computerSelection + ".");
    };
    };

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
    };
    if (playerWinCount > computerWinCount) {
        console.log("you win this game.");
    } else if (playerWinCount < computerWinCount) {
        console.log("you lose!");
    } else {
        console.log("Draw");
    };
}

game();