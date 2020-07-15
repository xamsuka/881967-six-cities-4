import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SortTypes} from '../../const.js';
import {ActionCreator} from '../../reducer.js';
class VariantSort extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentSort, onSortTypeChange} = this.props;
    const sortTypes = Object.values(SortTypes);

    return (
      <ul className="places__options places__options--custom places__options--opened" onClick = {onSortTypeChange}>
        {sortTypes.map((sortType) => {
          const classActive = currentSort === sortType ? ` places__option--active` : ``;
          return (
            <li className={`places__option${classActive}`} tabIndex={0} key = {sortType}>
              {sortType}
            </li>
          );
        })}

      </ul>
    );
  }
}

VariantSort.propTypes = {
  currentSort: PropTypes.oneOf([`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]).isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeChange: (evt) => {
    dispatch(ActionCreator.changeSortType(evt));
  },
});

export {VariantSort};
export default connect(mapStateToProps, mapDispatchToProps)(VariantSort);
