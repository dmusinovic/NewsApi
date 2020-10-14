import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, tap, withLatestFrom, switchMap, exhaustMap } from 'rxjs/operators';
import { NewsApiService } from '../../news-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPageStoreSelectors, LandingPageStoreState } from '.';

@Injectable()
export class LandingPageStoreEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly service: NewsApiService,
        private readonly store$: Store<LandingPageStoreState.State>,
        private readonly snackBar: MatSnackBar,
        private router: Router) { }

    @Effect() topHeadlinesRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetTopHeadlinesRequestAction>(featureActions.ActionTypes.GET_TOP_HEADLINES_REQUEST),
        exhaustMap(() => {
            return this.service.getTopHeadlines()
                .pipe(
                    map(result => {
                        return new featureActions.GetTopHeadlinesSuccessAction({ topHeadlines: result });
                    }),
                    catchError(error =>
                        of(new featureActions.GetTopHeadlinesFailureAction({ error })))
                );
        })
    );

    @Effect() allHeadlinesRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetAllHeadlinesRequestAction>(featureActions.ActionTypes.GET_ALL_HEADLINES_REQUEST),
        withLatestFrom(this.store$.select(LandingPageStoreSelectors.selectTotalNumbers), this.store$.select(LandingPageStoreSelectors.selectSearchTerm),
            this.store$.select(LandingPageStoreSelectors.selectSortBy)),
        switchMap(([_, totalNumbers, searchTerm, sortBy]) => {
            if (searchTerm) {
                // if searchTerm presented get headlines from 'everything' endpoint
                return this.service.getFilteredHeadlines(totalNumbers.toString(), searchTerm, sortBy)
                    .pipe(
                        map(result => {
                            return new featureActions.GetAllHeadlinesSuccessAction({ allHeadlines: result });
                        }),
                        catchError(error =>
                            of(new featureActions.GetAllHeadlinesFailureAction({ error })))
                    );
            }
            else {
                // else get headlines from 'top-headlines' endpoint
                return this.service.getTopHeadlines(totalNumbers.toString())
                    .pipe(
                        map(result => {
                            return new featureActions.GetAllHeadlinesSuccessAction({ allHeadlines: result });
                        }),
                        catchError(error =>
                            of(new featureActions.GetAllHeadlinesFailureAction({ error })))
                    );
            }
        })
    );

    @Effect() filteredHeadlinesRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetFilteredHeadlinesRequestAction>(featureActions.ActionTypes.GET_FILTERED_HEADLINES_REQUEST),
        exhaustMap((action: featureActions.GetFilteredHeadlinesRequestAction) => {
            return this.service.getFilteredHeadlines(null, action.payload.searchTerm, action.payload.sortBy)
                .pipe(
                    map(result => {
                        return new featureActions.GetFilteredHeadlinesSuccessAction({ filteredHeadlines: result });
                    }),
                    catchError(error =>
                        of(new featureActions.GetFilteredHeadlinesFailureAction({ error })))
                );
        })
    );

    @Effect() getArticleRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetArticleRequestAction>(featureActions.ActionTypes.GET_ARTICLE_REQUEST),
        withLatestFrom(this.store$.select(LandingPageStoreSelectors.selectSearchTerm)),
        switchMap(([action, searchTerm]: [featureActions.GetArticleRequestAction, string]) => {
            return this.service.getArticle(action.payload.articleTitle, searchTerm)
                .pipe(
                    map(result => {
                        if (result.articles != null) {
                            var selectedArticle = result.articles.find(article => article.title == action.payload.articleTitle);
                            return selectedArticle ? new featureActions.GetArticleSuccessAction({ article: selectedArticle }) : new featureActions.GetArticleFailureAction({ error: "Not found" });
                        }
                    }),
                    catchError(error =>
                        of(new featureActions.GetArticleFailureAction({ error })))
                );
        })
    );

    @Effect({ dispatch: false }) getArticleSuccessEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetArticleSuccessAction>(
            featureActions.ActionTypes.GET_ARTICLE_SUCCESS
        ),
        tap((action: featureActions.GetArticleSuccessAction) => {
            this.router.navigate(['./article-page'], { queryParams: { articleTitle: action.payload.article.title } });
        })
    );

    @Effect({ dispatch: false }) getArticleFailureEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetArticleFailureAction>(
            featureActions.ActionTypes.GET_ARTICLE_FAILURE
        ),
        tap((action: featureActions.GetArticleFailureAction) => {
            // if article not found navigate to landing page
            this.router.navigate(['./landing-page']);
            this.snackBar.open(action.payload.error);
        })
    );
}