import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store/root-store.module'
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { LandingPageStoreModule } from './landing-page/store/landing-page-store.module';
import { HeaderComponentComponent } from './header-component/header-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ArticlePageComponent,
    HeaderComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    RootStoreModule,
    LandingPageStoreModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
