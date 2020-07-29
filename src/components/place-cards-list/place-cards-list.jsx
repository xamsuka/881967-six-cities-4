import React from 'react';
import {VARIANT_CARD} from '../../const.js';
import PlaceCard from '../place-card/place-card.jsx';
import PlaceCardFavorite from '../proxy/place-card/place-card-favorite.jsx';
import PlaceCardNear from '../proxy/place-card/place-card-near.jsx';

const PlaceCardsList = ({variant, offers, onChangeActiveElement}) => {
  const getComponentByVariant = (variantCard, offer, key) => {
    switch (variantCard) {
      case VARIANT_CARD.CITIES:
        return <PlaceCard offer = {offer} onMouseOver = {onChangeActiveElement} key = {key} />;
      case VARIANT_CARD.FAVORITE:
        return <PlaceCardFavorite offer = {offer} onMouseOver = {onChangeActiveElement} key = {key} />;
      case VARIANT_CARD.NEAR:
        return <PlaceCardNear offer = {offer} onMouseOver = {onChangeActiveElement} key = {key}/>;
      default:
        return <PlaceCard offer = {offer} onMouseOver = {onChangeActiveElement} key = {key} />;
    }
  };

  return offers.map((offer) => {
    const key = `${offer.id}${offer.previewPhoto}`;
    return getComponentByVariant(variant, offer, key);
  });

};

export default PlaceCardsList;
