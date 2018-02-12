function matgen (x, y) {
  let matrix = [[]];
  for (let j = 0; j < x; j++) {
    matrix[j] = [];
    for (let i = 0; i < y; i++) {
      matrix[j][i] = 0;
    }
  }
  return matrix;
}

function rajz (tomb) {
  for (let i = 0; i < tomb.length; i++) {
    let row = '';
    for (let j = 0; j < tomb.length; j++) {
      row += tomb[i][j] + ' ';
    }
    console.log(row);
  }
}

/* function csere (tomb, y, x, change) {
  tomb[y][x] = change;
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (tomb[i][j] !== 'X') {
        tomb[i][j] += 1;
      }
    }
  }
  return tomb;
} */

function medium () {
  let easy = matgen(16, 16);
  for (let i = 0; i < 40; i++) {
    let y = Math.floor((Math.random() * 16));
    let x = Math.floor((Math.random() * 16));
    if (easy[y][x] !== 'X') {
      easy[y][x] = 'X';
      switch (y) {
        case 0:
          for (let i = y; i <= y + 1; i++) {
            for (let j = x - 1; j <= x + 1; j++) {
              if (easy[i][j] !== 'X') {
                easy[i][j] += 1;
              }
            }
          }
          break;
        case 15:
          for (let i = y - 1; i <= y; i++) {
            for (let j = x - 1; j <= x + 1; j++) {
              if (easy[i][j] !== 'X') {
                easy[i][j] += 1;
              }
            }
          }
          break;
        default:
          for (let i = y - 1; i <= y + 1; i++) {
            for (let j = x - 1; j <= x + 1; j++) {
              if (easy[i][j] !== 'X') {
                easy[i][j] += 1;
              }
            }
          }
          break;
      }
    } else {
      i--;
    }
  }
  return easy;
}
rajz(medium());
