import React from "react";
import PropTypes from 'prop-types';
import {CITIES} from '../../const.js';

const City = (props) => {
  const {currentCity, onChangeCurrentCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, index) => {
        return (
          <li className="locations__item" key = {city}>
            <a className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`} href="/" data-id={index} onClick={onChangeCurrentCity}>
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

City.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired,
};

export default City;
