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

const mazeDiv1 = document.getElementById("maze-div1");
const mazeDiv2 = document.getElementById("maze-div2");

function displayMaze(maze, mazeDiv) {
  mazeDiv.innerHTML = "";
  maze.forEach((row) => {
    const rowDiv = document.createElement("div")
    rowDiv.classList.add("maze-row")
    
    row.split("").forEach((blockStyle) => {
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

document.addEventListener("keydown", (event) =>
  movePlayer(event, mazeMap1, mazeDiv1)
);
document.addEventListener("keydown", (event) =>
  movePlayer(event, mazeMap2, mazeDiv2)
);

function movePlayer(event, maze, mazeDiv) {
  const playerBlock = mazeDiv.querySelector(".start");
  const rowIndex = playerBlock.parentNode.rowIndex;
  const blockIndex = Array.from(playerBlock.parentNode.children).indexOf(
    playerBlock
  );

  let newRow;
  let newBlock;

  switch (event.key) {
    case "ArrowLeft":
      newRow = rowIndex;
      newBlock = blockIndex - 1;
      break;
    case "ArrowRight":
      newRow = rowIndex;
      newBlock = blockIndex + 1;
      break;
    case "ArrowUp":
      newRow = rowIndex - 1;
      newBlock = blockIndex;
      break;
    case "ArrowDown":
      newRow = rowIndex + 1;
      newBlock = blockIndex;
      break;
  }

  if (
    newRow >= 0 &&
    newRow < maze.length &&
    newBlock >= 0 &&
    newBlock < maze[newRow].length
  ) {
    const newBlockType = maze[newRow][newBlock];

    if (newBlockType === " " || newBlockType === "F") {
      playerBlock.classList.remove("start");
      mazeDiv.children[newRow * maze[0].length + newBlock].classList.add(
        "start"
      );

      if (newBlockType === "F") {
        //add toast
      }
    }
  }
}

displayMaze(mazeMap1, mazeDiv1);
displayMaze(mazeMap2, mazeDiv2);
