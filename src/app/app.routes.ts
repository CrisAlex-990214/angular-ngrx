import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Product } from './product/product';

export const routes: Routes = [
    { path: '', component: ProductList },
    { path: 'product', component: Product }
];
