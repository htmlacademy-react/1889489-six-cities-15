import {createAction} from '@reduxjs/toolkit';
import { SixCities } from '../types/sixCities';
import { Comments, Offer, OfferId } from '../types/offer';
import { AppRoute, TypesOfSorting } from '../const';

export const loadOffers = createAction<Offer[]>('offers/loadOffers');

export const loadOffer = createAction<OfferId>('offers/loadOffer');

export const loadNearbyOffer = createAction<Offer[]>('offers/loadNearbyOffer');

export const loadComments = createAction<Comments[]>('offers/loadComments');

export const changeCity = createAction<SixCities>('offers/changeCity');

export const changeSortingType = createAction<TypesOfSorting>('offers/changeSortingType');

// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserName = createAction<string>('user/setUserName');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('six-cities/redirectToRoute');
