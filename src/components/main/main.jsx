import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CitiesPlaces from '../cities-places/cities-places.jsx';
import Cities from '../city/cities.jsx';
import withCities from '../../hocs/with-cities/with-cities.jsx';
import Header from '../header/header.jsx';
import NoPlaces from '../no-places/no-places.jsx';
import Loading from '../loading/loading.jsx';


const WithCitiesPlaces = withCities(CitiesPlaces);
const WidthCities = withCities(Cities);

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, currentCity, onChangeCurrentCity, isLoading, userData} = this.props;

    let cityPlacesComponent = ``;

    if (isLoading) {
      cityPlacesComponent = <Loading />;
    } else if (offers.length) {
      cityPlacesComponent = <WithCitiesPlaces offers = {offers} cityName ={currentCity} activeElement = {-1} />;
    } else {
      cityPlacesComponent = <NoPlaces cityName = {currentCity} />;
    }

    return (
      <React.Fragment>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-arrow-select" viewBox="0 0 7 4">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
              />
            </symbol>
            <symbol id="icon-bookmark" viewBox="0 0 17 18">
              <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
            </symbol>
            <symbol id="icon-star" viewBox="0 0 13 12">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
              />
            </symbol>
          </svg>
        </div>
        <div className="page page--gray page--main">
          <Header userData = {userData} />

          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <WidthCities currentCity = {currentCity} onChangeCurrentCity = {onChangeCurrentCity} />
              </section>
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                {cityPlacesComponent}
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
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
  isLoading: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
  }).isRequired,
};

export default Main;
