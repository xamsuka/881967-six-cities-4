import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsRating from './reviews-rating.jsx';


test(`<ReviewsRating /> render`, () => {
  const three = renderer
    .create(<ReviewsRating />).toJSON();

  expect(three).toMatchSnapshot();
});
