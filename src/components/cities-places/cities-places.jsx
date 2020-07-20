import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import VariantSort from '../variant-sort/variant-sort.jsx';
import Map from '../map/map.jsx';
import widthSort from '../../hocs/with-sort/with-sort.jsx';

const WidthVariantSort = widthSort(VariantSort);

const CitiesPlaces = (props) => {
  const {citiesPlaces, cityName, onChangeActiveElement, activeElement} = props;

  const placeCards = citiesPlaces.map((place) => {
    return <PlaceCard place={place} onMouseOver={onChangeActiveElement} key={place.id} variant = {`cities`} />;
  });

  const countPlaces = placeCards.length;

  return (
    <React.Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {countPlaces} places to stay in {cityName}
        </b>

        <WidthVariantSort />

        <div className="cities__places-list places__list tabs__content">
          {placeCards}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">

          <Map citiesPlaces = {citiesPlaces} idPlaceActive = {activeElement} />

        </section>
      </div>
    </React.Fragment>
  );
};

CitiesPlaces.propTypes = {
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
  cityName: PropTypes.string.isRequired,
  onChangeActiveElement: PropTypes.func.isRequired,
  activeElement: PropTypes.number.isRequired,
};

export default CitiesPlaces;
