import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/data/services/product.service';
import { Product } from 'src/app/data/types/Product';
import { EditModalComponent } from 'src/app/shared/modals/edit-modal/edit-modal.component';
import { Subscription } from 'rxjs';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit, OnDestroy {

  @ViewChild('editModal', { static: false})
  editModal: EditModalComponent;

  @ViewChild('confirmModal')
  confirmModal: ConfirmModalComponent;

  productId: any;
  products: Array<Product>;
  isModalVisible = false;
  isConfirmModalVisible = false;
  productIdWillDelete: any;


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

  showConfirmModal(id: any){
    this.isConfirmModalVisible = true;
    this.productIdWillDelete = id;
  }

  confirmModalOutput(data: boolean) {
     if(data){
      this.closeConfirmModal();
      this.deleteProduct(this.productIdWillDelete);
     }
     else {
      this.closeConfirmModal();
     }

  }

  closeConfirmModal(){
    this.isConfirmModalVisible = false;
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
