import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  product: Product;


  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.productSelectedObservable.subscribe(product => {
      this.product = product;
      console.log(this. product.productName);
    });
  }


  onSubmit(){
    console.log(this.product);

  }

}
