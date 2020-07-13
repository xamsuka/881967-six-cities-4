import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {ActionCreator} from '../../reducer.js';
import {SortTypes} from '../../const.js';

const sortedOffers = (offers, currentSort) => {
  const sortOffers = offers.slice();

  switch (currentSort) {
    case SortTypes.POPULAR:
      return offers;
    case SortTypes.PRICE_LOW_TO_HIGHT:
      return sortOffers.sort((a, b) => {
        return a.price - b.price;
      });
    case SortTypes.PRICE_HIGHT_TO_LOW:
      return sortOffers.sort((a, b) => {
        return b.price - a.price;
      });
    case SortTypes.TOP_RATED_FIRST:
      return sortOffers.sort((a, b) => {
        return a.rating - b.rating;
      });
  }

  return offers;
};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {citiesPlaces, currentCity, onChangeCurrentCity, getOffers, currentSort} = this.props;

    getOffers();

    const sortedCityPlaces = sortedOffers(citiesPlaces, currentSort);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main citiesPlaces = {sortedCityPlaces} currentCity = {currentCity} onChangeCurrentCity = {onChangeCurrentCity} />;
          </Route>
          <Route path='/offer/:id' component={DetailedOffer}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  citiesPlaces: PropTypes.arrayOf(PropTypes.shape({
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
  currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  citiesPlaces: state.offers,
  currentCity: state.city,
  currentSort: state.currentSort,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrentCity: (evt) => {
    dispatch(ActionCreator.changeCities(evt));
  },
  getOffers: () => {
    dispatch(ActionCreator.getOffers());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
