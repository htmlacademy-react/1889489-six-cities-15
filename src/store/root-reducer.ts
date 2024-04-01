import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { sixCitiesProcess } from './six-cities-process/six-cities-process';
import { sixCitiesData } from './six-cities-data/six-cities-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: sixCitiesData.reducer,
  [NameSpace.Sixities]: sixCitiesProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
