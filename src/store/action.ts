import {createAction} from '@reduxjs/toolkit';
import { SixCities } from '../types/sixCities';
import { Offer } from '../types/offer';

export const loadOffers = createAction<Offer[]>('offers/loadOffers');

export const changeCity = createAction<SixCities>('offers/changeCity');
