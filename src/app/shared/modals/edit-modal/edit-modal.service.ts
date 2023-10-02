import { ElementRef, Injectable } from '@angular/core';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';

@Injectable({
  providedIn: 'root'
})
export class EditModalService {
  private isModalVisible = false;
  product!: Product;

  constructor(private productService: ProductService) { }

  openModal(productId:any): Product{
    this.isModalVisible = true;
      this.productService.getProduct(productId).subscribe(data => {
        this.product = data;
      });
      return this.product;
  }

  closeModal(){
    this.isModalVisible = false;
    console.log('close', this.isModalVisible);
  }
  
  isModalOpen()
  {
    return this.isModalVisible;
  }
}