import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { routes } from './app.routes';
import { ProductService } from './product-service';
import { provideStore } from '@ngrx/store';
import { productReducer } from './state/product.reducers';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(InMemoryWebApiModule.forRoot(ProductService)),
    provideStore({ ['product']: productReducer }),
    provideEffects(ProductEffects)
  ]
};
