import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LandingPageStoreSelectors, LandingPageStoreState } from '../landing-page/store';
import { GetArticleRequestAction } from '../landing-page/store/actions';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
 
  article$ = this.landingPageStore$.select(LandingPageStoreSelectors.selectArticle);
  constructor(private readonly landingPageStore$: Store<LandingPageStoreState.State>, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.landingPageStore$.dispatch(new GetArticleRequestAction({articleTitle: this.route.snapshot.queryParams.articleTitle}));
  }

  goBack(): void {
    this.router.navigate(['./landing-page']);
  }

}
