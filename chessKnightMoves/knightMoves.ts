const board: any[][] = [];
for (let i = 0; i < 8; i++) {
  board[i] = [];
}

const addMove = (x: number, y: number, distance: number): void => {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && board[x][y] == null) {
    board[x][y] = distance;
  }
};

const addAllMoves = (x: number, y: number, distance: number): void => {
  addMove(x + 1, y + 2, distance);
  addMove(x + 2, y + 1, distance);
  addMove(x + 2, y - 1, distance);
  addMove(x + 1, y - 2, distance);
  addMove(x - 1, y - 2, distance);
  addMove(x - 2, y - 1, distance);
  addMove(x - 2, y + 1, distance);
  addMove(x - 1, y + 2, distance);
};

const addAllPossibleMoves = (distance: number): void => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === distance) {
        addAllMoves(i, j, distance + 1);
      }
    }
  }
};

const knightMoves = (position: number[], target: number[]): number[] => {
  addMove(position[0], position[1], 0);
  let index: number = 0;

  do {
    addAllPossibleMoves(index++);
  } while (board[target[0]][target[1]] == null);

  return board[target[0]][target[1]];
};

console.log(knightMoves([3, 3], [4, 3]));
