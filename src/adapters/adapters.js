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
const TITLES = [`Очень красивый и уютный дом`, `Обычный дом на ночь`, `Элитный дом, денег точно не хватит`, `Стандартные аппартаменты на 2-4 человека`, `Дешёвая комната на ночь`, `Люкс котедж`];
const FEATURES = [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Baby seat`];

const NAME_USERS = [`Max`, `Nix`, `Oleg`, `Vladimir`, `Georg`, `Artur`, `Vlad`];

const generateOffer = (index) => {
  return {
    id: index,
    city: CITYES[getRandomNumber(0, CITYES.length)],
    photos: [PHOTOS[getRandomNumber(0, PHOTOS.length)]],
    title: TITLES[getRandomNumber(0, TITLES.length)],
    description: `Описание у всех одинаковое, потому что лень придумывать.`,
    isPremium: Boolean(getRandomNumber(0, 1)),
    isFavorite: Boolean(getRandomNumber(0, 1)),
    type: TYPE_HOUSE[getRandomNumber(0, TYPE_HOUSE.length)],
    rating: getRandomNumber(1, 5),
    countDedrooms: getRandomNumber(0, 6),
    maxGuests: getRandomNumber(0, 5),
    price: getRandomNumber(20, 1500),
    features: FEATURES.slice().slice(0, getRandomNumber(1, FEATURES.length)),
    infoOwner: {
      avatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      name: `Vladimir`,
      isSuper: Boolean(getRandomNumber(0, 1))
    },
    coords: [52.3909553943508 + getRandomNumber(1, 25), 4.85309666406198 + getRandomNumber(1, 20)],
  };
};

const generateReview = (index) => {
  return {
    id: index,
    user: {
      id: index,
      userAvatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      userName: NAME_USERS[getRandomNumber(0, NAME_USERS.length)],
    },
    rating: getRandomNumber(1, 5) + 1,
    text: `Всё очень круть!`,
    date: `April 2020`,
  };
};

const generateOffers = (count) => {
  return new Array(count).fill(``).map((value, index) => generateOffer(index));
};

const generateReviews = (count) => {
  return new Array(count).fill(``).map((value, index) => generateReview(index));
};

const offers = generateOffers(10);
const reviews = generateReviews(10);

const hotelsAdapter = (offers) => {
  const offersAdaptive = offers.map((offer) => ({
    id: offer[`id`],
    city: offer[`city`],
    previewPhoto: offer[`preview_image`],
    photos: offer[`images`],
    title: offer[`title`],
    description: offer[`description`],
    isPremium: offer[`is_premium`],
    isFavorite: offer[`is_favorite`],
    type: offer[`type`],
    rating: offer[`rating`],
    countDedrooms: offer[`bedrooms`],
    maxGuests: offer[`max_adults`],
    price: offer[`price`],
    features: offer[`goods`],
    infoOwner: {
      id: offer[`host`][`id`],
      name: offer[`host`][`name`],
      avatar: offer[`host`][`avatar_url`],
      isPro: offer[`host`][`is_pro`],
    },
    coords: offer[`location`],
  }));

  return offersAdaptive;
};

export {offers, reviews, hotelsAdapter};




// {
//   "bedrooms": 3,
//   "city": {
//     "location": {
//       "latitude": 52.370216,
//       "longitude": 4.895168,
//       "zoom": 10
//     },
//     "name": "Amsterdam"
//   },
//   "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
//   "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
//   "host": {
//     "avatar_url": "img/1.png",
//     "id": 3,
//     "is_pro": true,
//     "name": "Angelina"
//   },
//   "id": 1,
//   "images": ["img/1.png", "img/2.png"],
//   "is_favorite": false,
//   "is_premium": false,
//   "location": {
//     "latitude": 52.35514938496378,
//     "longitude": 4.673877537499948,
//     "zoom": 8
//   },
//   "max_adults": 4,
//   "preview_image": "img/1.png",
//   "price": 120,
//   "rating": 4.8,
//   "title": "Beautiful & luxurious studio at great location",
//   "type": "apartment"
// }
