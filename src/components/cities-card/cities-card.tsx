import { MouseEventHandler, memo } from 'react';
import { Offer } from '../../types/offer';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import { Link } from 'react-router-dom';

type CitiesCardProps = {
  offer: Offer;
  onActiveCardCallback: MouseEventHandler<HTMLElement>;
  onNotActiveCardCallback: MouseEventHandler<HTMLElement>;
  classNameContainer: string;
}

function CitiesCardWithoutMemo(props: CitiesCardProps): JSX.Element {
  const {offer, onActiveCardCallback, onNotActiveCardCallback, classNameContainer} = props;

  return (
    <article className={`${classNameContainer}__card place-card`}
      id={offer.id}
      onMouseOver={onActiveCardCallback}
      onMouseLeave={onNotActiveCardCallback}
    >
      {offer.isPremium && <PlaceCardMark/>}
      <div className={`${classNameContainer}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}

const CitiesCard = memo(CitiesCardWithoutMemo);

export default CitiesCard;
