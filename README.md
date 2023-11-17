# Kenzie Academy Challenge: Maze

Follow the instructions provided on my.kenzie.academy for this challenge. The `code.js` file is a placeholder. Feel free to rename it add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

1. Create maze maps
2. Display maze
 -maze div elements
 -displayMaze function
  -clear exisiting content
  -iterate through the maze using `for.Each` 
   -create elements
   -assign classlist to elements (wall, floor, start, finish)
 -append block to mazeDiv
 3. Move Player function
 -create event listender for each map
 -movePlayer function
  -get current player block
  -get current row  index of player
  -get current block  index of player
  -create variable for new row
  -create variable for new block
  -create switch to determine the new row and block index for each arrow key press
  -check if new position is within maze boundaries
  -get type of block at new positon
  -check if player can move to new positon
   -remove start from current position
   -add start to new position
  -check if new position is finish
   -add toast
4. call displayMaze

_(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_

## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

_(Put your reflection answer here.)_