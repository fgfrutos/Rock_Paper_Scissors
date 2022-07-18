// Global variables
const options = ["Rock", "Paper", "Scissors"];
let counter = [0, 0];

// Game Functionalinity
function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie game!';
    }
    else if ((playerSelection === options[0] && computerSelection === options[1]) ||
    (playerSelection === options[1] && computerSelection === options[2]) ||
    (playerSelection === options[2] && computerSelection === options[0])) {
        counter[1]++;
        return 'Ouch! That hurts!';
    }
    else {
        counter[0]++;
        return "That's a hit!";
    }
}

function clearWind() {
    counterUI.textContent = `${counter[0]} - ${counter[1]}`;
    battleText.textContent = 'Prepare to fight!';
    [weapons[0].textContent, weapons[1].textContent] = ['', ''];
    vs.style.visibility = 'hidden';
    modal.classList.remove('show-modal');
}

function restart() {
    modal.classList.add('show-modal');
    restartBtn.addEventListener('click', () => {
        counter.forEach((c, i) => {
            counter[i] = c - c;
        });
        clearWind();
    });
}

// This function plays the game
function game(playerSelection) {
    if (counter[0] < 5 && counter[1] < 5){
        let computerSelection = getComputerChoice();
        vs.style.visibility = 'visible';
        [weapons[0].textContent, weapons[1].textContent] = [playerSelection, computerSelection];
        battleText.textContent = round(playerSelection, computerSelection);
        counterUI.textContent = `${counter[0]} - ${counter[1]}`
        if (counter[0] === 5) {
            result.textContent = 'You Win!'; 
            restart();
        }
        else if (counter[1] === 5) {
            result.textContent = 'You lose...'; 
            restart();
        }
    }
}

// UI
let mainUI = document.getElementById('game');
let buttons = document.querySelectorAll('#selection > button');
let counterUI = document.getElementById('counter');
let weapons = document.querySelectorAll('.weapon');
let vs = document.getElementById('vs');
let battleText = document.getElementById('text');
let selection = document.getElementById('selection');

// Modal elements
const modal = document.querySelector('.modal');
const result = document.getElementById('result');
const restartBtn = document.getElementById('restart');

// Game Functionality
buttons = Array.from(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.dataset.value);
    })
});
