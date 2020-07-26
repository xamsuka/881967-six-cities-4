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

const userAdapter = (userData) => ({
  id: userData[`id`],
  name: userData[`name`],
  email: userData[`email`],
  avatarUrl: userData[`avatar_url`],
  isProp: userData[`is_pro`],
});

export {hotelsAdapter, userAdapter};




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
