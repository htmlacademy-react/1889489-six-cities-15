import { MouseEventHandler, memo } from 'react';
import { Offer } from '../../types/offer';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchChangeSatusFavoriteOfferAction, fetchOffersAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';

type CitiesCardProps = {
  offer: Offer;
  onActiveCardCallback?: MouseEventHandler<HTMLElement>;
  onNotActiveCardCallback?: MouseEventHandler<HTMLElement>;
  classNameContainer: string;
  width: number;
  height: number;
}

function CitiesCardWithoutMemo(props: CitiesCardProps): JSX.Element {
  const {offer, onActiveCardCallback, onNotActiveCardCallback, classNameContainer, width, height} = props;
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleNotActiveCard = (offerId: string, isFavorite: boolean)=> {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchChangeSatusFavoriteOfferAction({offerId: offerId, status: Number(!isFavorite)}));
      dispatch(fetchOffersAction());
      return;
    }
    dispatch(redirectToRoute(AppRoute.Login));
  };

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
            width={width}
            height={height}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${classNameContainer}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} place-card__bookmark-button button`}
            type="button"
            onClick={() => handleNotActiveCard(offer.id, offer.isFavorite)}
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
