let playerSelection = 0;
let computerSelection = 0;
let round = 1;
let node;
let timeout;

function computePlay() {
    if (node) {node.classList.remove('active')};
    round++;
    node = this;
    let a = [
        "rock",
        "paper",
        "scissor"
    ];
    let computer = a[Math.floor(Math.random() * a.length)];
    if (computer === 'rock') {
        computerDisplay.textContent = '✊';
    } else if (computer === 'paper') {
        computerDisplay.textContent = '✋';
    } else {
        computerDisplay.textContent = '✌️';
    }
    computerSelection = computer;
    playerSelection = this.classList.value;
    this.classList.add('active');
    computerDisplay.classList.add('slide');
    timeout = setTimeout(() => {
        node.classList.remove('active');
        computerDisplay.classList.remove('slide');
        }, 800)
    results.textContent = playRound(playerSelection, computerSelection);
    setTimeout(() => {
        if (round > 4) return game();
    }, 800);
};

var playerWinCount = 0;
var computerWinCount = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "scissor" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissor" || playerSelection === "rock" && computerSelection === "paper") {
        computerWinCount = computerWinCount + 1;
        counts.querySelector('.computer').textContent = `Computer: ${computerWinCount}`
        return ("computer wins! this round. " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === computerSelection) {
        return ("nobody wins! this round Draw");
    } else {
        playerWinCount = playerWinCount + 1;
        counts.querySelector('.player').textContent = `Player: ${playerWinCount}`
        return ("you win! this round " + playerSelection + " beats " + computerSelection + ".");
    };
};

function game() {
    if (playerWinCount > computerWinCount) {
        endResult.textContent = "you win this game.";
    } else if (playerWinCount < computerWinCount) {
        endResult.textContent = "you lose this game";
    } else {
        endResult.textContent = "Draw";
    };
    playerWinCount = 0;
    computerWinCount = 0;
    round = 0;
    container1.classList.remove('on');
    toggleS.textContent = 'Start Game'
}

const computerDisplay = document.querySelector('.computerPlayDisplay');
const playerDisplay = document.querySelector('.playerPlayDisplay');
const buttons = document.querySelectorAll('.container1 button');
const container1 = document.querySelector('.container1');
const results = document.querySelector('.result');
const counts = document.querySelector('.counts');
const toggleS = document.querySelector('.toggle');
const container2 = document.querySelector('.container2');
const endResult = document.querySelector('.endResult');

function toggle() {
    playerWinCount = 0;
    computerWinCount = 0;
    round = 0;
    counts.querySelector('.player').textContent = `Player: ${playerWinCount}`;
    counts.querySelector('.computer').textContent = `Computer: ${computerWinCount}`;
    container1.classList.add('on');
    buttons.forEach(button => button.addEventListener('click', computePlay));
}

toggleS.addEventListener('click', toggle);