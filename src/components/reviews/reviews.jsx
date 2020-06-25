import React, {PureComponent} from "react";
import FeedbackForm from "../feedback-form/feedback-form.jsx";
import ReviewsRating from '../reviews-rating/reviews-rating.jsx';

class Reviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">1</span>
        </h2>
        <ul className="reviews__list">
          <li className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src="img/avatar-max.jpg"
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">Max</span>
            </div>
            <div className="reviews__info">

              <ReviewsRating />

              <p className="reviews__text">
                A quiet cozy and picturesque that hides behind a a river by the
                unique lightness of Amsterdam. The building is green and from
                18th century.
              </p>
              <time className="reviews__time" dateTime="2019-04-24">
                April 2019
              </time>
            </div>
          </li>
        </ul>

        <FeedbackForm />

      </section>
    );
  }
}

export default Reviews;
