const renderBoard = (container, enemycontainer, player, enemy) => {
  let board = player.gameboardPlayer.board;
  container.innerHtml = '';

  board.forEach((row, index) => {
    row.forEach((cell, index2) => {
      let cellDiv = document.createElement('div');
      cellDiv.className = 'cellDiv';
      cellDiv.innerText = cell;
      cellDiv.addEventListener('click', function () {
        enemy.gameboardPlayer.receiveAttack(
          index,
          index2,
          enemy.gameboardPlayer.board
        );
        container.innerText = '';
        enemycontainer.innerText = '';
        renderBoard(enemycontainer, enemy, player);
        renderBoard(container, player, enemy);
      });

      container.appendChild(cellDiv);
    });
  });
};

export default renderBoard;
