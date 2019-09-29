function largestNumber(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str = str.concat('9');
  }
  return parseInt(str);
}

console.log(largestNumber(8));
