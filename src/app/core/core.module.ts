import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppSettingsService } from './app-settings-service';
import { InterceptorProvider } from './interceptor.provider';

export function initAppConfig(appSettingsService: AppSettingsService) {
  return () => appSettingsService.load();
}

@NgModule({
  imports: [],
  providers: [
    InterceptorProvider,
    AppSettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfig,
      deps: [AppSettingsService],
      multi: true
    }
  ]
})
export class CoreModule { }
