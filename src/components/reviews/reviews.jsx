import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import FeedbackForm from "../feedback-form/feedback-form.jsx";
import Review from '../review/review.jsx';

class Reviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews} = this.props;

    const reviewComponents = reviews.map((review) => {
      return <Review review = {review} key = {`${review.text} ${review.id}`} />;
    });

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviewComponents}
        </ul>

        <FeedbackForm />

      </section>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      userAvatar: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
    }),
    rating: PropTypes.oneOf([1, 2, 3, 4, 5]),
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }))
};

export default Reviews;
