import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { reducer } from '../reducer';
import {Middleware} from 'redux';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'six-cities/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
