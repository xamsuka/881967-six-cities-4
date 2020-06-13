import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {countPlaces} = props;

  return <Main countPlaces = {countPlaces} />;
};

export default App;
