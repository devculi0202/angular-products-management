import { EventEmitter, Injectable } from '@angular/core';
import { Product, ProductType } from '../types/Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product>;
  productEmitEvent = new BehaviorSubject<any>({});
  productSelectedObservable = this.productEmitEvent.asObservable();


  constructor(private httpClient: HttpClient) {
    this.products = new Array<Product>;

    const product1 = new Product();
    product1.productId = 1;
    product1.productName = 'Old';
    product1.productDescription= 'product1'
    product1.productType = ProductType.CONVENIENCE;
    product1.productPrice = 12;

    const product2 = new Product();
    product2.productId = 2;
    product2.productDescription= 'product2'
    product2.productName = 'Oto';
    product2.productType = ProductType.SHOPPING;
    product2.productPrice = 1200;

    this.products.push(product1);
    this.products.push(product2);
  }

  findProductById(id: number): any{
   return this.products.find(product => product.productId ===id) || undefined;
  }

  sendProductEvent(product: Product){

   this.productEmitEvent.next(product);
  }

  updateProduct(productUpdate: Product){
  }

  getProducts(): Observable<Product>{
    return this.httpClient.get<Product>(environment.hostUrl + '/product');
  }



}
