import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {PureComponent} from 'react';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.citiesPlaces = [];
    this.idPlaceActive = null;
    this.map = null;
    this.showedPins = [];
  }

  addPinsToMap() {
    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });

    if (this.citiesPlaces.length === 0) {
      return;
    }

    this.citiesPlaces.forEach((place) => {
      const newPin = new leaflet.Marker(place.coords);

      this.showedPins.push(newPin);

      if (this.idPlaceActive === place.id) {
        newPin.setIcon(iconActive);
      }

      newPin.addTo(this.map);
    });
  }

  initMap() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    const zoom = 2;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    const offerCords = [52.3709553943508, 4.89309666406198];
    leaflet
      .marker(offerCords, {icon})
      .addTo(map);

    this.map = map;

    this.addPinsToMap();
  }

  removePins() {
    this.showedPins.forEach((pin) => {
      this.map.removeLayer(pin);
    });
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.removePins();
    this.addPinsToMap();
  }

  render() {
    const {citiesPlaces, idPlaceActive} = this.props;
    this.citiesPlaces = citiesPlaces;
    this.idPlaceActive = idPlaceActive;

    return (<div id="map" />);
  }
}

Map.propTypes = {
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
  idPlaceActive: PropTypes.number.isRequired,
};

export default Map;
