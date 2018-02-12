// Elndöntés

let elemek = [64, 46, 2, 842, 6, 8, 7, 5];
let ker = 5;
let i = 0;
while (i < elemek.length && elemek[i] !== ker) {
  i++;
}
if (i < elemek.length) {
  console.log('Van ilyen érték.');
} else {
  console.log('Nincs ilyen érték.');
}
