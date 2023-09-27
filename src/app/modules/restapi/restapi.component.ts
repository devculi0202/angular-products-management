import { Component } from '@angular/core';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent {

  products: Array<Product>;
  constructor(private productService: ProductService) {  
    this.productService.getProducts().subscribe((products: Array<Product>) =>{
     this.products = products;
     console.log(this.products);
    })
  }

}
