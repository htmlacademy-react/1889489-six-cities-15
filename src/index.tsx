import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/aap/aap';
import { offers } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOfferAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App
        offers = {offers}
      />
    </Provider>
  </React.StrictMode>
);
