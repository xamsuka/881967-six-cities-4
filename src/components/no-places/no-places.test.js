import React from 'react';
import renderer from 'react-test-renderer';
import NoPlaces from './no-places.jsx';

test(`<NoPlaces /> render`, () => {
  const three = renderer
    .create(<NoPlaces cityName = {`Paris`} />).toJSON();

  expect(three).toMatchSnapshot();
});
