import React, {PureComponent} from "react";

class ReviewsRating extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `50%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
    );
  }
}

export default ReviewsRating;
