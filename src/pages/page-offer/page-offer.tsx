import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import Map from '../../components/map/map';
import CitiesCard from '../../components/cities-card/cities-card';
import { useEffect } from 'react';
import { store } from '../../store';
import { fetchCommentsAction, fetchNearbyOfferAction, fetchOfferIdAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import { getComments, getNearbyOffer, getOffer } from '../../store/six-cities-data/selectors';
import { Offer } from '../../types/offer';

function OfferMark(): JSX.Element {
  return (
    <div className="offer__mark">
      <span>Premium</span>
    </div>
  );
}

function PageOffer(): JSX.Element | undefined {

  const params = useParams();
  const cityId = params.id;

  useEffect(() => {
    store.dispatch(fetchOfferIdAction(cityId!));
    store.dispatch(fetchNearbyOfferAction(cityId!));
    store.dispatch(fetchCommentsAction(cityId!));
  }, [cityId]);

  const offer = useAppSelector(getOffer);
  const nearbyOffer = useAppSelector(getNearbyOffer).slice(0, 3);

  const nearbyOfferForMap: Offer[] = [...nearbyOffer, {...offer!, previewImage: '',}];

  const comments = useAppSelector(getComments);

  if (offer && nearbyOffer.length !== 0 && comments.length !== 0) {
    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img
                      className="offer__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium && <OfferMark/>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${Math.round(offer.rating) * 20}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.bedrooms} {`${offer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {offer.maxAdults} {`${offer.maxAdults > 1 ? 'adults' : 'adult'}`}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What`&apos;`s inside</h2>
                  <ul className="offer__inside-list">
                    {offer.goods.map((good) => (
                      <li className="offer__inside-item" key={good}>{good}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name"> {offer.host.name} </span>
                    <span className="offer__user-status">{offer.host.isPro && 'Pro'}</span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {offer.title}
                    </p>
                    <p className="offer__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <OfferReviews comments={comments} offerId={offer.id} />
              </div>
            </div>
            <Map offers={nearbyOfferForMap} selectedPointId={offer.id} classNameContainer={'offer__map'}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {nearbyOffer.map((nearOffer) => (
                  <CitiesCard
                    offer={nearOffer}
                    key={nearOffer.id}
                    classNameContainer={'near-places'}
                    width={260}
                    height={200}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default PageOffer;
