import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import Favorites from '../favorites/favorites.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {ActionCreator as ActionCreatorApplication} from '../../reducers/application/reducer.js';
import {getSortedOffers} from '../../reducers/data/selectors.js';
import {getStatusLoadingOffers} from '../../reducers/application/selectors.js';
import {getCurrentCity} from '../../reducers/application/selectors.js';
import {Operations as UserOperations} from '../../reducers/user/reducer.js';
import {getUserData} from '../../reducers/user/selectors.js';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      currentCity,
      onChangeCurrentCity,
      onLogin,
      userData,
      isLoading,
    } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Main offers = {offers} currentCity = {currentCity} onChangeCurrentCity = {onChangeCurrentCity} isLoading = {isLoading} userData = {userData} />;
          </Route>
          <Route exact path='/offer/:id' component={DetailedOffer}/>
          <Route exact path='/login' >
            {Object.keys(userData).length ? <Redirect to="/" /> : <SignIn onSubmit = {onLogin} history={history} /> }
          </Route>
          <PrivateRoute
            exact
            path='/favorites'
            render={() => {
              return (
                <Favorites
                  userData = {userData}
                />
              );
            }}
          />
        </Switch>
      </Router>
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
  currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getSortedOffers(state),
  currentCity: getCurrentCity(state),
  isLoading: getStatusLoadingOffers(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrentCity: (evt) => {
    evt.preventDefault();
    dispatch(ActionCreatorApplication.changeCities(evt));
  },
  onLogin: (userData) => {
    dispatch(UserOperations.authorizeUser(userData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
