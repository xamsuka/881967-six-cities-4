import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {countPlaces} = props;

  return <Main countPlaces = {countPlaces} />;
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
};

export default App;
