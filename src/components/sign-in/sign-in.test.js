import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';

test(`<SignIn /> render`, () => {
  const three = renderer
    .create(<SignIn onSubmit = {() => {}} />).toJSON();

  expect(three).toMatchSnapshot();
});
