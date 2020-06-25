import {getRandomNumber} from '../utils/util.js';

const TYPE_HOUSE = [`Apartment`, `Room`, `House`, `Hotel`];
const CITYES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const PHOTOS = [
  `https://i.pinimg.com/originals/43/72/2c/43722ce8f9f3d043bd1fdb9a93436e3b.jpg`,
  `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUagHomIn76xjoBb_dGpeEvvXI-pvcKxozJ-cmEbaHqC9hU4eA&usqp=CAU`,
  `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV22mmWrOwW8-T1ORaRG2cGkkS22IPaprjaaLULcFo1dDL7n7Z&usqp=CAU`,
  `https://i.pinimg.com/736x/1f/3d/c3/1f3dc32a7b341f7d6dec2c4662b2bada.jpg`,
  `https://canadskaya-izba.ru/img/doma/karkas2.jpg`,
  `https://tipdoma.com/wp-content/uploads/2019/06/info1.png`,
  `https://krov-torg.ru/wp-content/uploads/2018/03/64-1024x679.jpg`,
];
const TITLE = [`Очень красивый и уютный дом`, `Обычный дом на ночь`, `Элитный дом, денег точно не хватит`, `Стандартные аппартаменты на 2-4 человека`, `Дешёвая комната на ночь`, `Люкс котедж`];
const FEATURES = [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Baby seat`];

export const countPlaces = getRandomNumber(0, 500);

const generateOffer = (index) => {
  return {
    id: index,
    city: CITYES[getRandomNumber(0, CITYES.length)],
    photos: [PHOTOS[getRandomNumber(0, PHOTOS.length)]],
    title: TITLE[getRandomNumber(0, TITLE.length)],
    description: `Описание у всех одинаковое, потому что лень придумывать.`,
    isPremium: Boolean(getRandomNumber(0, 1)),
    isFavorite: Boolean(getRandomNumber(0, 1)),
    type: TYPE_HOUSE[getRandomNumber(0, TYPE_HOUSE.length)],
    rating: getRandomNumber(0, 5),
    countDedrooms: getRandomNumber(0, 6),
    maxGuests: getRandomNumber(0, 5),
    price: getRandomNumber(20, 1500),
    features: FEATURES.slice().slice(0, getRandomNumber(1, FEATURES.length)),
    infoOwner: {
      avatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      name: `Vladimir`,
      isSuper: Boolean(getRandomNumber(0, 1))
    }
  };
};

const generateOffers = (count) => {
  return new Array(count).fill(``).map((value, index) => generateOffer(index));
};

export {generateOffers};
