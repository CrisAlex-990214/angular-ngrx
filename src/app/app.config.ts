import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { routes } from './app.routes';
import { ProductService } from './product-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(InMemoryWebApiModule.forRoot(ProductService))
  ]
};
