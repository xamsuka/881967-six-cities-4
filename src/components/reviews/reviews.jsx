import React, {PureComponent} from "react";
import FeedbackForm from "../feedback-form/feedback-form.jsx";
import Review from '../review/review.jsx';
import ReviewsRating from '../reviews-rating/reviews-rating.jsx';

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

export default Reviews;
