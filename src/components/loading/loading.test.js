import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './loading.jsx';

test(`<Loading /> render`, () => {
  const three = renderer
    .create(<Loading />).toJSON();

  expect(three).toMatchSnapshot();
});
