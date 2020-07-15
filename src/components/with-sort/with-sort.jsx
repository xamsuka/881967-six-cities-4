import React, {PureComponent} from 'react';
import {SortTypes} from '../../const.js';

const withSort = (Component) => {
  return class WidthSort extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentSort: SortTypes.POPULAR,
      };

      this._changeSortTypeHandler = this._changeSortTypeHandler.bind(this);
    }

    _changeSortTypeHandler(evt) {
      const newSortType = evt.target.textContent;

      this.setState({
        currentSort: newSortType
      });
    }

    render() {
      return <Component
        {...this.props}
        currentSort = {this.state.currentSort}
        onSortTypeChange = {this._changeSortTypeHandler}
      />;
    }
  };
};

export {withSort};
