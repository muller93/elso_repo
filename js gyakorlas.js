// függvényel műveletek
function muveletek (a, b, c, d) {
  return (a + b - c) / d;
}

console.log(muveletek(4, 5, 3, 2));
console.log(muveletek(2, 7, 5, 3));
console.log(muveletek(14, 15, 4, 4));
console.log(muveletek(12, 7, 13, 2));
console.log(muveletek(9, 6, 2, 5));

// függvénnyel, személyi adatok kiírása
function name (firstName, lastName, age) {
  return firstName + ' ' + lastName + ' most ' + age + ' éves';
}
console.log(name('Ferenc', 'Fábian', 11));
console.log(name('Norbert', 'Müller', 25));
console.log(name('Bálint', 'László', 30));
console.log(name('Ádám', 'Frank', 8));
console.log(name('Ervin', 'Nagy', 55));

// számoláló for pl.: 10-15ig;
function szamok (n, num) {
  for (let i = n; i < n + num; i++) {
    console.log(i);
  }
}
szamok(6, 8);
szamok(10, 5);

// számláló while
function numbers (n, num) {
  let condition = n + num;
  while (n < condition) {
    console.log(n);
    n++;
  }
}
numbers(5, 10);

// mátrix
var tomb1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var tomb2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 'a', 'b', 'c'], ['d', 'e', 'f', 'g']];
var tomb3 = [[1, 2], [3, 4], [5, 6], [7, 8]];
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
matrix(tomb2);
matrix(tomb3);

// hasonló
var array = ['alma', 'körte', 'barack', 'szilva'];
let row = '';
function gyumolcs (l) {
  for (let i = 0; i < l.length; i++) {
    row += l[i] + ' ';
  }
  console.log(row);
}
gyumolcs(array);
