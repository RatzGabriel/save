import createShip from '../shipfactory/shipfactory';

let shipFactory = createShip;

test('shipFactory', () => {
  let createShip = shipFactory(2, 3, 3);
  expect(createShip.isSunk()).toBe(false);
});
