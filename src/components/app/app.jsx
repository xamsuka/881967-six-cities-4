import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const sectionTypeChangeHandler = () => {};

const App = (props) => {
  const {countPlaces} = props;

  return <Main countPlaces = {countPlaces} onSectionTypeChange = {sectionTypeChangeHandler} />;
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
};

export default App;
