const hotelAdapter = (offer) => ({
  id: offer[`id`],
  city: offer[`city`],
  previewPhoto: offer[`preview_image`],
  photos: offer[`images`],
  title: offer[`title`],
  description: offer[`description`],
  isPremium: offer[`is_premium`],
  isFavorite: offer[`is_favorite`],
  type: offer[`type`],
  rating: Math.round(offer[`rating`]),
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
});

const hotelsAdapter = (offers) => {
  return offers.map((offer) => hotelAdapter(offer));
};

const userAdapter = (userData) => ({
  id: userData[`id`],
  name: userData[`name`],
  email: userData[`email`],
  avatarUrl: userData[`avatar_url`],
  isProp: userData[`is_pro`],
});

export {hotelAdapter, hotelsAdapter, userAdapter};
