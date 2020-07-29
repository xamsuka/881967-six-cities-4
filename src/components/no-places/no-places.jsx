import React from 'react';
import PropTypes from 'prop-types';

const NoPlaces = (props) => {
  const {cityName} = props;

  return (
    <React.Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property availbale at the moment in {cityName}
          </p>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map" />
      </div>
    </React.Fragment>
  );
};

NoPlaces.propTypes = {
  cityName: PropTypes.oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]).isRequired,
};

export default NoPlaces;
