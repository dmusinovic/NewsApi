import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LandingPageStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('landingPage', featureReducer),
    EffectsModule.forFeature([LandingPageStoreEffects])
  ],
  providers: [LandingPageStoreEffects]
})
export class LandingPageStoreModule {

}
