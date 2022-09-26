function createShip(x, y, length) {
  let shiplength = length;
  let tp = 0;
  let coords = {
    x: [
      {
        x,
        hit: false,
      },
    ],
    y: y,
  };

  let hit = (x, y) => {
    for (let i = 0; i < coords.x.length; i++) {
      if (coords.x[i] === x) {
        if (coords.x[i] == 'hit') return alert('already a hit,try again');
        //insert missing logic
        coords.x[i] = 'hit';
        tp += 1;
        return true;
      }
    }
  };
  for (let i = x; i < x + length; i++) {
    coords.x.push(i);
  }
  let isSunk = () => {
    return tp === shiplength ? true : false;
  };
  return { shiplength, tp, coords, hit, isSunk };
}

export default createShip;
