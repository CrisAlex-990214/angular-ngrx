import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducers";

const productSelector = createFeatureSelector<ProductState>('product');

export const searchNameSelector = createSelector(productSelector, x=> x.searchName);
export const loadProductsSelector = createSelector(productSelector, x=> x.products);