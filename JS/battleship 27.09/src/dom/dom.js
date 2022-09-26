function createDom(game) {
  const playerDiv = document.getElementById('player');
  const pcDiv = document.getElementById('pc');

  let playerBoard = game.playerOne.gameBoardPlayer.gameBoard;
  let pcBoard = game.pc.gameBoardPlayer.gameBoard;
  playerDiv.innerHTML = '';
  pcDiv.innerHTML = '';
  playerBoard.forEach((row, index) => {
    row.forEach((cell, index2) => {
      let cellDiv = document.createElement('div');

      cellDiv.className = 'cellDiv';
      cellDiv.innerText = cell;
      playerDiv.appendChild(cellDiv);
      cellDiv.addEventListener('click', function () {
        game.pc.gameBoardPlayer.receiveAttack(index2, index);

        createDom(game);
      });
    });
  });

  pcBoard.forEach((row, index) => {
    row.forEach((cell, index2) => {
      let cellDiv = document.createElement('div');

      cellDiv.className = 'cellDiv';
      cellDiv.innerText = cell;
      pcDiv.appendChild(cellDiv);
      cellDiv.addEventListener('click', function () {
        game.playerOne.gameBoardPlayer.receiveAttack(index2, index);
        createDom(game);
      });
    });
  });
}

export default createDom;
