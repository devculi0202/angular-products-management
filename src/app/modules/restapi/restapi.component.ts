import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';
import { EditModalComponent } from 'src/app/shared/modals/edit-modal/edit-modal.component';
import { EditModalService } from 'src/app/shared/modals/edit-modal/edit-modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit, OnDestroy {

  @ViewChild('editModal', { static: false })
  editModal: EditModalComponent;

  productId: any;

  products: Array<Product>;
  isModalVisible = false;
  product: Product;
  subscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  openEditModal(productId: any) {
    this.isModalVisible = true;
    this.productId = productId;
  }

  closeEditModal() {
    this.isModalVisible = false;
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadProducts() {
    this.subscription = this.productService.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

  deleteProduct(id: any) {
    this.subscription = this.productService.deleteProduct(id).subscribe(
      (response) => {
        console.log(response);
        this.loadProducts();
      },
      (error) => {
        console.log(error);
      });
  }

}
