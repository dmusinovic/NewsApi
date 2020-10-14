import { Component, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LandingPageStoreState } from '../landing-page/store';
import { GetFilteredHeadlinesRequestAction, GetTopHeadlinesRequestAction } from '../landing-page/store/actions';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements DoCheck {
  formGroup: FormGroup;
  sortOptions: Array<any>;
  showFilerOptions: boolean;
  disableSort: boolean;
  screenWidth: any;
  constructor(private readonly formBuilder: FormBuilder, private readonly landingPageStore$: Store<LandingPageStoreState.State>, private readonly route: ActivatedRoute) {
    this.formGroup = this.formBuilder.group({
      searchTerm: [undefined],
      sortBy: [undefined]
    });
    
// set screenWidth on page load
this.screenWidth = window.innerWidth;
window.onresize = () => {
  // set screenWidth on screen size change
  this.screenWidth = window.innerWidth;
};

    this.showFilerOptions = true;
    this.sortOptions = new Array<any>();
    this.disableSort = true;
    this.sortOptions.push({ value: null, text: "None" }, { value: "publishedAt", text: "Sort by published date" }, { value: "relevance", text: "Sort by relevance" }, { value: "popularity", text: "Sort by popularity" });
  }

  ngDoCheck(): void {
    //filter options should not be displayed on article page
    this.showFilerOptions = !(this.route.snapshot.queryParams.articleTitle);

    //sort option should be disabled if search term is not presented
    this.disableSort = !this.formGroup.value.searchTerm;

    //if search term is removed, clear sort selection
    if(this.disableSort){
    this.formGroup.controls['sortBy'].setValue(null);
    }
  }

  applyFilters() {
    //if search term presented -> filter headlines
    if (this.formGroup.value.searchTerm) {
      this.landingPageStore$.dispatch(new GetFilteredHeadlinesRequestAction({ searchTerm: this.formGroup.value.searchTerm, sortBy: this.formGroup.value.sortBy }));
    }
    // when search term not presented get top headlines
    else {
      this.landingPageStore$.dispatch(new GetTopHeadlinesRequestAction());
    }
  }

}
