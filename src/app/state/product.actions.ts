import { createAction, props } from "@ngrx/store";
import { ProductDto } from "../product-dto";

export const featureName = 'product';

export const searchNameAction = createAction(
  `[${featureName}] Search Name`, props<{ searchName: string }>());

  export const getProductsAction = createAction(
  `[${featureName}] Get Product`);

  export const loadProductsAction = createAction(
  `[${featureName}] Load Products`, props<{ products: ProductDto[] }>());