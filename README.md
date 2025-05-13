# 🧩 Kenzie Academy Challenge: Maze

A browser-based maze game where a player can navigate through a maze using keyboard arrow keys. Built using JavaScript, HTML, and CSS.

---

## 🗺️ Project Plan

### 1. Create Maze Maps
- Define maze structure using nested arrays or grid data

### 2. Display Maze
- Create a container (`mazeDiv`) to render maze blocks
- Implement `displayMaze()` function:
  - Clear any existing maze content
  - Loop through maze rows with `forEach`
    - Create a new `row` element
    - Loop through each cell in the row
      - Create a `block` element
      - Assign class (e.g. `wall`, `floor`, `start`, `finish`) using a `switch` statement
      - Append block to the row
    - Append row to `mazeDiv`
  - Set the player’s initial position at the start block

### 3. Move Player
- Add `movePlayer()` function:
  - Prevent default arrow key behavior
  - Ensure player's starting position is set
  - Track player’s x and y position
  - Update these positions (`newRow`, `newBlock`) based on arrow key input (using a `switch` statement)
  - Check bounds to prevent moving outside the maze
  - Check for walls:
    - If not a wall:
      - Remove `"player"` class from the old block
      - Add `"player"` class to the new block
      - Update player’s position
  - If player reaches the finish block, display a win message

### 4. Display Message
- Create a `displayMessage()` function to show completion status or errors

### 5. Add Event Listener
- Listen for keyboard arrow key events
- Call `movePlayer()` when keys are pressed

### 6. Call `displayMaze()`
- Run this function when the game loads to initialize the maze

---

## 💭 Reflection

- I chose to use `switch` statements for checking directions and assigning classes because:
  - They are more readable than multiple `if/else` conditions
  - They are slightly more performant for evaluating character or integer inputs
- I could have used `if/else` statements, but in this case, `switch` felt more organized and clearer

---

## ✅ Features

- Dynamic maze rendering from an array
- Keyboard-based player movement
- Collision detection (walls, boundaries)
- Win condition detection (reaches finish)
- DOM manipulation using vanilla JavaScript

---

## 📌 To Improve or Extend

- Add sound effects or animations
- Implement multiple levels
- Add timer or scoring system
- Allow maze generation or randomization
- Improve accessibility and responsiveness

