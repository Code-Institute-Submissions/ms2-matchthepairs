/* Flip Game Tile When Clicked */
const tiles = document.querySelectorAll(".game-tile");

function flipTile() {
    this.classList.toggle("flip");
}

tiles.forEach(tile => tile.addEventListener("click", flipTile));