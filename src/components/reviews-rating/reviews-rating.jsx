import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {ONE_STAR, VARIANT_RATING_CLASS} from '../../const.js';

class ReviewsRating extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {rating, variant} = this.props;

    const classRating = VARIANT_RATING_CLASS[variant] || VARIANT_RATING_CLASS.reviews;

    return (
      <div className={`${classRating} rating`}>
        <div className="reviews__stars rating__stars">
          <span style={{width: `${ONE_STAR * rating}%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
    );
  }
}

ReviewsRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ReviewsRating;
