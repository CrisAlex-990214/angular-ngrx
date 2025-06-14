import { createReducer, on } from "@ngrx/store";
import { loadProductsAction, searchNameAction } from "./product.actions";
import { Product } from "../product/product";
import { ProductDto } from "../product-dto";


export interface ProductState {
    searchName: string;
    products: ProductDto[];
}

export const productReducer = createReducer<ProductState>(
    { searchName: '', products: [] },
    on(searchNameAction, (state, action) => ({ ...state, searchName: action.searchName })),
    on(loadProductsAction, (state, action) => ({ ...state, products: action.products })),
);