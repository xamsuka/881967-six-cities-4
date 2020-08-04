import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty.jsx';

test(`<FavoritesEmpty /> render`, () => {
  const three = renderer
    .create(<FavoritesEmpty />).toJSON();

  expect(three).toMatchSnapshot();
});
