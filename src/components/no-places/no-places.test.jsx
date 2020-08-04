import React from 'react';
import renderer from 'react-test-renderer';
import NoPlaces from './no-places.jsx';

test(`<NoPlaces /> render`, () => {
  const three = renderer
    .create(<NoPlaces />).toJSON();

  expect(three).toMatchSnapshot();
});
