import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import VariantSort from '../variant-sort/variant-sort.jsx';
import {withSort} from '../with-sort/with-sort.jsx';

const WrappedVariantSort = withSort(VariantSort);

class CitiesPlaces extends PureComponent {
  constructor(props) {
    super(props);
    this._overMouseCardHandler = this._overMouseCardHandler.bind(this);
  }

  _overMouseCardHandler(evt) {
    const idPlace = Number(evt.currentTarget.attributes[`data-id`].value);
    return this.props.citiesPlaces.filter((city) => city.id === idPlace);
  }

  render() {
    const {citiesPlaces, cityName} = this.props;

    const placeCards = citiesPlaces.map((place) => {
      return <PlaceCard place={place} onMouseOver={this._overMouseCardHandler} key={place.id} variant = {`cities`} />;
    });

    const countPlaces = placeCards.length;

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {countPlaces} places to stay in {cityName}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <WrappedVariantSort />
          {/* <ul className="places__options places__options--custom places__options--close">
            <li className="places__option places__option--active" tabIndex={0}>
              Popular
            </li>
            <li className="places__option" tabIndex={0}>
              Price: low to high
            </li>
            <li className="places__option" tabIndex={0}>
              Price: high to low
            </li>
            <li className="places__option" tabIndex={0}>
              Top rated first
            </li>
          </ul> */}
        </form>
        <div className="cities__places-list places__list tabs__content">
          {placeCards}
        </div>
      </section>
    );
  }
}

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
};

export default CitiesPlaces;
