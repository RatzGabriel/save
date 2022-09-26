let p1 = 0;
let p2 = 0;

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return 'rock';
  if (randomNumber === 1) return 'paper';
  if (randomNumber === 2) return 'scissor';
};

const singleRound = (playerSelection, computerSelection) => {
  if (p1 + p2 === 5) {
    return p1 > p2 ? console.log('You win') : console.log('Comp Wins');
  }
  if (playerSelection === computerSelection) {
    p1 += 1;
    p2 += 1;
  }
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      if (computerSelection === 'paper') return (p2 += 1);
      if (computerSelection === 'scissor') return (p1 += 1);
    case 'paper':
      if (computerSelection === 'rock') return (p1 += 1);
      if (computerSelection === 'scissor') return (p2 += 1);
    case 'scissor':
      if (computerSelection === 'rock') return (p1 += 1);
      if (computerSelection === 'scissor') return (p2 += 1);
    default:
      return;
  }
};

const game = () => {
  const getMain = document.querySelector('#main');
  const inputField = document.createElement('input');
  getMain.appendChild(inputField);

  for (let i = 0; i < 5; i++)
    singleRound('enter rock paper or scissor', computerPlay());
};

game();
