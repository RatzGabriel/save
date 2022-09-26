import gameBoard from '../board/board';

function player() {
  let placedShips = 0;
  let board = gameBoard();

  let attack = (board, x, y) => {
    board.receiveAttack(x, y);
  };

  return { placedShips, board, attack };
}

export default player;
