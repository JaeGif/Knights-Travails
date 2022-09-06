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

/* BOARD MATRIX

    1   2   3   4   5   6   7   8
1   0   0   0   0   0   0   0   0
2   0   0   0   0   0   0   0   0
3   0   0   0   0   0   0   0   0
4   0   0   0   0   0   0   0   0
5   0   0   0   0   0   0   0   0
6   0   0   0   0   0   0   0   0
7   0   0   0   0   0   0   0   0
8   0   0   0   0   0   0   0   0

*/

function validMove(x, y) {
  // the board is 8x8 always
  if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
    return true;
  }
  return false;
}

console.log(validMove(2, 9));
