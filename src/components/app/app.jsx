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

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, currentCity, onChangeCurrentCity, isLoading} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Main offers = {offers} currentCity = {currentCity} onChangeCurrentCity = {onChangeCurrentCity} isLoading = {isLoading} />;
          </Route>
          <Route path='/offer/:id' component={DetailedOffer}/>
          <Route exact path="/sign-in">
          <SignIn />;
          </Route>
          <Route exact path="/favorite">
          <Favorite />;
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.any.isRequired,
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
    // infoOwner: PropTypes.shape({
    //   avatar: PropTypes.string.isRequired,
    //   name: PropTypes.string.isRequired,
    //   isSuper: PropTypes.bool.isRequired,
    // }).isRequired
  }).isRequired).isRequired,
  currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getSortedOffers(state),
  currentCity: getCurrentCity(state),
  currentSort: getCurrentSort(state),
  isLoading: getStatusLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrentCity: (evt) => {
    dispatch(ActionCreator.changeCities(evt));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
