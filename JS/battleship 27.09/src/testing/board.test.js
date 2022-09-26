import gameBoard from '../gameBoard/gameboard';
import playerFactory from '../player/playerFactory';
import game from '../gameflow/gameflow';

let templateBoard1 = [
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
];

let templateBoard2 = [
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', 'Ship', '', '', '', '', '', '', ''],
  ['', '', 'Ship', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
];

let templateBoard3 = [
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', 'Ship', '', '', '', '', '', '', ''],
  ['', '', 'Ship', '', '', '', '', '', '', ''],
  ['', '', 'Ship', '', '', '', '', '', '', ''],
  ['', '', 'Ship', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
];

let templateBoard4 = [
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', 'Ship', 'Ship', '', 'Ship', '', '', ''],
  ['', '', '', 'Ship', 'Ship', '', 'Ship', '', '', ''],
  ['', '', '', 'Ship', '', '', 'Ship', '', '', ''],
  ['', '', '', 'Ship', '', '', 'Ship', '', '', ''],
  ['', '', '', '', '', '', 'Ship', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
];

let templateBoard5 = [
  ['', '', '', '', '', '', '', '', '', ''],
  ['', 'Ship', '', '', '', '', '', '', '', ''],
  ['', 'Ship', '', '', '', '', '', '', '', ''],
  ['', 'Ship', 'Ship', '', '', '', '', '', '', ''],
  ['', '', 'Ship', '', '', '', 'Ship', '', '', ''],
  ['', '', 'Ship', '', '', '', 'Ship', '', '', ''],
  ['', '', '', '', '', '', 'Ship', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
];

describe('Gameboard tests', () => {
  test('create empty board', () => {
    let newBoard = gameBoard();
    expect(newBoard.gameBoard).toEqual(templateBoard1);
  });
  test('gameboard place small Ship', () => {
    expect(gameBoard().placeShip(2, 3, 2)).toEqual(templateBoard2);
  });
  test('pass impossible coords', () => {
    let player = playerFactory();

    expect(player.gameBoardPlayer.placeShip(11, 2, 4)).toEqual(false);
  });
  test('create test 2p board ', () => {
    let gameNew = game();
    gameNew.playerOne.gameBoardPlayer.placeShip(3, 2, 4);
    gameNew.playerOne.gameBoardPlayer.placeShip(4, 2, 2);
    gameNew.playerOne.gameBoardPlayer.placeShip(6, 2, 5);

    gameNew.pc.gameBoardPlayer.placeShip(2, 3, 3);
    gameNew.pc.gameBoardPlayer.placeShip(6, 4, 3);
    gameNew.pc.gameBoardPlayer.placeShip(1, 1, 3);
    expect(gameNew.playerOne.gameBoardPlayer.gameBoard).toEqual(templateBoard4);
    expect(gameNew.pc.gameBoardPlayer.gameBoard).toEqual(templateBoard5);
  });
});
