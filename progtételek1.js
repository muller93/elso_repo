let array = [5, 4, 6, 8, 2];
function osszeg (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[0];
  }
  console.log(sum);
}
osszeg(array);

// ugyanez
let osszeg2 = 0;
let tomb = [5, 4, 6, 8, 2];
for (let i = 0; i < tomb.length; i++) {
  osszeg2 += tomb[i];
}
console.log(osszeg2);
