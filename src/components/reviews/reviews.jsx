import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';
import {AuthorizationStatus} from '../../const.js';

const MAX_REVIEWS = 10;

class Reviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  sortingReviews(reviews) {
    return reviews.sort((a, b) => b.date - a.date);
  }

  render() {
    const {reviews, authorizationStatus, children} = this.props;

    const reviewsAfterSorting = this.sortingReviews(reviews);

    const reviewComponents = reviewsAfterSorting.map((review, index) => {
      if (index < MAX_REVIEWS) {
        return <Review review = {review} key = {review.id} />;
      }

      return ``;
    });

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviewComponents}
        </ul>

        {authorizationStatus === AuthorizationStatus.USER_AUTH ? children : ``}

      </section>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.oneOf([1, 2, 3, 4, 5]),
    comment: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  })),
  children: PropTypes.node.isRequired,
  authorizationStatus: PropTypes.oneOf([`USER_AUTH`, `USER_NOAUTH`]),
};

export default Reviews;
