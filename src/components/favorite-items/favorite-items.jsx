import React from "react";
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import {VARIANT_CARD_CLASS} from '../../const.js';

const FavoriteItems = (props) => {
  const {favoriteOffers} = props;

  const cityFavorite = favoriteOffers.map((offer) => offer.city.name);
  const uniqueCityName = new Set(cityFavorite);

  return (
    <ul className="favorites__list">
      {uniqueCityName.map((city, index) => {
        const favoriteOffersInCity = favoriteOffers.filter((offer) => offer.city.name === city);

        return (
          <li className="favorites__locations-items" key = {`${city} ${index}`}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span> {city} </span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favoriteOffersInCity.map((favoriteOffer) => {
                return <PlaceCard offer = {favoriteOffer} variant = {VARIANT_CARD_CLASS.favorite} key = {`${favoriteOffers.id} ${favoriteOffers.photos} `}/>;
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

FavoriteItems.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }),
    previewPhoto: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    countDedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    infoOwner: {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    },
    coords: {
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    },
  })),
};

export default FavoriteItems;
