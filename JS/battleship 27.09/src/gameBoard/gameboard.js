import createShip from '../shipfactory/shipfactory';

function gameBoard() {
  let gameBoard = [
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

  let placeShip = (x, y, length) => {
    let ship = createShip(x, y, length);
    for (let i = y + ship.shipLength - 1; i >= y; i--) {
      if (
        gameBoard[i][x] !== '' ||
        y + length > gameBoard.length ||
        x > gameBoard[y].length
      ) {
        return false;
      }
      if (i == y) {
        for (let i = y + ship.shipLength - 1; i >= y; i--) {
          gameBoard[i][x] = 'Ship';
        }

        ships.push(ship);
      }
    }
    return gameBoard;
  };

  let receiveAttack = (x, y) => {
    ships.forEach((singleShip) => {
      if (
        singleShip.coords.y.yCoords.some((ele) => ele === y) &&
        !singleShip.coords.y.yHit.some((ele) => ele === y) &&
        singleShip.coords.x == x
      ) {
        console.log('hit');

        singleShip.hit(x, y);
        if (singleShip.isSunk() == true) {
          sunkShips += 1;
          gameBoard[y][x] = 'hit';
          if (sunkShips === 3) return alert('all ships sunk');
          return alert('sunk this ship');
        }
        return (gameBoard[y][x] = 'hit');
      } else {
        return missedHit.push([x, y]);
      }
    });
  };

  if (sunkShips === 4) return alert('all ships sunk');

  return { placeShip, gameBoard, ships, missedHit, receiveAttack };
}

export default gameBoard;
