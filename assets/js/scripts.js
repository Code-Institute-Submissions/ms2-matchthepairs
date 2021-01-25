/* Declared Variables */
const tiles = document.querySelectorAll(".game-tile");

let flippedTile = false;
let firstTile, secondTile;

/* Game Tile Is Flipped When Clicked */
function flipTile() {
    this.classList.add("flip");

    if(!flippedTile) {
        flippedTile = true;
        firstTile = this;
        return;
    }

    secondTile = this;
    flippedTile = false;

    checkForMatch();
}

tiles.forEach(tile => tile.addEventListener("click", flipTile));