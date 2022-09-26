import createShip from '../ships/ships';

function gameBoard() {
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

  let placeShip = (x, y, length) => {
    if (x + length > board.length || y > board[x].length)
      return alert('not possible on this coords');
    let ship = createShip(x, y, length);

    for (let i = x + ship.shiplength - 1; i >= x; i--) {
      if (board[i][y] !== '') placeShip(x, y, length);
      else {
        board[i][y] = 'Ship';
      }
    }
    ships.push(ship);
  };

  let receiveAttack = (x, y) => {
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].coords.x.length; j++) {
        if (ships[i].coords.x[j] == x) {
          if (ships[i].coords.y == y) {
            console.log('hit');
            ships[i].hit(x, y, board);
            if (ships[i].isSunk() === true) {
              sunkShips += 1;
            }
            return true;
          } else missedHit.push([x, y]);
        }
      }
    }
  };

  return { placeShip, board, receiveAttack, ships };
}

export default gameBoard;
