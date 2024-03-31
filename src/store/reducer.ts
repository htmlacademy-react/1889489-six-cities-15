import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortingType, loadComments, loadNearbyOffer, loadOffer, loadOffers, setOffersDataLoadingStatus, setUserName } from './action';
import { SixCities } from '../types/sixCities';
import { TypesOfSorting } from '../const';
import { Comments, Offer, OfferId } from '../types/offer';

const INITIAL_CITY: SixCities = 'Paris';

type InitalState = {
  city: SixCities;
  offers: Offer[];
  offer: OfferId | null;
  nearbyOffer: Offer[];
  comments: Comments[];
  sortingType: TypesOfSorting;
  // authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  userName: string;
}

const initialState: InitalState = {
  city: INITIAL_CITY,
  offers: [],
  offer: null,
  nearbyOffer: [],
  comments: [],
  sortingType: TypesOfSorting.Popular,
  // authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  userName: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearbyOffer, (state, action) => {
      state.nearbyOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload;
    })
    /*.addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })*/
    .addCase(setUserName, (state, action) => {
      state.userName = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
