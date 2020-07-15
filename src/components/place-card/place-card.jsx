import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {VARIANT_CARD_CLASS} from '../../const.js';

const PlaceCard = (props) => {
  const {place, onMouseOver, variant} = props;
  const currentClass = VARIANT_CARD_CLASS[variant] || `cities__place-card`;
  const {id, photos, isPremium, type, isFavorite, price} = place;

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
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `100%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
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
    infoOwner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired
  }).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.keys(VARIANT_CARD_CLASS)).isRequired,
};

export default PlaceCard;
