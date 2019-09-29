// function adjacentElementsProduct(inputArray) {
//   var largest = -1000;
//   let current = inputArray[0];
//   for (let i = 1; i < inputArray.length; i++) {
//     if (current * inputArray[i] > largest) {
//       largest = current * inputArray[i];
//     }
//     current = inputArray[i];
//   }
//   return largest;
// }

//ALt solution
function adjacentElementsProduct(inputArray) {
  let arr = [];

  inputArray.reduce((accumulator, curr) => {
    arr.push(accumulator * curr);
    return curr;
  });

  return Math.max(...arr);
}

console.log(adjacentElementsProduct([3, 6, 2, -5, 7, 3]));
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));
