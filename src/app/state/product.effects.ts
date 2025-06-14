import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { ProductDto } from "../product-dto";
import { getProductsAction, loadProductsAction } from "./product.actions";

export class ProductEffects {

    http = inject(HttpClient);
    action = inject(Actions);

    products$ = createEffect(() => 
        this.action.pipe(
            ofType(getProductsAction),
            mergeMap(() => this.http.get<ProductDto[]>('api/products').pipe(
                map(products => loadProductsAction({ products }))
                )
        )
    ));
}