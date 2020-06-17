import React from 'react';
import renderer from 'react-test-renderer';
import MainComponent from './main';

test(`Main render`, () => {
  const tree = renderer
    .create(<MainComponent countPlaces = {300} onSectionTypeChange = {() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
