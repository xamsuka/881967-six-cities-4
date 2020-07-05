import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

const review = {
  id: 1,
  user: {
    id: 1,
    userAvatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
    userName: `Vlad`,
  },
  rating: 5,
  text: `Всё очень круть!`,
  date: `April 2020`,
};

test(`<Review /> render`, () => {
  const three = renderer
    .create(<Review review = {review} />).toJSON();

  expect(three).toMatchSnapshot();
});
