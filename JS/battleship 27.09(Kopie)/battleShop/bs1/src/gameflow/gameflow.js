import player from '../createPlayer/createNewPlayer.js';
import renderBoard from '../dom/render.js';

function game() {
  let playerOne = player();
  let pc = player();
  const playerDiv = document.getElementById('player');
  const pcDiv = document.getElementById('pc');

  function placeShips() {
    playerOne.gameboardPlayer.placeShip(2, 3, 3);
    playerOne.gameboardPlayer.placeShip(2, 4, 3);
    playerOne.gameboardPlayer.placeShip(2, 6, 3);

    pc.gameboardPlayer.placeShip(3, 2, 3);
    pc.gameboardPlayer.placeShip(4, 6, 3);
    pc.gameboardPlayer.placeShip(1, 1, 3);
  }
  placeShips();

  function randomAttack() {
    let randomCoordsX = Math.floor(
      Math.random() * playerOne.gameboardPlayer.board.length
    );
    let randomCoordsY = Math.floor(
      Math.random() * playerOne.gameboardPlayer.board[0].length
    );
    for (let i = 0; i < playerOne.gameboardPlayer.ships.length; i++) {
      for (
        let i = 0;
        i < playerOne.gameboardPlayer.ships[i].coords.x.length;
        i++
      ) {
        if (playerOne.gameboardPlayer.ships[i].coords.x[i] == randomCoordsX) {
          if (playerOne.gameboardPlayer.ships[i].coords.y == randomCoordsY) {
            validateAttack();
          }
        } else {
          playerOne.gameboardPlayer.receiveAttack(randomCoordsX, randomCoordsY);
          return;
        }
      }
    }
  }
  let validateAttack = () => {
    if (pc.gameboardPlayer.checkShunkShips === true) return alert('player won');
  };
  renderBoard(pcDiv, playerDiv, pc, playerOne);
  renderBoard(playerDiv, pcDiv, playerOne, pc);

  return { playerOne, pc, randomAttack };
}

export default game;
