// assorment
let fromArray = [-4, -5, -9, 25, 2, 7, 6];
function assorment (fromArray) {
  let j = 0;
  let k = 0;
  let toArray = [];
  let toArray2 = [];
  for (let i = 0; i < fromArray.length; i++) {
    if (fromArray[i] >= 0) {
      toArray[j] = fromArray[i];
      j++;
    } else {
      toArray2[k] = fromArray[i];
      k++;
    }
  }
  return [toArray, toArray2];
}
console.log(assorment(fromArray));
