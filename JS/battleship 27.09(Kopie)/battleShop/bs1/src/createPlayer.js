import gameboard from './createBoard';

function player() {
  let placedShips = 0;
  let ownGameboard = gameboard();
  console.log(ownGameboard);
  let enemyGameboard = gameboard();

  function placeShips(x, y, length) {
    console.log(x, y, length);
    ownGameboard.placeShip(x, y, length);
  }
  placeShips(
    parseInt(prompt('x')),
    parseInt(prompt('y')),
    parseInt(prompt('length'))
  );
  placeShips(
    parseInt(prompt('x')),
    parseInt(prompt('y')),
    parseInt(prompt('length'))
  );
  placeShips(
    parseInt(prompt('x')),
    parseInt(prompt('y')),
    parseInt(prompt('length'))
  );

  function placeEnemyShips() {
    enemyGameboard.placeShip(1, 1, 2);
    enemyGameboard.placeShip(3, 4, 3);
    enemyGameboard.placeShip(3, 2, 3);
    enemyGameboard.placeShip(4, 7, 2);
    console.log(ownGameboard, enemyGameboard);
  }
  placeEnemyShips();

  let attack = (board, x, y) => {
    board.receiveAttack(x, y);
  };
  attack(enemyGameboard, 3, 2);
  return { placeShips, ownGameboard, placedShips };
}

function pcPlayer() {
  let placedShips = 0;
  let enemyGameboard = player.ownGameboard;
  let ownGameboard = gameboard();
  let ships;

  let attack = () => {};

  function placeShips() {
    ownGameboard.placeShip(2, 3, 3);
    ownGameboard.placeShip(6, 4, 3);
    ownGameboard.placeShip(3, 6, 3);
    ownGameboard.placeShip(4, 6, 2);
    console.log(ownGameboard);
  }
  placeShips();
  return { placedShips, enemyGameboard, ownGameboard, ships, placeShips };
}

function gameflow() {
  let p1 = player;
  let pc = pcPlayer;
}

gameflow();

export default player;
