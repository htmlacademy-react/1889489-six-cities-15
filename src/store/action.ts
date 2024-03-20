import {createAction} from '@reduxjs/toolkit';
import { SixCities } from '../types/sixCities';
import { Offer } from '../types/offer';
import { AuthorizationStatus, TypesOfSorting } from '../const';

export const loadOffers = createAction<Offer[]>('offers/loadOffers');

export const changeCity = createAction<SixCities>('offers/changeCity');

export const changeSortingType = createAction<TypesOfSorting>('offers/changeSortingType');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
