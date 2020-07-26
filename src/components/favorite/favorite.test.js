import React from 'react';
import renderer from 'react-test-renderer';
import Favorite from './favorite.jsx';

test(`<Favorite /> render`, () => {
  const three = renderer
    .create(<Favorite />).toJSON();

  expect(three).toMatchSnapshot();
});
