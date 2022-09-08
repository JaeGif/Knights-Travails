import { knightMoves } from './script.js';

let start = [0, 0];
let end = [0, 1];
knightMoves(start, end);

/* You made it in 3 moves! Here is your path:
 [ [ 0, 0 ], [ 1, 2 ], [ 2, 0 ], [ 0, 1 ] ] */

start = [7, 7];
end = [7, 7];
knightMoves(start, end);

/* You made it in 0 moves! Here is your path:
 [ [ 7, 7 ] ] */

start = [1, 6];
end = [2, 3];
knightMoves(start, end);

/* You made it in 2 moves! Here is your path:
 [ [ 1, 6 ], [ 0, 4 ], [ 2, 3 ] ] */

start = [8, 9];
end = [1, 7];
knightMoves(start, end);

/* Invalid start or end point. Bounds are [0 -> 7] */
