import React, {PureComponent} from 'react';

const MAX_LENGTH_REVIEW = 300;
const MIN_LENGTH_REVIEW = 50;

const withForm = (Component) => {
  return class WithForm extends PureComponent {
    constructor(state) {
      super(state);
      this.state = {
        isValid: false,
      };

      this._onChangeFormValue = this._onChangeFormValue.bind(this);
    }

    _checkChangeRating(ratingsElements) {
      for (let rating of ratingsElements) {
        if (rating.checked) {
          return true;
        }
      }

      return false;
    }

    _onChangeFormValue(evt) {
      const lengthComment = evt.currentTarget.review.value.length;
      const ratingsElements = evt.currentTarget.rating;
      const isChangeRating = this._checkChangeRating(ratingsElements);

      if (lengthComment >= MIN_LENGTH_REVIEW && lengthComment <= MAX_LENGTH_REVIEW && isChangeRating) {
        this.setState({
          isValid: true,
        });
      } else {
        this.setState({
          isValid: false,
        });
      }
    }

    render() {
      return <Component
        {...this.props}
        isValid = {this.state.isValid}
        onChangeFormValue = {this._onChangeFormValue}
      />;
    }
  };
};

export default withForm;
