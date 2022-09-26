import game from './gameflow/gameflow';

function createShip(x, y, length) {
  let shipLength = length;
  let tp = 0;
  let coords = {
    x: [],
    y: [y],
  };
  let hit = (x, y, board) => {
    for (let i = 0; i < coords.x.length; i++) {
      if (coords.x[i] === x) {
        if (coords.y == y) {
          if (coords.x[i] !== 'hit') {
            board[x][y] = 'hit';
            coords.x[i] = 'hit';
            tp += 1;
          }
        }
      }
    }
  };

  for (let i = x; i < x + length; i++) {
    coords.x.push(i);
  }

  let isSunk = () => {
    return tp === shipLength ? true : false;
  };
  return { isSunk, hit, shipLength, coords, tp };
}

export default createShip;
