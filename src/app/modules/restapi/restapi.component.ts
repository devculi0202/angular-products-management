import { Component } from '@angular/core';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';
import { EditModalService } from 'src/app/shared/modals/edit-modal/edit-modal.service';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent {

  products: Array<Product>;
  isModalVisible: boolean;

  constructor(private productService: ProductService, private editModalService: EditModalService) {  
    this.productService.getProducts().subscribe((products: Array<Product>) =>{
     this.products = products;
     console.log(this.products);
    })
  }
  
  openEditModal(){
    console.log('open modal');
    this.editModalService.openModal();
    this.isModalVisible = this.editModalService.isModalOpen();
  }

}
