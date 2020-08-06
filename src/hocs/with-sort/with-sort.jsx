import React, {PureComponent} from 'react';

const withSort = (Component) => {
  return class WithSort extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this._changeSortStatusHandler = this._changeSortStatusHandler.bind(this);
    }

    _changeSortStatusHandler() {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen,
      })
      );
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
