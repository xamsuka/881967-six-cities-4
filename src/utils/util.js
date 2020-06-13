const getRandomNumber = (min = 0, max = 10) => {
  return Math.floor(Math.random(min) * max);
};

export {getRandomNumber};
