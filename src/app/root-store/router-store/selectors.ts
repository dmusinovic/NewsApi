import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { RouterStateUrl } from './router-state.serializer';

export const getRouterStoreState: MemoizedSelector<object, RouterReducerState<RouterStateUrl>>
  = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const selectRouterParams: MemoizedSelector<object, any> = createSelector(
  getRouterStoreState, routerState => routerState.state.params
);

export const selectRouterQueryParams: MemoizedSelector<object, any> = createSelector(
  getRouterStoreState, routerState => routerState.state.queryParams
);
