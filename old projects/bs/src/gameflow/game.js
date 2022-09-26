import player from '../player/player';
import renderBoard from '../render/dom';

function game() {
  let playerOne = player();
  let pc = player();

  function placeShips() {
    playerOne.board.placeShip(2, 3, 3);
    playerOne.board.placeShip(2, 4, 3);
    playerOne.board.placeShip(2, 7, 3);

    pc.board.placeShip(2, 2, 3);
    pc.board.placeShip(6, 7, 4);
    pc.board.placeShip(4, 8, 2);

    renderBoard(playerOne, pc);
  }
  placeShips();
  return { playerOne, pc };
}

export default game();
