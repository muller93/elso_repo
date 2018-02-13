function reggeli () {
  tf();
  sh();
  sb();
  ta();

  function tf () {
    console.log('Tojás felverés');
  }    
  function sh () {
    console.log('Só hozzáadása');
  }
  function sb () {
    console.log('Sütő begyújtása');
  }
  function ta () {
    console.log('Tálalás');
  }
}
reggeli(); // miért kapok undefinedot?

let laptopok = ['Acer', 'Asus', 'HP', 'Lenovo', 'Samsung', 'Fujitsu']; // miért marad ki az acer a kiíratásnál?
let parameter = ['Processzor', 'Memória', 'VGA', 'Háttértár'];

let i = -1; // i = -1nél kiírja az acert is

while (i < 5) { // do{
// j++;
// if (j == parameter.lenght);

  i++;
  if (i === laptopok.lenght);
  console.log(laptopok[i]);
// while (
// console.log(parameter[j])
}
// }