function createShip(x, y, length) {
  let shipLength = length;
  let hp = 0;
  let coords = {
    y: {
      yCoords: [],
      yHit: [],
    },
    x,
  };

  for (let i = y; i < y + length; i++) {
    coords.y.yCoords.push(i);
  }

  let hit = (x, y) => {
    if (coords.y.yCoords.some((ele) => ele == y) && x == coords.x) {
      if (coords.y.yCoords == true) return alert('already a hit ,try again');
      coords.y.yHit.push(y);
      hp += 1;
    }
  };

  let isSunk = () => {
    console.log(hp, length);
    return hp >= length ? true : false;
  };

  return { shipLength, hp, coords, hit, isSunk };
}

export default createShip;
