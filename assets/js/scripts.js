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

/* Game Tile Is Flipped When Clicked; Counter is started for number of tile pairs that have been flipped, for each pair, the counter increases by 1*/
function flipTile() {
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

/* Check if Two Tiles Match; Counter is started for number of tile pairs that have been matched, for each pair, the counter increases by 1 */
function checkForMatch(){
    if(firstTile.dataset.type === secondTile.dataset.type) {
    matchCounter++;
    matchCount.innerHTML = `Total Matches: ${matchCounter}`;
    disableTiles();
    return;
    }

    unflipTiles();
}

/* Disable Matched Tiles */
function disableTiles() {
    firstTile.removeEventListener("click", flipTile);
    secondTile.removeEventListener("click", flipTile);

    resetTiles();
}

/* Flip Tiles Back If Not Matched */
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

/* Shuffles game tiles; set to execute straight away, every time the page is loaded/reloaded, the tiles will shuffle */
(function shuffle() {
   tiles.forEach(tile => {
     let shuffleTiles = Math.floor(Math.random() * 12);
     tile.style.order = shuffleTiles;
   });
 })();

 /* reset and shuffle game tiles when reset button is clicked */
 function resetGame(){
     tiles.forEach(tile => {
     let shuffleTiles = Math.floor(Math.random() * 12);
     tile.style.order = shuffleTiles;
   });
 }

tiles.forEach(tile => tile.addEventListener("click", flipTile));

reset.addEventListener("click", resetGame());