# Kenzie Academy Challenge: Maze

## Project Plan

1. Create maze maps
2. Display maze
 -maze div elements
 -displayMaze function
  -clear exisiting content
  -iterate through the maze using `for.Each` and create new row elements
  -iterate through row elements and create new block element
  -assign classlist to elements (wall, floor, start, finish) with a switch statement
  -append block to the row
  -append row to the mazeDiv
  -set player block at start
3. Move Player function
 -prevent default
 -check if player's position is initialized, if not return
 -update player position
   -create new variables to track playerBlock x and y positions
   -update new variables, `newRow` and `newBlock`, based on arrow key functions with switch statement
 -check if new position is within maze boundaries
 -check if new position is not a wall
   -if not a wall:
    - remove `"player"` class from current player block and add it to the new player block
    -update player block with new position
 -check finish and display message
4. displayMessage function  
5. event listener to call movePlayer
6. call `displayMaze()`


## Reflection

Instead of using Switch statement, I could have used else/if conditional statements. I chose to use switch statements as they evaluate only character or integer datatype. They are also faster than if/else statements and are more readable.
