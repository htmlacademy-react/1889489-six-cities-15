import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { Comments } from '../../types/offer';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

type OfferReviewsProps = {
  comments: Comments[];
  offerId: string;
}

function OfferReviews(props: OfferReviewsProps): JSX.Element {
  const {comments, offerId} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewsList comments={comments}/>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm offerId={offerId} />}
    </section>
  );
}

export default OfferReviews;
