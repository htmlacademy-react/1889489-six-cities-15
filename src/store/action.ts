import {createAction} from '@reduxjs/toolkit';
import { SixCities } from '../types/sixCities';
import { Offer } from '../types/offer';

export const loadOffers = createAction<{offers: Offer[]}>('offers/loadOffers');

export const changeCity = createAction<{city: SixCities}>('offers/changeCity');
