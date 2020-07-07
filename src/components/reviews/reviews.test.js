import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';

const reviews = [
  {
    id: 1,
    user: {
      id: 1,
      userAvatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      userName: `Vlad`,
    },
    rating: 5,
    text: `Всё очень круть!`,
    date: `April 2020`,
  },
  {
    id: 2,
    user: {
      id: 2,
      userAvatar: `https://api.adorable.io/avatars/285/abott@adorable.png`,
      userName: `Viktor`,
    },
    rating: 4,
    text: `Пойдёт!`,
    date: `April 2021`,
  }
];


test(`<Reviews /> render`, () => {
  const three = renderer
    .create(<Reviews reviews = {reviews} />).toJSON();

  expect(three).toMatchSnapshot();
});
