import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {PureComponent} from 'react';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.offers = [];
    this.coordsCity = [];
    this.zoom = null;
    this.idPlaceActive = null;
    this.map = null;
    this.showedPins = [];
  }

  addPinsToMap() {
    const iconActive = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [27, 39]
    });

    if (this.offers.length === 0) {
      return;
    }

    this.offers.forEach((offer) => {
      const newPin = new leaflet.Marker(Array.of(offer.coords.latitude, offer.coords.longitude));

      this.showedPins.push(newPin);

      if (this.idPlaceActive === offer.id) {
        newPin.setIcon(iconActive);
      }

      newPin.addTo(this.map);
    });
  }

  initMap() {
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [27, 39]
    });

    const map = leaflet.map(`map`, {
      center: this.coordsCity,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(this.coordsCity, this.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    leaflet
      .marker(this.coordsCity, {icon})
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
    this.map.remove();
    this.initMap();
  }

  render() {
    const {offers, idPlaceActive, coordsCity, zoom = 12} = this.props;
    this.offers = offers;
    this.idPlaceActive = idPlaceActive;
    this.coordsCity = coordsCity;
    this.zoom = zoom;

    return (<div id="map" />);
  }
}

Map.propTypes = {
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
  idPlaceActive: PropTypes.number,
  coordsCity: PropTypes.array,
  zoom: PropTypes.number,
};

export default Map;
