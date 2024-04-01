import { NameSpace } from '../../const';
import { Comments, Offer, OfferId } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffer = (state: State): OfferId | null => state[NameSpace.Data].offer;
export const getNearbyOffer = (state: State): Offer[] => state[NameSpace.Data].nearbyOffer;
export const getComments = (state: State): Comments[] => state[NameSpace.Data].comments;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
