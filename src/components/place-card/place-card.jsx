import React from "react";
import PropTypes from 'prop-types';
import {Link, BrowserRouter} from 'react-router-dom';
import ReviewsRating from '../reviews-rating/reviews-rating.jsx';
import {VARIANT_CARD_CLASS, VARIANT_RATING_CLASS} from '../../const.js';

const PlaceCard = (props) => {
  const {offer, onMouseOver, variant} = props;
  const currentClass = VARIANT_CARD_CLASS[variant] || `cities__place-card`;
  const {id, photos, isPremium, type, rating, isFavorite, price} = offer;

  const srcPhotosPriview = photos[0];
  const favoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;

  return (
    <article className= {`${currentClass} place-card`} onMouseOver={onMouseOver} data-id={id}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className="place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={srcPhotosPriview}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${favoriteClass} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <ReviewsRating rating = {rating} variant = {VARIANT_RATING_CLASS.reviews} />

        <h2 className="place-card__name">
          <BrowserRouter>
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </BrowserRouter>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
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
  }).isRequired,
  onMouseOver: PropTypes.func,
  variant: PropTypes.oneOf(Object.keys(VARIANT_CARD_CLASS)).isRequired,
};

export default PlaceCard;
