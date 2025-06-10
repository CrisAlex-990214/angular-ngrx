import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductDto } from './product-dto';

export class ProductService implements InMemoryDbService {
  createDb() {
    let products: ProductDto[] = [
      { id: 1, imageUrl: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg', title: 'Earthen Bottle', price: 48 },
      { id: 2, imageUrl: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg', title: 'Nomad Tumbler', price: 35 },
      { id: 3, imageUrl: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg', title: 'Focus Paper Refill', price: 89 },
      { id: 4, imageUrl: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg', title: 'Machined Mechanical Pencil', price: 35 },
      { id: 5, imageUrl: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg', title: 'Focus Card Tray', price: 64 },
      { id: 6, imageUrl: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg', title: 'Focus Multi-Pack', price: 39 },
      { id: 7, imageUrl: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg', title: 'Brass Scissors', price: 50 },
      { id: 8, imageUrl: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg', title: 'Focus Carry Pouch', price: 32 }
    ];
    return { products };
  }
} 
