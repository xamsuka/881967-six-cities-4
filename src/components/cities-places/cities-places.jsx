import React from 'react';
import PropTypes from 'prop-types';
import PlaceCardsList from '../place-cards-list/place-cards-list.jsx';
import VariantSort from '../variant-sort/variant-sort.jsx';
import Map from '../map/map.jsx';
import widthSort from '../../hocs/with-sort/with-sort.jsx';
import {VARIANT_CARD} from '../../const.js';
import {getCityLocation} from '../../utils/util.js';

const WidthVariantSort = widthSort(VariantSort);

const CitiesPlaces = (props) => {
  const {offers, cityName, onChangeActiveElement, activeElement} = props;

  const countPlaces = offers.length;
  const coordsCity = getCityLocation(offers[0]);
  const {zoom} = offers[0].city.location;

  return (
    <React.Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {countPlaces} places to stay in {cityName}
        </b>

        <WidthVariantSort />

        <div className="cities__places-list places__list tabs__content">

          {<PlaceCardsList offers = {offers} variant = {VARIANT_CARD.CITIES} onChangeActiveElement = {onChangeActiveElement} />}

        </div>

      </section>
      <div className="cities__right-section">
        <section className="cities__map map">

          <Map offers = {offers} idPlaceActive = {activeElement} coordsCity = {coordsCity} zoom = {zoom} />

        </section>
      </div>
    </React.Fragment>
  );
};

CitiesPlaces.propTypes = {
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
  cityName: PropTypes.string.isRequired,
  onChangeActiveElement: PropTypes.func.isRequired,
  activeElement: PropTypes.number.isRequired,
};

export default CitiesPlaces;
