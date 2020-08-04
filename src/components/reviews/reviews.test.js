import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';

const commentsOffer = [
  {
    comment: `Бла бла бла`,
    date: new Date(`2020-08-04T10:53:33.549Z`),
    id: 1,
    rating: 5,
    user: {
      avatarUrl: `link`,
      id: 1,
      isPro: false,
      name: `Vlad`,
    },
  },
  {
    comment: `Бла бла бла`,
    date: new Date(`2020-08-04T10:53:33.549Z`),
    id: 1,
    rating: 5,
    user: {
      avatarUrl: `link`,
      id: 1,
      isPro: false,
      name: `Vlad`,
    },
  }
];


test(`<Reviews /> render`, () => {
  const three = renderer
    .create(<Reviews reviews = {commentsOffer} />).toJSON();

  expect(three).toMatchSnapshot();
});
