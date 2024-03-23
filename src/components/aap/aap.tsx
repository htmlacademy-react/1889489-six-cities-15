import { AppRoute, AuthorizationStatus } from '../../const';
import {Route, Routes} from 'react-router-dom';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PageFavorites from '../../pages/page-favorites/page-favorites';
import PageLogin from '../../pages/page-login/page-login';
import PageMain from '../../pages/page-main/page-main';
import PageOffer from '../../pages/page-offer/page-offer';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  offers: Offer[];
}

function App({offers}: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PageMain />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <PageFavorites offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<PageLogin />}
          />
          <Route
            path={AppRoute.Offer}
            element={<PageOffer />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
