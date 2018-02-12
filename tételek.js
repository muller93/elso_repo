let array = [1, 8, 4, 7, 3];
let i = 0;
let ker = 5;
while (i < array.length && array[i] !== ker) {
  i += 1;
}
if (i < array.length) {
  console.log('Van ilyen');
}
else {
  console.log('Nincs ilyen');
}
