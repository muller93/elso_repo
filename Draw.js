var tomb1 = [
['|', ' ', ' ', ' ', ' ', ' ', '\\', '|', '/', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', ' ', '–', '–', '–', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
['|', ' ', ' ', ' ', ' ', '|', '●', ' ', '●', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', '|', ' ', '║', ' ', '|', ' ', '|', '|', '|', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', '|', '(', '–', ')', '|', ' ', '|', '|', '|', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', ' ', '–', '–', '–', ' ', ' ', '–', '–', '–', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', '–', '–', '|', '–', '–', '–', '–', '–', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', ' ', '/o', 'o', '\\', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', ' ', ' /', '', '|', ' ', '\\', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', ' ', '  /', ' ', ' ', '', '', '', '\\', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', ' ', '   /', ' ', ' ', '', '', '', '', '', '\\', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
['|', ' ', '    /', ' ', ' ', '', '', '', '', '', '', '', '\\', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];
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