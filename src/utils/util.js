const getRandomNumber = (min = 0, max = 10) => {
  return Math.floor(Math.random(min) * max);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getCityLocation = (offer) => {
  if (offer) {
    const {latitude, longitude} = offer.city.location;
    return Array.of(latitude, longitude);
  }

  return [];
};

export {getRandomNumber, extend, getCityLocation};
