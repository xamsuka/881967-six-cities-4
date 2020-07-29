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

const reviewAdapter = (review) => ({
  comment: review[`comment`],
  date: review[`date`],
  id: review[`id`],
  rating: review[`rating`],
  user: {
    avatarUrl: review[`user`][`avatar_url`],
    id: review[`user`][`id`],
    isPro: review[`user`][`is_pro`],
    name: review[`user`][`name`],
  }
});

const reviewsAdapter = (reviews) => {
  return reviews.map((review) => reviewAdapter(review));
};

export {hotelAdapter, hotelsAdapter, userAdapter, reviewAdapter, reviewsAdapter};
