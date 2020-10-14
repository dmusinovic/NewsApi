import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreReduces } from './router-store';
import { CustomSerializer } from './router-store/router-state.serializer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(RouterStoreReduces.reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    })
  ],
  declarations: [],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class RootStoreModule { }
