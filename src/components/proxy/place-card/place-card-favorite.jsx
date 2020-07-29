import React from 'react';
import PlaceCard from '../../place-card/place-card.jsx';

const PlaceCardFavorite = (props) => {
  const classNameCard = `favorites__card`;
  const classNameImgWrapper = `favorites__image-wrapper`;
  const imageSize = {
    width: 150,
    height: 110,
  };

  return <PlaceCard classNameCard = {classNameCard}
    classNameImgWrapper = {classNameImgWrapper}
    imageSize = {imageSize}
    {...props}
  />;
};

export default PlaceCardFavorite;
