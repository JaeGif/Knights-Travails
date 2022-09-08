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

/* BOARD MATRIX for thought process

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
    return console.log('Invalid start or end point. Bounds are [0 -> 7]');
  }

  const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  let visit = new Array(9); // make this i-th dimension

  // make all cells unvisited
  for (let i = 0; i <= 8; i++) {
    visit[i] = new Array(9); // make the j-th dimension on each i
    for (let j = 0; j <= 8; j++) {
      // set all [i, j] points vist value to false
      visit[i][j] = false;
    }
  }

  visit[rootNode[0]][rootNode[1]] = true; // set root node visit value to true and enqueue

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
      const finalPath = findPath(step);
      return console.log(
        `You made it in ${finalPath.length - 1} moves!`,
        'Here is your path:\n',
        finalPath
      );
    }

    for (let i = 0; i < 8; i++) {
      // 8 is the number of possible moves. This iterates through all possible moves.
      let x = step[iterator].xPosition + dx[i];
      let y = step[iterator].yPosition + dy[i];
      if (validMove(x, y) && !visit[x][y]) {
        // checks if the move is valid and if it is, it enqueues the move
        visit[x][y] = true;
        queue.push(new Node(x, y, step[iterator])); // assign the previous node here
      }
    }
    iterator++;
  }
}

function findPath(stepsArr) {
  // quick fn to iterate from the end to beginning of our new pseudo linkedList to find A path to the origin position.
  // Does NOT find all shortest paths if more than 1 exists, just 1 shortest path.
  const endNode = stepsArr[stepsArr.length - 1];
  let path = [];
  let currentNode = endNode;
  while (currentNode.previous !== null) {
    path.unshift([currentNode.xPosition, currentNode.yPosition]);
    currentNode = currentNode.previous;
  }
  path.unshift([stepsArr[0].xPosition, stepsArr[0].yPosition]);
  return path;
}

export { knightMoves };
