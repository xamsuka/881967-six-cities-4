import React from 'react';
import {VARIANT_CARD} from '../../const.js';
import PlaceCard from '../place-card/place-card.jsx';
import PlaceCardFavorite from '../proxy/place-card/place-card-favorite.jsx';
import PlaceCardNear from '../proxy/place-card/place-card-near.jsx';

const PlaceCardsList = ({variant, offers, onChangeActiveElement}) => {
  const getComponentByVariant = (variantCard, offer) => {
    switch (variantCard) {
      case VARIANT_CARD.CITIES:
        return <PlaceCard offer = {offer} onMouseOver = {onChangeActiveElement} />;
      case VARIANT_CARD.FAVORITE:
        return <PlaceCardFavorite offer = {offer} onMouseOver = {onChangeActiveElement} />;
      case VARIANT_CARD.NEAR:
        return <PlaceCardNear offer = {offer} onMouseOver = {onChangeActiveElement} />;
      default:
        return <PlaceCard offer = {offer} onMouseOver = {onChangeActiveElement} />;
    }
  };

  return offers.map((offer) => {
    return getComponentByVariant(variant, offer);
  });

};

export default PlaceCardsList;
