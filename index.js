const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie game!");
        return 0;
    }
    else if (playerSelection === options[0] && computerSelection === options[1]) {
        console.log('You lose...');
        return -1;
    }
    else if (playerSelection === options[1] && computerSelection === options[0]) {
        console.log('You Win!');
        return 1;
    } 
    else if (playerSelection === options[1] && computerSelection === options[2]) {
        console.log('You lose...');
        return -1;
    } 
    else if (playerSelection === options[2] && computerSelection === options[1]) {
        console.log('You Win!');
        return 1;
    } 
    else if (playerSelection === options[2] && computerSelection === options[0]) {
        console.log('You lose...');
        return -1;
    } 
    else {
        console.log('You Win!');
        return 1;
    }
}

// This function plays the game
function game() {
    let playerSelection, computerSelection;
    let counter = 0;
    for (var i = 0; i < 5; i++) {
        let inOptions = -1;
        computerSelection = getComputerChoice(); 
        // Allow to handel bad responses
        while (inOptions < 0) {
            playerSelection = prompt("Make your choice: ").toLowerCase();
            inOptions = options.indexOf(playerSelection);
        }
        console.log(`${playerSelection} vs ${computerSelection}`)
        counter += round(playerSelection, computerSelection);
    }
    if (counter > 0) {
        console.log('Congratulations, you are the winner!');
    }
    else if (counter < 0) {
        console.log('Sorry, you lose...')
    }
    else {
        console.log('The game ended in a draw.')
    }
}

game()