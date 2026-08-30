import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { apiInterceptor } from '@core/interceptors/api.interceptor';
import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIonicAngular({}),
    provideHttpClient(withInterceptors([apiInterceptor])),
  ],
};
