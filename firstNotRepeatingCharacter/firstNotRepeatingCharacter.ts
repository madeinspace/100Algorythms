function firstNotRepeatingCharacter(s: string): any[] {
  const length = s.length;
  let char;
  let charcount = {};
  let newStr = [];

  for (let i = 0; i < length; i++) {
    char = s[i];
    if (charcount[char]) {
      charcount[char]++;
    } else {
      charcount[char] = 1;
    }
  }
  for (const char in charcount) {
    if (charcount.hasOwnProperty(char)) {
      if (charcount[char] === 1) {
        newStr.push(char);
      }
    }
  }
  if (!newStr.length) {
    newStr.push('_');
  }
  return newStr;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacqabaasbacxaba'));
