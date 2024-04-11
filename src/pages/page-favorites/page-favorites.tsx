import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/six-cities-data/selectors';
import { useEffect } from 'react';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import CitiesCard from '../../components/cities-card/cities-card';

function PageFavorites(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const offers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map((city) => {
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
                          <CitiesCard
                            offer={cityOffer}
                            key={cityOffer.id}
                            classNameContainer={'favorites'}
                            width={150}
                            height={110}
                          />
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
