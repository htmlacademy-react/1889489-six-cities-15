import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import PlaceCardMark from '../../components/place-card-mark/place-card-mark';
import { AppRoute, Cities } from '../../const';
import { Offer } from '../../types/offer';

type PageFavoritesProps = {
  offers: Offer[];
}

function PageFavorites({offers}: PageFavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Cities.map((city) => {
                const cityOffers = offers.filter((offer) => offer.city.name === city);
                if (cityOffers.length > 0) {
                  return(
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {cityOffers.map((cityOffer) => (
                          <article className="favorites__card place-card" key={cityOffer.id}>
                            {cityOffer.isPremium && <PlaceCardMark/>}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <a href="#">
                                <img
                                  className="place-card__image"
                                  src={cityOffer.previewImage}
                                  width={150}
                                  height={110}
                                  alt="Place image"
                                />
                              </a>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">€{cityOffer.price}</b>
                                  <span className="place-card__price-text">
                                    /&nbsp;night
                                  </span>
                                </div>
                                <button
                                  className="place-card__bookmark-button place-card__bookmark-button--active button"
                                  type="button"
                                >
                                  <svg
                                    className="place-card__bookmark-icon"
                                    width={18}
                                    height={19}
                                  >
                                    <use xlinkHref="#icon-bookmark" />
                                  </svg>
                                  <span className="visually-hidden">In bookmarks</span>
                                </button>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: `${Math.round(cityOffer.rating) * 20}%`}}/>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <a href="#">{cityOffer.title}</a>
                              </h2>
                              <p className="place-card__type">{cityOffer.type.charAt(0).toUpperCase() + cityOffer.type.slice(1)}</p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default PageFavorites;
