import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {citiesPlaces} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main citiesPlaces = {citiesPlaces} />;
          </Route>
          <Route exact path="/dev-offer">

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
      avatart: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired
  }).isRequired).isRequired,
};

export default App;
