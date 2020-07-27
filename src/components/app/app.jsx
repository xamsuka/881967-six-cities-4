import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorite from '../favorite/favorite.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {ActionCreator} from '../../reducers/application/reducer.js';
import {getSortedOffers} from '../../reducers/data/selectors.js';
import {getStatusLoading} from '../../reducers/application/selectors.js';
import {getCurrentCity, getCurrentSort} from '../../reducers/application/selectors.js';
import {Operations as UserOperations} from '../../reducers/user/reducer.js';
import {getUserData} from '../../reducers/user/selectors.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      currentCity,
      onChangeCurrentCity,
      login,
      userData,
      isLoading
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main offers = {offers} currentCity = {currentCity} onChangeCurrentCity = {onChangeCurrentCity} isLoading = {isLoading} userData = {userData} />;
          </Route>
          <Route exact path='/offer/:id' component={DetailedOffer}/>
          <Route exact path="/login">
            <SignIn onSubmit = {login} />;
          </Route>
          <Route exact path="/favorite">
            <Favorite favoriteOffers = {offers} />;
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
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
  currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
  }),
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getSortedOffers(state),
  currentCity: getCurrentCity(state),
  currentSort: getCurrentSort(state),
  isLoading: getStatusLoading(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrentCity: (evt) => {
    dispatch(ActionCreator.changeCities(evt));
  },
  login: (userData) => {
    dispatch(UserOperations.authorizeUser(userData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
