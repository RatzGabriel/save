function createShip(length, x, y) {
  let hits = 0;
  let hit = (position) => {
    hits += 1;
  };

  let isSunk = () => {
    if (hits === length) return true;
    else return false;
  };
  return { hit, isSunk };
}

export default createShip;
