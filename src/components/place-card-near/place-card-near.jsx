import React from 'react';
import PlaceCard from '../place-card/place-card.jsx';

const PlaceCardNear = (props) => {
  const classNameCard = `near-places__card`;
  const classNameImgWrapper = `near-places__image-wrapper`;

  return <PlaceCard classNameCard = {classNameCard}
    classNameImgWrapper = {classNameImgWrapper}
    {...props}
  />;
};

export default PlaceCardNear;
