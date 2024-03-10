import { Comments } from '../../types/offer';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

type OfferReviewsProps = {
  comments: Comments[];
}

function OfferReviews(props: OfferReviewsProps): JSX.Element {
  const {comments} = props;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewsList comments={comments}/>
      <ReviewsForm />
    </section>
  );
}

export default OfferReviews;
