Put together a script that creates a game board and a knight.
Treat all possible moves the knight could make as children in a tree.
Don’t allow any moves to go off the board.
Decide which search algorithm is best to use for this case.
Hint: one of them could be a potentially infinite series.
Use the chosen search algorithm to find the shortest path between the
starting square (or node) and the ending square. Output what that full
path looks like, e.g.:

> knightMoves([3,3],[4,3])
> => You made it in 3 moves! Here's your path:

    [3,3]
    [4,5]
    [2,4]
    [4,3]

likely will use the A\* algorithm
