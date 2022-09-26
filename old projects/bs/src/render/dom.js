const renderBoard = (player, enemy) => {
  const playerDiv = document.getElementById('player');
  const pcDiv = document.getElementById('pc');
  playerDiv.innerHTML = '';
  pcDiv.innerHTML = '';

  let board = player.board.board;
  let enemyBoard = enemy.board.board;

  console.log(board, enemyBoard);

  render(playerDiv, board);
  render(pcDiv, enemyBoard);

  function render(container, board) {
    board.forEach((row, index) => {
      row.forEach((cell, index2) => {
        let cellDiv = document.createElement('div');
        cellDiv.className = 'cellDiv';
        cellDiv.innerText = cell;
        cellDiv.addEventListener('click', function () {
          console.log(index2, index, enemy.board);
          if (enemy.board.receiveAttack(index, index2) === true) {
            console.log('do it');
            enemy.board.board[index][index2] = 'hit';
            renderBoard(player, enemy);
          }
        });

        container.appendChild(cellDiv);
      });
    });
  }
};

export default renderBoard;
