import {createAction} from '@reduxjs/toolkit';
import { AppRoute } from '../const';

//export const loadOffers = createAction<Offer[]>('data/loadOffers');

//export const loadOffer = createAction<OfferId>('data/loadOffer');

//export const loadNearbyOffer = createAction<Offer[]>('data/loadNearbyOffer');

//export const loadComments = createAction<Comments[]>('data/loadComments');

//export const changeCity = createAction<SixCities>('six-cities/changeCity');

//export const changeSortingType = createAction<TypesOfSorting>('six-cities/changeSortingType');

// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

//export const setUserName = createAction<string>('user/setUserName');

//export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('six-cities/redirectToRoute');
