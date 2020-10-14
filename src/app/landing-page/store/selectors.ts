import {
  createFeatureSelector, createSelector, MemoizedSelector
} from '@ngrx/store';
import { State } from './state';

export const selectLandingPageState: MemoizedSelector<object, State> = createFeatureSelector<State>('landingPage');
export const selectTopHeadlines = createSelector(selectLandingPageState, ladingPageState => ladingPageState.headlines);
export const selectTotalNumbers = createSelector(selectLandingPageState, landingPageState => landingPageState.totalResults);
export const selectShowMore = createSelector(selectLandingPageState, landingPageState => landingPageState.showMore);
export const selectSortBy = createSelector(selectLandingPageState, landingPageState => landingPageState.sortBy);
export const selectSearchTerm = createSelector(selectLandingPageState, landingPageState => landingPageState.searchTerm);
export const selectArticle = createSelector(selectLandingPageState, landingPageState => landingPageState.article);
