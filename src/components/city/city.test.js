import React from 'react';
import renderer from 'react-test-renderer';
import City from './city';

const cityName = `Paris`;
const currentCity = `Paris`;

test(`<City /> render`, () => {
  const three = renderer
    .create(<City cityName = {cityName} currentCity = {currentCity} />).toJSON();

  expect(three).toMatchSnapshot();
});
