const MOUNTH = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const ONE_STAR = 20;

const VARIANT_CARD = {
  CITIES: `CITIES`,
  NEAR: `NEAR`,
  FAVORITE: `FAVORITE`,
};

const VARIANT_RATING_CLASS = {
  reviews: `reviews__rating`,
  placeCard: `place-card__rating`,
  property: `property__rating`,
};

const SortTypes = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGHT: `Price: low to high`,
  PRICE_HIGHT_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

const AuthorizationStatus = {
  USER_AUTH: `USER_AUTH`,
  USER_NOAUTH: `USER_NOAUTH`,
};

export {CITIES, ONE_STAR,
  VARIANT_CARD,
  VARIANT_RATING_CLASS,
  SortTypes,
  AuthorizationStatus,
  MOUNTH,
};
