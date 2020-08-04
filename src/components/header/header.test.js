import React from 'react';
import {StaticRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

const userData = {
  id: 1,
  name: `Vlad`,
  email: `123@mail.ru`,
  isPro: false,
};

test(`<Header /> render`, () => {
  const three = renderer
    .create(<StaticRouter><Header userData = {userData} /></StaticRouter>).toJSON();

  expect(three).toMatchSnapshot();
});
