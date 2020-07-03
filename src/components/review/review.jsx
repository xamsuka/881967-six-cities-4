import React, {PureComponent} from 'react';
import ReviewsRating from '../reviews-rating/reviews-rating.jsx';

class Review extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {review} = this.props;

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={review.user.userAvatar}
              width={54}
              height={54}
              alt="Reviews avatar"
            />
          </div>
          <span className="reviews__user-name">{review.user.userName}</span>
        </div>
        <div className="reviews__info">

          <ReviewsRating />

          <p className="reviews__text">
            {review.text}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">
            {review.date}
          </time>
        </div>
      </li>);
  }
}

export default Review;
