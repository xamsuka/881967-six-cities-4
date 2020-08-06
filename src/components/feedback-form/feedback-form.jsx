import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Operations as DataOperations} from '../../reducers/data/reducer.js';
import {ActionCreator} from '../../reducers/application/reducer.js';
import {getStatusFeedbackForm} from '../../reducers/application/selectors.js';

const FeedbackForm = (props) => {
  const {currentOfferId, onChangeFormValue, onChangeStatusForm, isValid, isDisabled, onSubmitForm} = props;
  const disabledAttr = isValid ? `` : `disabled`;
  const disabledFormAttr = isDisabled ? `disabled` : ``;

  const getRatingComments = (ratingsElements) => {
    let ratingComment = 0;

    for (let rating of ratingsElements) {
      if (rating.checked) {
        ratingComment = rating.value;
        break;
      }
    }

    return ratingComment;
  };

  const onSubmitButtonReviews = (evt) => {
    evt.preventDefault();
    const formElement = evt.currentTarget;
    const ratingsElements = formElement.rating;
    const rating = getRatingComments(ratingsElements);
    const textComment = formElement.review.value;

    const comment = {
      comment: textComment,
      rating,
    };

    onChangeStatusForm(isDisabled);
    onSubmitForm(currentOfferId, comment)
      .then(() => {
        formElement.reset();
        onChangeFormValue(``);
      });
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      disabled={disabledFormAttr}
      onSubmit={onSubmitButtonReviews}
      onChange={onChangeFormValue}
    >
      <fieldset disabled={disabledFormAttr} style={{border: `none`}}>
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={5}
            id="5-stars"
            type="radio"
          />
          <label
            htmlFor="5-stars"
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={4}
            id="4-stars"
            type="radio"
          />
          <label
            htmlFor="4-stars"
            className="reviews__rating-label form__rating-label"
            title="good"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={3}
            id="3-stars"
            type="radio"
          />
          <label
            htmlFor="3-stars"
            className="reviews__rating-label form__rating-label"
            title="not bad"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={2}
            id="2-stars"
            type="radio"
          />
          <label
            htmlFor="2-stars"
            className="reviews__rating-label form__rating-label"
            title="badly"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={1}
            id="1-star"
            type="radio"
          />
          <label
            htmlFor="1-star"
            className="reviews__rating-label form__rating-label"
            title="terribly"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          maxLength={300}
          minLength={50}
          defaultValue={``}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">rating</span> and describe your stay
            with at least
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit" disabled = {disabledAttr} >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );

};

FeedbackForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  currentOfferId: PropTypes.number.isRequired,
  onChangeFormValue: PropTypes.func.isRequired,
  onChangeStatusForm: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDisabled: getStatusFeedbackForm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (id, commentPost) => {
    return dispatch(DataOperations.addNewOfferComment(id, commentPost));
  },
  onChangeStatusForm: (isDisabled) => {
    dispatch(ActionCreator.changeDisabledFeedbackForm(isDisabled));
  },
});

export {FeedbackForm};
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
