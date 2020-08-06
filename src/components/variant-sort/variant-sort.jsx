import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SortTypes} from '../../const.js';
import {ActionCreator} from '../../reducers/application/reducer.js';
import {getCurrentSort} from '../../reducers/application/selectors.js';

class VariantSort extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentSort, onSortTypeChange, isOpen, onSortBlockClick} = this.props;
    const sortTypes = Object.values(SortTypes);
    const classSort = isOpen ? `places__options--opened` : ``;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0} onClick={onSortBlockClick}>
          {currentSort}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${classSort}`} onClick={onSortTypeChange}>
          {sortTypes.map((sortType) => {
            const classActive = currentSort === sortType ? ` places__option--active` : ``;
            return (
              <li className={`places__option${classActive}`} tabIndex={0} key={sortType}>
                {sortType}
              </li>
            );
          })}
        </ul>
      </form>
    );
  }
}

VariantSort.propTypes = {
  currentSort: PropTypes.oneOf([`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]).isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSortBlockClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: getCurrentSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeChange: (evt) => {
    dispatch(ActionCreator.changeSortType(evt));
  },
});

export {VariantSort};
export default connect(mapStateToProps, mapDispatchToProps)(VariantSort);
