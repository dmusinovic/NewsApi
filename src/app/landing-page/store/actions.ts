import { Action } from '@ngrx/store';
import { HeadlineArticle } from 'src/app/models/headline-article';
import { Headlines } from '../../models/headlines';

export enum ActionTypes {
  GET_TOP_HEADLINES_REQUEST = '[Top Headlines] Get Top Headlines Request',
  GET_TOP_HEADLINES_FAILURE = '[Top Headlines] Get Top Headlines Failure',
  GET_TOP_HEADLINES_SUCCESS = '[Top Headlines] Get Top Headlines Success',

  GET_ALL_HEADLINES_REQUEST = '[All Headlines] Get All Headlines Request',
  GET_ALL_HEADLINES_FAILURE = '[All Headlines] Get All Headlines Failure',
  GET_ALL_HEADLINES_SUCCESS = '[All Headlines] Get All Headlines Success',

  GET_FILTERED_HEADLINES_REQUEST = '[Filtered Headlines] Get Filtered Headlines Request',
  GET_FILTERED_HEADLINES_FAILURE = '[Filtered Headlines] Get Filtered Headlines Failure',
  GET_FILTERED_HEADLINES_SUCCESS = '[Filtered Headlines] Get Filtered Headlines Success',

  GET_ARTICLE_REQUEST = '[Article Page] Get Article Request',
  GET_ARTICLE_SUCCESS = '[Article Page] Get Article Success',
  GET_ARTICLE_FAILURE = '[Article Page] Get Article Failure',
}

export class GetTopHeadlinesRequestAction implements Action {
  readonly type = ActionTypes.GET_TOP_HEADLINES_REQUEST;
}

export class GetTopHeadlinesFailureAction implements Action {
  readonly type = ActionTypes.GET_TOP_HEADLINES_FAILURE;
  constructor(public payload: { error: any }) { }
}

export class GetTopHeadlinesSuccessAction implements Action {
  readonly type = ActionTypes.GET_TOP_HEADLINES_SUCCESS;
  constructor(public payload: { topHeadlines: Headlines }) { }
}

export class GetAllHeadlinesRequestAction implements Action {
  readonly type = ActionTypes.GET_ALL_HEADLINES_REQUEST;
}

export class GetAllHeadlinesFailureAction implements Action {
  readonly type = ActionTypes.GET_ALL_HEADLINES_FAILURE;
  constructor(public payload: { error: any }) { }
}

export class GetAllHeadlinesSuccessAction implements Action {
  readonly type = ActionTypes.GET_ALL_HEADLINES_SUCCESS;
  constructor(public payload: { allHeadlines: Headlines }) { }
}

export class GetFilteredHeadlinesRequestAction implements Action {
  readonly type = ActionTypes.GET_FILTERED_HEADLINES_REQUEST;
  constructor(public payload: { searchTerm: string, sortBy: string }) {
  }
}

export class GetFilteredHeadlinesFailureAction implements Action {
  readonly type = ActionTypes.GET_FILTERED_HEADLINES_FAILURE;
  constructor(public payload: { error: any }) { }
}

export class GetFilteredHeadlinesSuccessAction implements Action {
  readonly type = ActionTypes.GET_FILTERED_HEADLINES_SUCCESS;
  constructor(public payload: { filteredHeadlines: Headlines }) { }
}

export class GetArticleRequestAction implements Action {
  readonly type = ActionTypes.GET_ARTICLE_REQUEST;
  constructor(public payload: { articleTitle: string }) { }
}

export class GetArticleSuccessAction implements Action {
  readonly type = ActionTypes.GET_ARTICLE_SUCCESS;
  constructor(public payload: { article: HeadlineArticle }) { }
}

export class GetArticleFailureAction implements Action {
  readonly type = ActionTypes.GET_ARTICLE_FAILURE;
  constructor(public payload: { error: any }) { }
}

export type Actions =
  GetTopHeadlinesRequestAction |
  GetTopHeadlinesFailureAction |
  GetTopHeadlinesSuccessAction |
  GetAllHeadlinesRequestAction |
  GetAllHeadlinesFailureAction |
  GetAllHeadlinesSuccessAction |
  GetFilteredHeadlinesRequestAction |
  GetFilteredHeadlinesFailureAction |
  GetFilteredHeadlinesSuccessAction |
  GetArticleRequestAction |
  GetArticleSuccessAction |
  GetArticleFailureAction;
