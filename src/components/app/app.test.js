import React from 'react';
import renderer from 'react-test-renderer';
import AppComponent from './app';

test(`App render`, () => {
  const three = renderer
    .create(<AppComponent countPlaces = {300} onSectionTypeChange = {() => {}} />);

  expect(three).toMatchSnapshot();
});
