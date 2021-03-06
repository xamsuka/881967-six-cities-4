import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ReviewsRating from '../reviews-rating/reviews-rating.jsx';
import {getAuthorizationStatus} from '../../reducers/user/selectors.js';
import {Operations as DataOperations} from '../../reducers/data/reducer.js';
import {AuthorizationStatus} from '../../const.js';
import {history} from '../app/app.jsx';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeFavoriteStatus = this.handleChangeFavoriteStatus.bind(this);
  }

  handleChangeFavoriteStatus() {
    if (this.props.authorizationStatus === AuthorizationStatus.USER_NOAUTH) {
      history.push(`/login`);
    }

    this.props.onClickFavorite(this.props.offer.id, Number(!this.props.offer.isFavorite));
  }

  render() {
    const {
      offer,
      classNameCard = `cities__place-card`,
      classNameImgWrapper = `cities__image-wrapper`,
      imageSize = {width: 260, height: 200},
      onMouseOver,
      key,
    } = this.props;

    const {id, previewPhoto, isPremium, type, rating, isFavorite, price} = offer;

    const favoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;

    return (
      <article className= {`${classNameCard} place-card`} onMouseOver={onMouseOver} data-id={id} key={key} >
        {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
        <div className={`${classNameImgWrapper} place-card__image-wrapper`}>
          <a href="#">
            <img
              className="place-card__image"
              src={previewPhoto}
              width={imageSize.width}
              height={imageSize.height}
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
              type="button" onClick = {this.handleChangeFavoriteStatus}
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>

          <ReviewsRating rating = {rating} variant = {`reviews`} />

          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

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
    infoOwner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }),
    coords: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onMouseOver: PropTypes.func,
  onClickFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf([`USER_NOAUTH`, `USER_AUTH`]),
  classNameCard: PropTypes.string,
  classNameImgWrapper: PropTypes.string,
  imageSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  key: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickFavorite: (id, newState) => {
    dispatch(DataOperations.setFavoriteOffer(id, newState));
  },
});

export {PlaceCard};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
