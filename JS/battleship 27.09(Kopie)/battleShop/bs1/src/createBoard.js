import createShip from './createShip';
import player from './createPlayer';

function gameboard() {
  let board = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];
  let ships = [];
  let missedHit = [];
  let sunkShips = 0;

  function checkShunkShips() {
    if (sunkShips > 4) {
      return true;
    }
  }

  let placeShip = (x, y, length) => {
    if (x > board.length || y > board[x].length) return alert('not possible');
    let testShip = createShip(x, y, length);
    for (let i = x + testShip.shipLength - 1; i >= x; i--) {
      if (board[i][y] !== '') break;
      else board[i][y] = 'Ship';
    }
    ships.push(testShip);
    return board;
  };

  let receiveAttack = (x, y, board) => {
    console.log(board);
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].coords.x.length; j++) {
        if (ships[i].coords.x[j] == x) {
          if (ships[i].coords.y == y) {
            ships[i].hit(x, y, board);
            if (ships[i].isSunk() === true) {
              sunkShips += 1;
              return true;
            } else return false;
          }
        } else {
          missedHit.push([x, y]);
        }
      }
    }

    return ships;
  };

  return { placeShip, board, receiveAttack, ships };
}

export default gameboard;
