import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';

@Component({
  selector: 'app-model-views',
  templateUrl: './model-views.component.html',
  styleUrls: ['./model-views.component.css']
})
export class ModelViewsComponent implements OnInit {
  products: Array<Product>;
  
  productSelected: Product;
  
  constructor(private productService: ProductService , private router: Router) {
    this.products = productService.products;
  }
  ngOnInit(): void {
  }   
  
  viewProduct(id: number) {
    this.productSelected = this.productService.findProductById(id);
    this.productService.sendProductEvent(this.productSelected);
    this.router.navigate(['knowledge', 'model-views','view', id]);
  }
  
}
