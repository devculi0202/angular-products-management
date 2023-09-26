import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(private productService:ProductService) {
  }
  ngOnInit(): void {
    this.productService.productSelectedObservable.subscribe(product => {
      this.product = product;
  
    });
  }




}
