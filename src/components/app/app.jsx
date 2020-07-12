import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {ActionCreator} from '../../reducer.js';
import {reviews} from '../../mock/mock.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {citiesPlaces, placeOffer, currentCity, onChangeCurrentCity, getOffers} = this.props;

    getOffers();

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main citiesPlaces = {citiesPlaces} currentCity = {currentCity} onChangeCurrentCity = {onChangeCurrentCity} />;
          </Route>
          {/* <Route path='/offer/:id' component={DetailedOffer}/> */}
          <Route exact path="/offer">
            <DetailedOffer place = {placeOffer} otherPlaces = {citiesPlaces.slice().slice(0, 3)} reviews = {reviews} />
          </Route>
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
  placeOffer: PropTypes.any,
  currentCity: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  citiesPlaces: state.offers,
  placeOffer: state.placeOffer,
  currentCity: state.city,
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
