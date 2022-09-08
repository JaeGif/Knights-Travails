import { knightMoves } from './script.js';

let start = [0, 0];
let end = [0, 1];
knightMoves(start, end);

start = [7, 7];
end = [7, 7];
knightMoves(start, end);

start = [1, 6];
end = [2, 3];
knightMoves(start, end);

start = [8, 9];
end = [1, 7];
knightMoves(start, end);
