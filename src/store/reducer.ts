import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortingType, loadOffers } from './action';
import { SixCities } from '../types/sixCities';
// import { offers } from '../mocks/offers';
import { TypesOfSorting } from '../const';
import { Offer } from '../types/offer';

const INITIAL_CITY: SixCities = 'Paris';

const initialState = {
  city: INITIAL_CITY as SixCities,
  offers: [] as Offer[],
  sortingType: TypesOfSorting.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload;
    });
});

export {reducer};
