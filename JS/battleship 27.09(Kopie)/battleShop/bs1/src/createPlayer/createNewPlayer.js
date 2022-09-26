import gameboard from '../createBoard';

function player() {
  let placedShips = 0;
  let gameboardPlayer = gameboard();

  let placeShips = function (x, y, length) {
    if (placedShips > 4) return;
    gameboardPlayer.placeShip(x, y, length);
  };
  return { placeShips, gameboardPlayer, placedShips };
}

export default player;
