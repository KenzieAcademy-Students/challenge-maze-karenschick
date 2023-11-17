 const mazeMapSample = [
  // FOR TESTING PURPOSES ONLY. Don't use this map
  "WWWWWWW", // as one of the choices in your game.
  "S W   W",
  "W W W W",
  "W   W F",
  "WWWWWWW",
];

const sokobanMapSample = [
  // FOR TESTING PURPOSES ONLY. Don't use this map
  " WWWWWW ", // as one of the choices in your game.
  " WO   WW",
  "WWW C  W",
  "WSX    W",
  "WWWWWWWW",
];

const sokobanMap1 = [
  "  WWWWW ",
  "WWW   W ",
  "WOSC  W ",
  "WWW COW ",
  "WOWWC W ",
  "W W O WW",
  "WC XCCOW",
  "W   O  W",
  "WWWWWWWW",
];

const mazeMap1 = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W   W",
  "W W W WWW WWWWW W WWW",
  "W W W  W      W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

const mazeMap2 = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W   W",
  "W W W WWW WWWWW W WWW",
  "W W W  W      W W   W",
  "W WWWWWWW W WWW W W W",
  "S         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "W     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

// Your Code Here.

const maps = [mazeMap1, mazeMap2];
let currentMap = 0;
let playerPosition = { x: -1, y: -1 }; // Initialize with default values
const mazeDiv = document.getElementById("maze-div1");

function displayMaze() {
  mazeDiv.innerHTML = "";

  maps[currentMap].forEach((row, rowIndex) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("maze-row");

    row.split("").forEach((blockStyle, columnIndex) => {
      const block = document.createElement("div");
      block.classList.add("block");

      switch (blockStyle) {
        case "W":
          block.classList.add("wall");
          break;
        case " ":
          block.classList.add("floor");
          break;
        case "S":
          block.classList.add("start");
          playerPosition = { x: columnIndex, y: rowIndex }; // Update player position
          break;
        case "F":
          block.classList.add("finish");
          break;
      }
      rowDiv.appendChild(block);
    });
    mazeDiv.appendChild(rowDiv);
  });
}

function movePlayer(event) {
  event.preventDefault();

  if (playerPosition.x === -1 || playerPosition.y === -1) {
    // Player position not properly initialized
    return;
  }

  let newRow = playerPosition.y;
  let newBlock = playerPosition.x;

  switch (event.key) {
    case "ArrowLeft":
      newBlock = playerPosition.x - 1;
      break;
    case "ArrowRight":
      newBlock = playerPosition.x + 1;
      break;
    case "ArrowUp":
      newRow = playerPosition.y - 1;
      break;
    case "ArrowDown":
      newRow = playerPosition.y + 1;
      break;
  }

  const newBlockType = maps[currentMap][newRow][newBlock];

  if (newBlockType !== "W") {
    const currentPlayerBlock = mazeDiv.children[playerPosition.y].children[playerPosition.x];
    currentPlayerBlock.classList.remove("start");

    const newPlayerBlock = mazeDiv.children[newRow].children[newBlock];
    newPlayerBlock.classList.add("start");

    playerPosition = { x: newBlock, y: newRow }; // Update player position

    if (newBlockType === "F") {
      // Player reached the finish
      alert("Congratulations! You reached the finish!");
    }
  }
}

document.addEventListener("keydown", movePlayer);
displayMaze();