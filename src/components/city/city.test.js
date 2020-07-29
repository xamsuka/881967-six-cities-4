import React from 'react';
import renderer from 'react-test-renderer';
import City from './cities.jsx';

const currentCity = `Paris`;

test(`<City /> render`, () => {
  const three = renderer
    .create(<City currentCity = {currentCity} onChangeCurrentCity = {() => {}} />).toJSON();

  expect(three).toMatchSnapshot();
});
