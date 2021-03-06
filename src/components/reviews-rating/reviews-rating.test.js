import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsRating from './reviews-rating.jsx';

const rating = 5;

test(`<ReviewsRating /> render`, () => {
  const three = renderer
    .create(<ReviewsRating rating = {rating} variant = {`reviews`} />).toJSON();

  expect(three).toMatchSnapshot();
});
