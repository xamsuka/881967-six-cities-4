import {MOUNTH} from '../const.js';

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

const dateAdapter = (dateRAW) => {
  const date = new Date(dateRAW);
  const year = date.getFullYear();
  const mount = MOUNTH[date.getMonth()];

  return `${mount} ${year}`;
};


export {getRandomNumber, extend, getCityLocation, dateAdapter};
