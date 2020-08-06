import React from 'react';
import PropTypes from 'prop-types';
import {ONE_STAR, VARIANT_RATING_CLASS} from '../../const.js';

const ReviewsRating = (props) => {
  const {rating, variant, children} = props;

  const classRating = VARIANT_RATING_CLASS[variant] || VARIANT_RATING_CLASS.placeCard;

  return (
    <div className={`${classRating} rating`}>
      <div className={`${variant}__stars rating__stars`}>
        <span style={{width: `${ONE_STAR * rating}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
};

ReviewsRating.propTypes = {
  rating: PropTypes.number.isRequired,
  variant: PropTypes.oneOf([`reviews`, `property`, `placeCard`]).isRequired,
  children: PropTypes.node,
};

export default ReviewsRating;
