import { AppRoute, AuthorizationStatus } from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PageFavorites from '../../pages/page-favorites/page-favorites';
import PageLogin from '../../pages/page-login/page-login';
import PageMain from '../../pages/page-main/page-main';
import PageOffer from '../../pages/page-offer/page-offer';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offer } from '../../types/offer';

type AppScreenProps = {
  citiesPlacesCount: number;
  offers: Offer[];
}

function App({citiesPlacesCount, offers}: AppScreenProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PageMain citiesPlacesCount={citiesPlacesCount} offers={offers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <PageFavorites />
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
