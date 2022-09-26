import createShip from './shipfactory/shipfactory';
import gameBoard from './gameBoard/gameboard';
import game from './gameflow/gameflow';
import createDom from './dom/dom';

let play = game();
createDom(play);
