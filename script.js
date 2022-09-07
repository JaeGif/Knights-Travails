// Should use BFS first then maybe A* after.

/* Put together a script that creates a game board and a knight.
Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.
Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
  > knightMoves([3,3],[4,3]) 
  
  knightmoves fn takes the starting square and the ending square and outputs the path to the square.*/

// knights can move [1, 2], [2, 1], [-1, 2], [-2, 1], and [-1, -2] on the board for each step.
// the board is bounded and the knight cannot step off, example vertex > 8 is invalid and vertex < 0 is invalid.

/* pseudocode: 
 1  procedure BFS(graph, rootofgraph) is
 2      let Q be a queue
 3      label root as explored
 4      Q.enqueue(root)
 5      while Q is not empty do
 6          v := Q.dequeue()
 7          if v is the goal then
 8              return v
 9          for all edges from v to w in G.adjacentEdges(v) do
10              if w is not labeled as explored then
11                  label w as explored
12                  Q.enqueue(w) */

/* BOARD MATRIX for possible adjacency matrix solution

    0   1   2   3   4   5   6   7
0   0   0   0   0   0   0   0   0
1   0   0   0   0   0   0   0   0
2   0   0   0   0   0   0   0   0
3   0   0   0   0   0   0   0   0
4   0   0   0   0   0   0   0   0
5   0   0   0   0   0   0   0   0
6   0   0   0   0   0   0   0   0
7   0   0   0   0   0   0   0   0

*/
class Node {
  constructor(xPosition, yPosition, previous = null) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.previous = previous;
  }
}

function validMove(x, y) {
  // the board is 8x8 always
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
    return true;
  }
  return false;
}
// rootNode is knights starting position in [x, y]
// endNode is knights final position in [x, y]

function knightMoves(rootNode, endNode) {
  // invalid input handling
  if (
    !validMove(rootNode[0], rootNode[1]) ||
    !validMove(endNode[0], endNode[1])
  ) {
    return;
  }

  const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  let visit = new Array(9); // make this i-th dimension

  // make all cells unvisited
  for (let i = 0; i <= 8; i++) {
    visit[i] = new Array(9); // make the j-th dimension on each i
    for (let j = 0; j <= 8; j++) {
      // set all [i, j] points vist value to false]
      visit[i][j] = false;
    }
  }

  visit[(rootNode[0], rootNode[1])] = true; // set root node visit value to true and enqueue

  let queue = [];
  queue.push(new Node(rootNode[0], rootNode[1])); // previous is null because it is the root node.
  let step = [];
  let iterator = 0;

  while (queue.length !== 0) {
    step.push(queue.shift());
    // if target is reached
    if (
      step[iterator].xPosition === endNode[0] &&
      step[iterator].yPosition === endNode[1]
    ) {
      const pathNodes = findPath(step);
      let finalPathOutput = [];
      for (let i = 0; i < pathNodes.length; i++) {
        finalPathOutput.push([pathNodes[i].xPosition, pathNodes[i].yPosition]);
      }
      return finalPathOutput;
    }

    for (let i = 0; i < 8; i++) {
      // 8 is the number of possible moves. This iterates through all possible moves.
      let x = step[iterator].xPosition + dx[i];
      let y = step[iterator].yPosition + dy[i];
      if (validMove(x, y) && !visit[x][y]) {
        // checks if the move is valid and if it is, it enqueues the move
        visit[x][y] = true;
        queue.push(new Node(x, y, step[iterator - 1]));
      }
    }
    iterator++;
  }
}

function findPath(stepsArr) {
  const endNode = stepsArr[stepsArr.length - 1];
  let path = [];
  let notOrigin = true;
  let currentNode = endNode;
  while (notOrigin) {
    if (currentNode.previous === null) {
      notOrigin = false;
    }
    path.unshift(currentNode);
    currentNode = currentNode.previous;
  }
  return path;
}

let start = [0, 0];
let end = [3, 3];
console.log(knightMoves(start, end));
