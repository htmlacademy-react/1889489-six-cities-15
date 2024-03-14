import {createReducer} from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';
import { SixCities } from '../types/sixCities';
import { offers } from '../mocks/offers';

const INITIAL_CITY: SixCities = 'Paris';

const initialState = {
  city: INITIAL_CITY as SixCities,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export {reducer};
