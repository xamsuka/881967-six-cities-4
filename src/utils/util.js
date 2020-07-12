const getRandomNumber = (min = 0, max = 10) => {
  return Math.floor(Math.random(min) * max);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getRandomNumber, extend};
