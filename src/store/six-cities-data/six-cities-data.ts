import { createSlice } from '@reduxjs/toolkit';
import { SixCitiesData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchNearbyOfferAction, fetchOffersAction, fetchOfferIdAction, fetchCommentsAction, fetchAddNewCommentAction } from '../api-actions';

const initialState: SixCitiesData = {
  offers: [],
  offer: null,
  nearbyOffer: [],
  comments: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const sixCitiesData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOfferIdAction.fulfilled, (state, action) => {
        state.offer = action.payload!;
      })
      .addCase(fetchNearbyOfferAction.fulfilled, (state, action) => {
        state.nearbyOffer = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchAddNewCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
