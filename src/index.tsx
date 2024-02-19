import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/aap/aap';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App citiesPlacesCount={Setting.citiesPlacesCount} />
  </React.StrictMode>
);
