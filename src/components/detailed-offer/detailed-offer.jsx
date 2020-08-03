import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const.js';
import PropertyGallary from '../property-gallary/property-gallary.jsx';
import Reviews from '../reviews/reviews.jsx';
import ReviewsRating from '../reviews-rating/reviews-rating.jsx';
import Map from '../map/map.jsx';
import Loading from '../loading/loading.jsx';
import FeedbackForm from "../feedback-form/feedback-form.jsx";
import {getStatusLoadingOffers} from '../../reducers/application/selectors.js';
import {getCommentsOffer, getNearbyOffers} from '../../reducers/data/selectors.js';
import PlaceCardsList from '../place-cards-list/place-cards-list.jsx';
import {Operations as DataOperations} from '../../reducers/data/reducer.js';
import {getOffers} from '../../reducers/data/selectors.js';
import {getCityLocation} from '../../utils/util.js';
import {getAuthorizationStatus} from '../../reducers/user/selectors.js';
import {VARIANT_CARD} from '../../const.js';

class DetailedOffer extends PureComponent {
  constructor(props) {
    super(props);
    this.id = Number(this.props.match.params.id);
    this.offer = null;
    this.onSubmit = this.props.addNewOfferComment;
    this.onClickFavorite = this.props.onClickFavorite;
    this._onSubmitButtonReviews = this._onSubmitButtonReviews.bind(this);
    this._onChangeFavoriteStatus = this._onChangeFavoriteStatus.bind(this);
  }

  _getRatingComments(ratingsElements) {
    let ratingComment = 0;

    for (let rating of ratingsElements) {
      if (rating.checked) {
        ratingComment = rating.value;
        break;
      }
    }

    return ratingComment;
  }

  _onSubmitButtonReviews(evt) {
    evt.preventDefault();
    const ratingsElements = evt.currentTarget.rating;
    const rating = this._getRatingComments(ratingsElements);
    const textComment = evt.currentTarget.review.value;

    const comment = {
      comment: textComment,
      rating,
    };

    this.onSubmit(this.id, comment);
  }

  _onChangeFavoriteStatus() {
    if (this.props.authorizationStatus === AuthorizationStatus.USER_NOAUTH) {
      history.push(`/login`);
    }

    this.onClickFavorite(this.id, Number(!this.offer.isFavorite));
  }


  componentDidMount() {
    this.props.loadOfferComments(this.id);
    this.props.loadOffersNearby(this.id);
  }

  render() {
    const {
      offers, isLoadingOffers,
      commentsOffer, nearbyOffers,
      authorizationStatus,
    } = this.props;

    if (isLoadingOffers) {
      return <Loading />;
    }

    const offerIndex = offers.findIndex((it) => it.id === this.id);
    this.offer = offers[offerIndex];

    const {photos, title, description, isPremium, type, rating, countDedrooms, maxGuests, isFavorite, price, features, infoOwner} = this.offer;
    const {avatar: ownerAvatar, name: ownerName, isPro} = infoOwner || {};

    const favoriteClass = isFavorite ? `property__bookmark-button--active` : ``;

    const isNearbyOffer = !!nearbyOffers.length;

    const nearbyOffersOnMap = [].concat(nearbyOffers, this.offer);

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
                  onClick={this._onChangeFavoriteStatus}
                >
                  <svg
                    className="place-card__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <ReviewsRating rating = {rating} variant = {`property`}>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </ReviewsRating>

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
                  <div className={`roperty__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`} >
                    <img
                      className="property__avatar user__avatar"
                      src={`/${ownerAvatar}`}
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

              <Reviews reviews = {commentsOffer} authorizationStatus = {authorizationStatus}>
                <FeedbackForm onSubmitButtonReviews = {this._onSubmitButtonReviews} />
              </Reviews>

            </div>
          </div>
          <section className="property__map map">

            {isNearbyOffer
              ? <Map offers = {nearbyOffersOnMap} idPlaceActive = {this.id} coordsCity = {getCityLocation(this.offer)} zoom = {12 }/>
              : ``
            }

          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">

              {<PlaceCardsList offers = {nearbyOffers} variant = {VARIANT_CARD.NEAR} onChangeActiveElement = {() => {}} />}

            </div>
          </section>
        </div>
      </main>
    );
  }
}

const offersPropTypes = PropTypes.arrayOf(PropTypes.shape({
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
})).isRequired;

DetailedOffer.propTypes = {
  offers: offersPropTypes,
  nearbyOffers: offersPropTypes,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  commentsOffer: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string,
    })
  })).isRequired,
  isLoadingOffers: PropTypes.bool.isRequired,
  loadOfferComments: PropTypes.func.isRequired,
  addNewOfferComment: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
  onClickFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf([`USER_AUTH`, `USER_NOAUTH`]),
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  isLoadingOffers: getStatusLoadingOffers(state),
  commentsOffer: getCommentsOffer(state),
  nearbyOffers: getNearbyOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferComments: (id) => {
    dispatch(DataOperations.loadOfferComments(id));
  },
  addNewOfferComment: (id, commentPost) => {
    dispatch(DataOperations.addNewOfferComment(id, commentPost));
  },
  loadOffersNearby: (id) => {
    dispatch(DataOperations.loadNearbyOffers(id));
  },
  onClickFavorite: (id, newState) => {
    dispatch(DataOperations.setFavoriteOffer(id, newState));
  },
});

export {DetailedOffer};
export default connect(mapStateToProps, mapDispatchToProps)(DetailedOffer);
