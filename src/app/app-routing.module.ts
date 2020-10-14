import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'article-page', component: ArticlePageComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
