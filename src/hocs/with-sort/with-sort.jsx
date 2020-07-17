import React, {PureComponent} from 'react';
import {SortTypes} from '../../const.js';

const withSort = (Component) => {
  return class WidthSort extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this._changeSortStatusHandler = this._changeSortStatusHandler.bind(this);
    }

    _changeSortStatusHandler() {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }

    render() {
      return <Component
        {...this.props}
        isOpen = {this.state.isOpen}
        onSortBlockClick = {this._changeSortStatusHandler}
      />;
    }
  };
};

export default withSort;
