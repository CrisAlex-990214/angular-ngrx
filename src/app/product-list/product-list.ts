import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { featureName } from '../state/product.actions';
import { loadProductsSelector, searchNameSelector } from '../state/product.selectors';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe, CurrencyPipe, CommonModule, FormsModule, RouterLink],
  templateUrl: './product-list.html',
  styles: ``
})
export class ProductList implements OnInit {

  store = inject(Store);

  products$ = this.store.select(loadProductsSelector).pipe(
    map(x => !!this.searchName ? x.filter(product => product.title.includes(this.searchName)) : x));

  searchName!: string;

  ngOnInit() {
    this.store.select(searchNameSelector).subscribe(x => {
      this.searchName = x;
      this.store.dispatch({ type: `[${featureName}] Get Product` });
    })
  }

  searchProducts() {
    this.store.dispatch({ type: `[${featureName}] Search Name`, searchName: this.searchName });
  }
}
