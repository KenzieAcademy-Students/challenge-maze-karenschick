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
  "W   W   W       W   W",
  "W W W WWW WWWWW W W W",
  "S W W         W   W W",
  "W W WWWWW W WWW W W W",
  "W W       W     W W W",
  "W WWW WWW WWWWWWW W W",
  "W W   W W W W     W W",
  "W W WWW W W WWWWW   W",
  "W     W   W W   W W W",
  "WWWWW W W   W W W W W",
  "W     W WWW   W W W W",
  "W WWWWW W WWWWW W W F",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

const maps = [mazeMap1, mazeMap2];
let currentMap = 0;
let playerBlock = { x: -1, y: -1 };
const mazeDiv = document.getElementById("maze-div");

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
          playerBlock = { x: columnIndex, y: rowIndex };
          break;
        case "F":
          block.classList.add("finish");
          break;
        case "P":
          block.classList.add("player");
          break;
      }
      rowDiv.appendChild(block);
    });
    mazeDiv.appendChild(rowDiv);
  });

  const startBlock = mazeDiv.children[playerBlock.y].children[playerBlock.x];
  startBlock.classList.add("player");
}

function movePlayer(event) {
  event.preventDefault();

  if (playerBlock.x === -1 || playerBlock.y === -1) {
    return;
  }

  let newRow = playerBlock.y;
  let newBlock = playerBlock.x;

  switch (event.key) {
    case "ArrowLeft":
      newBlock = playerBlock.x - 1;
      break;
    case "ArrowRight":
      newBlock = playerBlock.x + 1;
      break;
    case "ArrowUp":
      newRow = playerBlock.y - 1;
      break;
    case "ArrowDown":
      newRow = playerBlock.y + 1;
      break;
  }

  if (
    newRow >= 0 &&
    newRow < maps[currentMap].length &&
    newBlock >= 0 &&
    newBlock < maps[currentMap][newRow].length
  ) {
    const newBlockType = maps[currentMap][newRow][newBlock];

    if (newBlockType !== "W") {
      const currentPlayerBlock =
        mazeDiv.children[playerBlock.y].children[playerBlock.x];
      currentPlayerBlock.classList.remove("player");

      const newPlayerBlock = mazeDiv.children[newRow].children[newBlock];
      newPlayerBlock.classList.add("player");

      playerBlock = { x: newBlock, y: newRow };

      if (newBlockType === "F") {
        displayMessage("Congratulations! You've reached the end of the maze.");
      } else {
        displayMessage("");
      }
    }
  }
}

function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

function switchMaze() {
  currentMap = (currentMap + 1) % maps.length;
  displayMaze();
  displayMessage("");
}

document.addEventListener("keydown", movePlayer);
displayMaze();
