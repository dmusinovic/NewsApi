import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

// tslint:disable-next-line:only-arrow-functions
export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.GET_TOP_HEADLINES_SUCCESS: {
      return {
        ...state,
        headlines: action.payload.topHeadlines.articles,
        totalResults: action.payload.topHeadlines.totalResults > 100 ? 100 : action.payload.topHeadlines.totalResults,
        showMore: action.payload.topHeadlines.articles.length < action.payload.topHeadlines.totalResults,
        searchTerm: undefined,
        sortBy: undefined
      };
    }
    case ActionTypes.GET_ALL_HEADLINES_SUCCESS: {
      return {
        ...state,
        headlines:
          action.payload.allHeadlines.articles.slice(0,
            (state.headlines.length + 20) > state.totalResults ?
              state.totalResults : state.headlines.length + 20),
        showMore: state.headlines.length + 20 < (action.payload.allHeadlines.totalResults > 100 ? 100 : action.payload.allHeadlines.totalResults)
      };
    }
    case ActionTypes.GET_FILTERED_HEADLINES_REQUEST: {
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        sortBy: action.payload.sortBy
      }
    }
    case ActionTypes.GET_FILTERED_HEADLINES_SUCCESS: {
      return {
        ...state,
        headlines: action.payload.filteredHeadlines.articles,
        showMore: action.payload.filteredHeadlines.articles.length < action.payload.filteredHeadlines.totalResults,
        totalResults: action.payload.filteredHeadlines.totalResults > 100 ? 100 : action.payload.filteredHeadlines.totalResults
      }
    }
    case ActionTypes.GET_ARTICLE_SUCCESS: {
      return {
        ...state,
        article: action.payload.article
      };
    }

    default: {
      return state;
    }
  }
}
