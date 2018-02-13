const matrix = (a, b) => {
  let result = [];
  let i;
  for (i = 0; i < b; i++) {
    result.push(new Array(a).fill(0));
  }
  return result;
};
var array = (matrix(20, 20));
// console.log(array);
const changeChar = (array, a, b, char) => {
  array[a][b] = char;
  return array;
};
const drawMatrix = (array) => {
  for (let i = 0; i < array.length; i++) {
    let row = '';
    for (let j = 0; j < array[i].length; j++) {
      row += array[i][j] + ' ';
    }
    console.log(row);
  }
};
changeChar(array, 18, 17, 'X');
changeChar(array, 7, 3, 'X');
changeChar(array, 5, 5, 'X');
drawMatrix(array);

/*
function matrix2 (m) {
  for (let i = 0; i < 20; i++) {
    let row = ' ';
    for (let j = 0; j < 20; j++) {
      row += (m) + ' ';
    }
    console.log(row);
  }
}
matrix2('O');

function matrix (m) {
  for (let i = 0; i < m.length; i++) {
    let row = '';
    for (let j = 0; j < m[i].length; j++) {
      row += m[i][j] + ' ';
    }
    console.log(row);
  }
}
matrix(tomb1);

const change = (tomb1, x, y, char) => {
  tomb1[x][y] = char;
  return tomb1;
};
change(tomb1, 3, 5, 2);
*/