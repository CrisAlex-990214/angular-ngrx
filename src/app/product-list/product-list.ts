import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductDto } from '../product-dto';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe, CurrencyPipe, CommonModule, FormsModule, RouterLink],
  templateUrl: './product-list.html',
  styles: ``
})
export class ProductList implements OnInit {

  http = inject(HttpClient);

  products$!: Observable<ProductDto[]>;
  searchName!: string;

  ngOnInit() {
    this.searchProducts();
  }

  searchProducts() {
    this.products$ = this.http.get<ProductDto[]>('api/products').pipe(
      map(x => !!this.searchName ? x.filter(product => product.title.includes(this.searchName)) : x));
  }
}
