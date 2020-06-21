import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class City extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {cityName, currentCity} = this.props;

    return (
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${cityName === currentCity ? `tabs__item--active` : ``}`} href="#">
          <span>{cityName}</span>
        </a>
      </li>
    );
  }
}

City.propTypes = {
  cityName: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default City;
