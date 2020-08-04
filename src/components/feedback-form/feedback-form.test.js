import React from 'react';
import renderer from 'react-test-renderer';
import {FeedbackForm} from './feedback-form.jsx';


test(`<FeedbackForm /> render`, () => {
  const three = renderer
    .create(<FeedbackForm
      isValid = {false}
      isDisabled = {false}
      onSubmitForm = {() => {}}
      onChangeStatusForm = {() => {}}
      onChangeFormValue = {() => {}}
      currentOfferId = {1}
    />).toJSON();

  expect(three).toMatchSnapshot();
});
