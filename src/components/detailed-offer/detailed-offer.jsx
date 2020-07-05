import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import PropertyGallary from '../property-gallary/property-gallary.jsx';
import Reviews from '../reviews/reviews.jsx';
import Map from '../map/map.jsx';
import PlaceCard from '../place-card/place-card.jsx';
import {reviews} from '../../index.js';


class DetailedOffer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {place, otherPlaces} = this.props;
    const {photos, title, description, isPremium, type, rating, countDedrooms, maxGuests, isFavorite, price, features, infoOwner} = place;
    const {avatar: ownerAvatar, name: ownerName, isSuper} = infoOwner || {};

    const placeCardsNear = otherPlaces.map((placeNear) => {
      return <PlaceCard place={placeNear} onMouseOver={this._overMouseCardHandler} key={`${placeNear.id} ${placeNear.description}`} variant = {`near`} />;
    });

    const favoriteClass = isFavorite ? `property__bookmark-button--active` : ``;

    return (
      <main className="page__main page__main--property">
        <section className="property">

          <PropertyGallary photos = {photos} />

          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark"><span>Premium</span></div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button ${favoriteClass} button`}
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `80%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {countDedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxGuests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What s inside</h2>
                <ul className="property__inside-list">

                  {features.map((feature, index) => {
                    return <li className="property__inside-item" key={`${feature} ${index}`}>{feature}</li>;
                  })}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`roperty__avatar-wrapper ${isSuper ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`} >
                    <img
                      className="property__avatar user__avatar"
                      src={ownerAvatar}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{ownerName}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <Reviews reviews = {reviews} />

            </div>
          </div>
          <section className="property__map map">
            <Map pins = {[]} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {placeCardsNear}
            </div>
          </section>
        </div>
      </main>
    );
  }
}

DetailedOffer.propTypes = {
  otherPlaces: PropTypes.arrayOf(PropTypes.shape({
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
  }).isRequired).isRequired,
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
};

export default DetailedOffer;
