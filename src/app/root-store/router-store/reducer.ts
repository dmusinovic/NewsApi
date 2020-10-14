import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { State } from './router-state.serializer';

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};
