import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';
import { EditModalComponent } from 'src/app/shared/modals/edit-modal/edit-modal.component';
import { EditModalService } from 'src/app/shared/modals/edit-modal/edit-modal.service';
import { ProductDetailsModule } from '../model-views/product-details/product-details.module';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent {

  @ViewChild(EditModalComponent)
  editModalComponent!: EditModalComponent;

  products: Array<Product>;
  isModalVisible: boolean;
  product: Product;

  constructor(private productService: ProductService, private editModalService: EditModalService,) {
    this.productService.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    })
  }

  openEditModal(productId: any) {
    console.log('open modal');
    this.isModalVisible = this.editModalService.isModalOpen();
    this.editModalComponent.openModal(productId);
  }


}
