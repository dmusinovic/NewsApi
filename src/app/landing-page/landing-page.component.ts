import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LandingPageStoreSelectors, LandingPageStoreState } from './store';
import { GetAllHeadlinesRequestAction, GetArticleRequestAction, GetFilteredHeadlinesRequestAction, GetTopHeadlinesRequestAction } from './store/actions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  searchTerm$ = this.landingPageStore$.select(LandingPageStoreSelectors.selectSearchTerm);
  sortBy$ = this.landingPageStore$.select(LandingPageStoreSelectors.selectSortBy);
  searchTerm: string;
  sortBy: string;
  topHeadlines$ = this.landingPageStore$.select(LandingPageStoreSelectors.selectTopHeadlines);
  showMore$ = this.landingPageStore$.select(LandingPageStoreSelectors.selectShowMore);
  private readonly subscriptions: Array<Subscription> = [];

  constructor(private readonly landingPageStore$: Store<LandingPageStoreState.State> ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.sortBy$.subscribe(event => this.sortBy = event)
    );
    this.subscriptions.push(
      this.searchTerm$.subscribe(event => this.searchTerm = event)
    );
    if(this.searchTerm){
      this.landingPageStore$.dispatch(new GetFilteredHeadlinesRequestAction({searchTerm: this.searchTerm, sortBy: this.sortBy}));
    }
    else {
      this.landingPageStore$.dispatch(new GetTopHeadlinesRequestAction());
    }
  }

  readMore(articleTitle: string) {
    this.landingPageStore$.dispatch(new GetArticleRequestAction({articleTitle: articleTitle}));
  }

  showMore() {
    // load more headlines
    this.landingPageStore$.dispatch(new GetAllHeadlinesRequestAction());
  }
}
