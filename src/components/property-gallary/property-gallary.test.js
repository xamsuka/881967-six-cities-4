import React from 'react';
import renderer from 'react-test-renderer';
import PropertyGallary from './property-gallary.jsx';

const photos = [`https://canadskaya-izba.ru/img/doma/karkas2.jpg`];

test(`<PropertyGallary /> render`, () => {
  const three = renderer
    .create(<PropertyGallary photos = {photos} />).toJSON();

  expect(three).toMatchSnapshot();
});
