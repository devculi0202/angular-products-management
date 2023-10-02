import { EventEmitter, Injectable } from '@angular/core';
import { Product, ProductType } from '../types/Product';
import { BehaviorSubject, Observable, map, retry } from 'rxjs';
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
  }

  findProductById(id: number): any {
    return this.products.find(product => product.productId === id) || undefined;
  }

  sendProductEvent(product: Product) {
    this.productEmitEvent.next(product);
  }

  getProducts(): Observable<Array<Product>> {
    //transform the data that is got from api to list Product object
    return this.httpClient.get<Array<Product>>(environment.hostUrl + '/product').pipe(retry(1)).
    pipe(map(dataArr => {
      const products = new Array<Product>;
      for (let data of dataArr) {
        const product = Product.fromHttp(data);
        products.push(product);
      }
      return products;
    }));
  }

  getProduct(id: any): Observable<Product> {
    return this.httpClient.get<Product>(environment.hostUrl + '/product/'+id).pipe(retry(1)).pipe(map(
      data=>{
        let product = new Product();
        product = Product.fromHttp(data);
        return product;
     }
    ));
  }
}
