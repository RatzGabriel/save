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

  let placeShip = (x, y, length) => {
    for (let i = x + length; i >= x; i--) {
      if (board[i][y] !== '') break;
      else board[i][y] = 'Ship';
    }
    return board;
  };

  return { placeShip, board };
}

let newboard = gameboard();
console.log(newboard.placeShip(0, 0, 1));

export default gameboard;
