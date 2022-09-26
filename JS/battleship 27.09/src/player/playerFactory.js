import gameBoard from '../gameBoard/gameboard';

function playerFactory() {
  let placedShips = 0;
  let gameBoardPlayer = gameBoard();
  let placeShips = (x, y, length) => {
    if (placedShips > 4) return alert('Too many Ships placed');
    gameBoardPlayer.placeShip(x, y, length);
  };
  return { placeShips, placedShips, gameBoardPlayer };
}

export default playerFactory;
