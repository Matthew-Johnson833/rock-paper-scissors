// Start of Logic and Functions for Rock Paper Scissors Game

// Uncaught TypeError: Node.appendChild: Argument 1 is not an object
// Make these scores as a DOM variable
// assign the game value to these later
let playerScore = 0;
let computerScore = 0;


// element attribution
const container = document.querySelector('#container');
// main content div
const rpsContent = document.createElement('div');
// div for RPS game images
const btnImages = document.createElement('div');
// scoreboard elements
const scoreboard = document.createElement('div');
const scoreboardDiv = document.createElement('div');
const playerScoreP = document.createElement('p');
const computerScoreP = document.createElement('p');
const scoresDiv = document.createElement('div');
const playerScoreDiv = document.createElement('div');
const computerScoreDiv = document.createElement('div');
// header footer
const header = document.createElement('header');
const footer = document.createElement('footer');
// button images
const rockBtnImage = document.createElement('img');
const paperBtnImage = document.createElement('img');
const scissorsBtnImage = document.createElement('img');

// eventListeners work. playRound()) finished, playerScore needs to update on click, get a winner after someone reaches 5 -> reset scores
rockBtnImage.addEventListener('click', () => playRound(playerSelect = 'rock'));
paperBtnImage.addEventListener('click', () => playRound(playerSelect = 'paper'));
scissorsBtnImage.addEventListener('click', () => playRound(playerSelect = 'scissors'));

// header creation
header.classList.add('header');
header.textContent = "Rock Paper Scissors!";

// Large div for Player Score and Computer Score - scoreboard
scoreboard.classList.add('scoreboard');
//scoreboard.textContent = "Scoreboard";
scoreboardDiv.classList.add('scoreboardDiv');
playerScoreP.textContent = "Player Score";
computerScoreP.textContent = "Computer Score";
scoreboardDiv.appendChild(playerScoreP);
scoreboardDiv.appendChild(computerScoreP);

// Individual divs for the player and computer score
scoresDiv.classList.add('scoresDiv');
playerScoreDiv.classList.add('playerScore');
// this line is not ideal but workable
playerScoreDiv.textContent = computerScore;
//document.getElementsByClassName("playerScore").innerHTML = playerScore;
computerScoreDiv.classList.add('computerScore');
// this line is not ideal but workable
computerScoreDiv.textContent = computerScore;

// create a div specifically for housing the images. 
btnImages.classList.add('btnImages');
btnImages.append(rockBtnImage, paperBtnImage, scissorsBtnImage);
// image sources
rockBtnImage.src = './images/rock.jpeg';
paperBtnImage.src = './images/paper.png';
scissorsBtnImage.src = './images/scissors.png';

// element addition
rpsContent.classList.add('rpsContent');

// footer creation
footer.classList.add('footer');
footer.innerHTML = `<p><a href='https://github.com/Matthew-Johnson833'> <strong>Matthew-Johnson833</strong></a>
                         for <a href='https://www.theodinproject.com/'><strong>The Odin Project</strong></a></p>`

// Page Layout
container.appendChild(header);

container.appendChild(rpsContent);
rpsContent.appendChild(scoreboard);
scoreboard.appendChild(scoreboardDiv);
scoreboard.appendChild(scoresDiv)
scoresDiv.appendChild(playerScoreDiv);
scoresDiv.appendChild(computerScoreDiv);

container.appendChild(btnImages);
container.appendChild(footer);

// a random index of the rpsArr is chosen and returns the computer's selection 
function computerPlay() {
    const rpsArr = ['rock,', 'paper', 'scissors'];
    let computerSelect = rpsArr[Math.floor(Math.random() * rpsArr.length)];
    return computerSelect;
}

// plays a round by calling in the eventListener and computerPlay()
function playRound(playerSelect, computerSelect) {
    computerSelect = computerPlay();

    if (playerSelect === computerSelect) {
        console.log("It's a tie!");
        alert("It's a tie!");
        return "It's a tie!";
    } else if (playerSelect === "rock" && computerSelect === "paper" ||
        playerSelect === "paper" && computerSelect === "scissors" ||
        playerSelect === "scissors" && computerSelect === "rock") {
        playerScore++;
        playerScoreDiv.innerHTML = playerScore;
        if (playerScore === 5) {
            alert("The player won this game. Congrats!");
            setTimeout(location.reload(), 10000);
        }
        return "User Wins!";
    } else {
        computerScore++;
        computerScoreDiv.innerHTML = computerScore;
        if (computerScore === 5) {
            alert("The computer won this game :(");
            setTimeout(location.reload(), 10000);
        }
        return "Computer Wins!";
    }
}

// function was intended to reset all values and start the game over again
/*function restartGame(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        return;
    } else {
        return;
    }
} */






