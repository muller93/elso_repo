function kivalogatas (innenTomb) {
  let i = 0;
  let j = 0;
  let ideTomb = [];
  for (i; i < innenTomb.length; i++) {
    if ((innenTomb[i] % 2) === 0) {
      ideTomb[j] = innenTomb[i];
      j += i;
    }
  }
  return ideTomb;
}
let innenTomb2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(kivalogatas(innenTomb2));
