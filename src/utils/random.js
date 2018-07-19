export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomNumber = (length) => {
  try {
    // browser
    return crypto.getRandomValues(new Uint32Array(length))
  } catch (e) {
    const list = [];
    for (let i = 0; i < length; i++) {
      list.push(Math.random().toString().substring(3, 13));
    }
    return list;
  }
};

export const randomLetter = (length = 10) => {
  const str = 'abcdefghigklmnopqrstuvwxyz';
  let letters = '';
  for (let i = 0; i < length; i++) {
    letters += str[random(0, 25)];
  }
  return letters;
};
