import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomHttpInterceptor } from './http.interceptor';

export const InterceptorProvider: any = {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
};
