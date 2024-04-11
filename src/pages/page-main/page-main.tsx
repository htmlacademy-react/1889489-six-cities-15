import { useEffect } from 'react';
import HeaderNavList from '../../components/header-nav-list/header-nav-list';
import LocationsTabsList from '../../components/locations-tabs-list/locations-tabs-list';
import MainEmpty from '../../components/main-empty/main-empty';
import OffersList from '../../components/offers-list/offers-list';
import { AuthorizationStatus, TypesOfSorting } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getErrorStatus, getOffers } from '../../store/six-cities-data/selectors';
import { getCity, getSortingType } from '../../store/six-cities-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function PageMain(): JSX.Element {
  const offersState = useAppSelector(getOffers);
  const selectedCity = useAppSelector(getCity);
  const sortingType = useAppSelector(getSortingType);
  const hasError = useAppSelector(getErrorStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      store.dispatch(fetchFavoriteOffersAction());
    }
  }, [authorizationStatus]);

  const offersSelectedCity = offersState.filter((offer) => offer.city.name === selectedCity);
  const citiesPlacesCount = offersSelectedCity.length;
  let sortedOffersSelectedCity = offersSelectedCity;

  if (sortingType === TypesOfSorting.Popular) {
    sortedOffersSelectedCity = offersSelectedCity;
  } else if (sortingType === TypesOfSorting.PriceHighToLow) {
    sortedOffersSelectedCity = offersSelectedCity.toSorted((a, b) => b.price - a.price);
  } else if (sortingType === TypesOfSorting.PriceLowToHugh) {
    sortedOffersSelectedCity = offersSelectedCity.toSorted((a, b) => a.price - b.price);
  } else if (sortingType === TypesOfSorting.TopRatedFirst) {
    sortedOffersSelectedCity = offersSelectedCity.toSorted((a, b) => b.rating - a.rating);
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <HeaderNavList />
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsTabsList selectedCity={selectedCity} />
          </section>
        </div>
        <div className="cities">
          {hasError && <MainEmpty selectedCity={selectedCity} />}
          {!hasError && <OffersList offers={sortedOffersSelectedCity} citiesPlacesCount={citiesPlacesCount} selectedCity={selectedCity} />}
        </div>
      </main>
    </div>
  );
}

export default PageMain;
