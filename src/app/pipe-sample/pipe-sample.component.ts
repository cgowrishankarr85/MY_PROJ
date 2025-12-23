import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrl: './pipe-sample.component.css'
})
export class PipeSampleComponent {

  product: Product;
  DOB: Date;
  router = inject(Router);
  constructor() {
    this.product = new Product(107, "LapTop", "L001", 45000);
    this.DOB = new Date("1985-11-03");
  }

  redirect() {
    this.router.navigate(['dir', this.product.productId], {
      queryParams: {
        city: 'bangalore',
        country: 'india'
      }
    })
  }

}
