import React from 'react';
import renderer from 'react-test-renderer';
import {VariantSort} from './variant-sort.jsx';

test(`VariantSort render`, () => {
  const three = renderer
    .create(
        <VariantSort currentSort = {`Popular`}
          isOpen = {false}
          onSortTypeChange = {() => {}}
          onSortBlockClick = {() => {}}
        />
    ).toJSON();

  expect(three).toMatchSnapshot();
});
