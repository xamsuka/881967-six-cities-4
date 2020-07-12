import React from "react";
import PropTypes from 'prop-types';
import {SortTypes} from '../../const.js';

const VariantSort = (props) => {
  const {currentSort, onSortTypeChange} = props;
  const sortTypes = Object.values(SortTypes);
  return (
    <ul className="places__options places__options--custom places__options--opened" onClick = {onSortTypeChange}>
      {sortTypes.map((sortType) => {
        const classActive = currentSort === sortType ? `places__option--active` : ``;
        return (
          <li className={`places__option ${classActive}`} tabIndex={0} key = {sortType}>
            {sortType}
          </li>
        );
      })}

    </ul>
  );
};

VariantSort.propTypes = {
  currentSort: PropTypes.oneOf([`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]).isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
};

export default VariantSort;
