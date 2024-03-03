import { ChangeEvent, useState } from 'react';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../const';

function ReviewsForm(): JSX.Element {
  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(0);

  function getRatingStars() {
    const raitingStarsItems = [];

    for (let i = 5; i > 0; i--) {
      raitingStarsItems.push(
        <input
          className="form__rating-input visually-hidden"
          key={`${i}-stars-input`}
          name="rating"
          defaultValue={i}
          id={`${i}-stars`}
          type="radio"
          onChange={({target}: ChangeEvent<HTMLInputElement>) => {
            const value = +target.value;
            setUserRating(value);
          }}
        />,
      );
      raitingStarsItems.push(
        <label
          htmlFor={`${i}-stars`}
          key={`${i}-stars-label`}
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>,
      );
    }
    return (
      raitingStarsItems
    );
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
                Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {getRatingStars()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        maxLength={MAX_REVIEW_LENGTH}
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userReview}
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          const value = target.value;
          setUserReview(value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(userReview.length > MIN_REVIEW_LENGTH && userRating !== 0)}
        >
                  Submit
        </button>
      </div>
    </form>
  );
}
export default ReviewsForm;
