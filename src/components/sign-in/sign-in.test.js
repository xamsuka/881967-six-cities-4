import React from 'react';
import {StaticRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';

test(`<SignIn /> render`, () => {
  const three = renderer
    .create(
        <StaticRouter>
          <SignIn onSubmitFrom = {() => {}} history={{}} />
        </StaticRouter>
    ).toJSON();

  expect(three).toMatchSnapshot();
});
