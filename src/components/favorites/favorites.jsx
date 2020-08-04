import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from "../header/header.jsx";
import Loading from '../loading/loading.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import FavoriteItems from '../favorite-items/favorite-items.jsx';
import {getUserData} from '../../reducers/user/selectors.js';
import {getFavoriteOffers} from '../../reducers/data/selectors.js';
import {getStatusLoadingFavorite} from '../../reducers/application/selectors.js';

const Favorites = (props) => {
  const {favoriteOffers, userData, isLoading} = props;
  const isFeatues = !!favoriteOffers.length;

  let favoritesComponent = isLoading ? <Loading /> : <FavoritesEmpty />;

  return (
    <React.Fragment>
      <div className="page">
        <Header userData = {userData} />

        {isFeatues ?
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>

                <FavoriteItems favoriteOffers = {favoriteOffers} />

              </section>
            </div>
          </main>
          : favoritesComponent}

        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
};

Favorites.propTypes = {
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
  })).isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
  }),
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  userData: getUserData(state),
  isLoading: getStatusLoadingFavorite(state),
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
