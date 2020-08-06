import React from 'react';
import PropTypes from 'prop-types';
import ReviewsRating from '../reviews-rating/reviews-rating.jsx';
import {dateAdapter} from '../../utils/util.js';

const Review = (props) => {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">

        <ReviewsRating rating = {review.rating} variant = {`reviews`} />

        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>
          {dateAdapter(review.date)}
        </time>
      </div>
    </li>);
};

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.oneOf([1, 2, 3, 4, 5]),
    comment: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  })
};

export default Review;
