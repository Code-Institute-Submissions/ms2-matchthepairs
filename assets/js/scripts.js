/* Declared Variables */
const tiles = document.querySelectorAll(".game-tile");

let flippedTile = false;
let firstTile, secondTile;

let pauseFlips = false;

const reset = document.querySelectorAll(".reset-btn");

const pairCount = document.getElementById("pair-count");
let pairCounter = 0;

const matchCount = document.getElementById("match-count");
let matchCounter = 0;

let timerOn = true;
let time = 0;
let timer;
let mins;
let secs;

const modal = document.getElementById("congrats-modal");

const playAgain = document.getElementById("play-again");

/* Timer function to display mins and seconds once game begins, ie. once the user 
has clicked on the first tile the timer will begin */ 
function startTimer() {
    timer = setInterval(function () {
        time++;
        mins = ("0" + Math.floor(time / 60)).slice(-2);
        secs = ("0" + (time % 60)).slice(-2);
        document.getElementById("timer").innerHTML = `Timer: ${mins}:${secs}`;
    }, 1000);
}

/* Game Tile Is Flipped When Clicked; Counter is started for number of tile pairs 
that have been flipped, for each pair the counter increases by 1. Timer also begins 
once the first game tile has been clicked */
function flipTile() {
    if (timerOn === true) {
        startTimer();
        timerOn = false;
    }

    if(pauseFlips) return;
    if(this === firstTile) return;

    this.classList.add("flip");

    if(!flippedTile) {
        flippedTile = true;
        firstTile = this;
        return;
    }

    secondTile = this;
    hasFlippedCard = false;
    pairCounter++;
    pairCount.innerHTML = `Total Pairs Flipped: ${pairCounter}`;

    checkForMatch();
}

/* Check if Two Tiles Match; Counter is started for number of tile pairs that 
have been matched, for each match the counter increases by 1 */
function checkForMatch(){
    if(firstTile.dataset.type === secondTile.dataset.type) {
        matchCounter++;
        matchCount.innerHTML = `Total Matches: ${matchCounter}`;
        disableTiles();
        return;
    }
    unflipTiles();
}

/* Disable Matched Tiles; prevent them being flipped back again if clicked */
function disableTiles() {
    firstTile.removeEventListener("click", flipTile);
    secondTile.removeEventListener("click", flipTile);

    resetTiles();
    gameOver();
}

/* Flip Tiles Back If Not Matched; both tiles will flip back after the set 
timeout */
function unflipTiles() {
    pauseFlips = true;

    setTimeout(() => {
        firstTile.classList.remove("flip");
        secondTile.classList.remove("flip");
        resetTiles();
    }, 1000);
}

/* Resets Tiles; Prevents a single tile being clicked twice as a match */
function resetTiles() {
    [flippedTile, pauseFlips] = [false, false];
    [firstTile, secondTile] = [null, null];
}

/* Shuffles game tiles; set to execute straight away, every time the page is 
loaded/reloaded, the tiles will shuffle */
(function shuffle() {
    tiles.forEach(tile => {
        let shuffleTiles = Math.floor(Math.random() * 12);
        tile.style.order = shuffleTiles;
    });
})();

/* The game ends when the number of matches equals 6, meaning all pairs have
been matched. This will cause the popup modal to become visible, displaying the
users scores and the time taken. */
function gameOver() {
    if(matchCounter == 6) {
        modal.classList.add("show");
        document.getElementById("totalMatches").innerHTML = matchCounter;
        document.getElementById("totalPairs").innerHTML = pairCounter;
        document.getElementById("totalTime").innerHTML = `${mins}:${secs}`;
        
        closeModal();
    }
}

/* The game will be reset if the user clicks the screen while the popup modal
is open. */
function closeModal() {
    modal.addEventListener("click", function() {
        modal.classList.remove("show");

        resetGame();
    })
}

/* The game will be reset by reloading the site page */
function resetGame() {
    location.reload();
    return false;
}

/* Whenever the user clicks on a tile, the flipTile function will execute */
tiles.forEach(tile => tile.addEventListener("click", flipTile));

/* If the user clicks the play again button within the popup modal, 
the resetGame function will execute */
playAgain.addEventListener("click", resetGame); 

/* If the user clicks the reset button, the resetGame function will execute */
reset.addEventListener("click", resetGame);
