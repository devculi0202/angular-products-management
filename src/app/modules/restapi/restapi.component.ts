import { Component } from '@angular/core';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent {

  data = 'hehe';
  constructor(private productService: ProductService) {  
    this.productService.getProducts().subscribe((product: Product) =>{
      const newProduct = Product.fromHttp(product);
      console.log(newProduct);
    })
  }

}
