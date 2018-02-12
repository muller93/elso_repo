let i = 0;
let keresett = 7;
let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
while (i < tomb.length && tomb[i] !== keresett) {
  i += 1;
}
if (i < tomb.length) {
  console.log('Van ilyen, a ', i + 1, '.elem');
} else {
  console.log('nincs ilyen');
}
