function addBorder(picture: string[]): string[] {
  const frameLength = picture[0].length + 2;
  let topbot: string = '';
  for (let index = 0; index < frameLength; index++) {
    topbot += '*';
  }
  const sideframe = picture.map(frame);
  sideframe.push(topbot);
  sideframe.unshift(topbot);
  return sideframe;
}

const frame = pic => {
  const arr = pic.split('');
  arr.push('*');
  arr.unshift('*');
  return arr.join('');
};

console.log(addBorder(['abv', 'ljj']));
