import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';

@Injectable({
  providedIn: 'root'
})
export class EditModalService implements OnDestroy {
  product = new Product();
  subscription: Subscription;


  constructor(private productService: ProductService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

   getProductFromAPI(productId: any): Observable<Product>{
    return this.productService.getProduct(productId);
  }

  updateProduct(product: Product): Observable<Product> {
    let body = {
      productName: product.productName,
      productDescription: product.productDescription,
      productType: product.productType,
      productPrice: product.productPrice,
      id: product.productId
    };
    console.log(body);
    return this.productService.updateProduct(body, product.productId);
  }

}