let szamlalo = 0;
let array = [4, 8, 7, 5, 2];

for(i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
    szamlalo += 1;
    }
}
console.log(szamlalo);