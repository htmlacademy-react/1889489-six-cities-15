import { AuthorizationStatus, TypesOfSorting } from '../const.js';
import {store} from '../store/index.js';
import { Comments, Offer, OfferId } from './offer.js';
import { SixCities } from './sixCities.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userName: string;
};

export type SixCitiesData = {
  offers: Offer[];
  offer: OfferId | null;
  nearbyOffer: Offer[];
  comments: Comments[];
  isOffersDataLoading: boolean;
  hasError: boolean;
};

export type SixCitiesProcess = {
  sortingType: TypesOfSorting;
  city: SixCities;
};
