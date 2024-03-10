import { Comments } from '../../types/offer';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  comments: Comments[];
}

function ReviewsList(props: ReviewsListProps): JSX.Element {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {comments.map((comment) => <ReviewsItem comment={comment} key={`${comment.id}-${comment.date}`}/>)}
    </ul>
  );
}

export default ReviewsList;
