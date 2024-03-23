import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortingType, loadOffers, requireAuthorization, setOffersDataLoadingStatus, setUserName } from './action';
import { SixCities } from '../types/sixCities';
import { AuthorizationStatus, TypesOfSorting } from '../const';
import { Offer } from '../types/offer';

const INITIAL_CITY: SixCities = 'Paris';

type InitalState = {
  city: SixCities;
  offers: Offer[];
  sortingType: TypesOfSorting;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  userName: string;
}

const initialState: InitalState = {
  city: INITIAL_CITY,
  offers: [],
  sortingType: TypesOfSorting.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  userName: '',
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserName, (state, action) => {
      state.userName = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
