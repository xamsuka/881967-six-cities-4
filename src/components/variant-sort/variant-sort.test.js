import React from 'react';
import renderer from 'react-test-renderer';
import {VariantSort} from './variant-sort.jsx';

test(`VariantSort render`, () => {
  const three = renderer
    .create(<VariantSort currentSort = {`Popular`} onSortTypeChange = {() => {}} />).toJSON();

  expect(three).toMatchSnapshot();
});
