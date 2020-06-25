import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';


test(`<Reviews /> render`, () => {
  const three = renderer
    .create(<Reviews />).toJSON();

  expect(three).toMatchSnapshot();
});
