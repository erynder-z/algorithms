const squareRegistry = new Map();

interface ISquare {
  positionName: () => string;
  getPredecessor: () => any;
  setPredecessor: (newPred: any) => void;
  createKnightMoves: () => any[];
}

const ChessSquare = (x: number, y: number) => {
  const xPos = x;
  const yPos = y;
  let predecessor: ISquare;

  const KNIGHT_OFFSETS: number[][] = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  const getPredecessor = () => predecessor;
  const setPredecessor = (newPred: ISquare) => {
    predecessor = predecessor || newPred;
  };

  const positionName = () => `${x}, ${y}`;

  const createKnightMoves = () => {
    return KNIGHT_OFFSETS.map((offset) =>
      newSquareFrom(offset[0], offset[1])
    ).filter((square) => square !== undefined);
  };

  const newSquareFrom = (xOffset: number, yOffset: number) => {
    const [newX, newY] = [xPos + xOffset, yPos + yOffset];
    if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
      return ChessSquare(newX, newY);
    }
  };

  if (squareRegistry.has(positionName())) {
    return squareRegistry.get(positionName());
  } else {
    let newSquare = {
      positionName,
      getPredecessor,
      setPredecessor,
      createKnightMoves,
    };
    squareRegistry.set(positionName(), newSquare);
    return newSquare;
  }
};

const knightsMoves = (start: number[], finish: number[]) => {
  squareRegistry.clear();

  const origin = ChessSquare(start[0], start[1]);
  const target = ChessSquare(finish[0], finish[1]);

  const queue = [origin];
  while (!queue.includes(target)) {
    const currentSquare = queue.shift();

    const enqueueList = currentSquare.createKnightMoves();
    enqueueList.forEach((square: ISquare) =>
      square.setPredecessor(currentSquare)
    );
    queue.push(...enqueueList);
  }
  const path = [target];
  while (!path.includes(origin)) {
    const prevSquare = path[0].getPredecessor();
    path.unshift(prevSquare);
  }
  console.log(`The shortest path was ${path.length - 1} moves!`);
  console.log('The moves were:');
  path.forEach((square) => console.log(square.name()));
};

console.log(knightsMoves([3, 3], [3, 4]));
