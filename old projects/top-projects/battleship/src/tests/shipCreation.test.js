import createShip from '../createShip';

describe('create Ship', () => {
  test('isSunk method', () => {
    const ship = new createShip(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
