import React, {PureComponent} from 'react';

const withCities = (Component) => {
  return class WithCities extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeElement: -1,
      };

      this._changeActiveElementHandler = this._changeActiveElementHandler.bind(this);
    }

    _changeActiveElementHandler(evt) {
      this.setState({
        activeElement: Number(evt.currentTarget.attributes[`data-id`].value),
      });
    }

    render() {
      return <Component
        {...this.props}
        onChangeActiveElement = {this._changeActiveElementHandler}
        activeElement = {this.state.activeElement}
      />;
    }

  };
};


export default withCities;
