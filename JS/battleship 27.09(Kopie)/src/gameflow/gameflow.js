import playerFactory from '../player/playerFactory';
import createDom from '../dom/dom';

function game() {
  let playerOne = playerFactory();
  let pc = playerFactory();

  for(let i=0;i<3;i++){
    
  }

  function placeShips() {
    playerOne.gameBoardPlayer.placeShip(3, 2, 4);
    playerOne.gameBoardPlayer.placeShip(4, 3, 3);
    playerOne.gameBoardPlayer.placeShip(6, 5, 1);

    pc.gameBoardPlayer.placeShip(2, 3, 3);
    pc.gameBoardPlayer.placeShip(6, 4, 3);
    pc.gameBoardPlayer.placeShip(1, 1, 3);
  }

  let attack = (x, y, playerBoardToAttack) => {
    console.log(playerBoardToAttack);
    playerBoardToAttack.receiveAttack(x, y);
  };

  let randomCoordsXandY = () => {
    let randomCoordsY = Math.floor(
      Math.random() * playerOne.gameBoardPlayer.gameBoard.length
    );

    let randomCoordsX = Math.floor(
      Math.random() * playerOne.gameBoardPlayer.gameBoard[0].length
    );

    return { randomCoordsY, randomCoordsX };
  };

  function attackPlayer() {
    let { randomCoordsY, randomCoordsX } = randomCoordsXandY();
    for (let i = 0; i < playerOne.gameBoardPlayer.ships.length; i++) {
      if (playerOne.gameBoardPlayer.ships[i].coords.y == randomCoordsY) {
        for (
          let j = 0;
          j < playerOne.gameBoardPlayer.ships[i].coords.x.xHit.length;
          j++
        ) {
          if (
            playerOne.gameBoardPlayer.ships[i].coords.x.xHit[j] == randomCoordsX
          ) {
            attackPlayer();
          }
        }
      }

      if (playerOne.gameBoardPlayer.ships[i].coords.y == randomCoordsY) {
        for (
          let j = 0;
          j < playerOne.gameBoardPlayer.ships[i].coords.x.xCoords.length;
          j++
        ) {
          if (
            playerOne.gameBoardPlayer.ships[i].coords.x.xCoords[j] ==
            randomCoordsX
          ) {
            return attack(
              randomCoordsX,
              randomCoordsY,
              playerOne.gameBoardPlayer
            );
          }
        }
      }
    }
    attackPlayer();
  }
  placeShips();

  return { playerOne, pc, attackPlayer };
}

export default game;
