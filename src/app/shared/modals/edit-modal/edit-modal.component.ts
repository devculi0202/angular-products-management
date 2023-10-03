import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EditModalService } from './edit-modal.service';
import { Product, ProductType } from 'src/app/data/types/Product';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  product = new Product();
  productTypes = Object.values(ProductType)

  @Input()
  productId: any;

  @Output()
  modalInVisibleEvent = new EventEmitter<boolean>();

  constructor(private editModalService: EditModalService, private el: ElementRef) { }

  ngOnInit(): void {
    console.log('productId', this.productId);
    this.openModal(this.productId);

  }

  closeModal() {
    const element = this.el.nativeElement;
    element.querySelector('.overlay').style.display = 'none';
    element.querySelector('.modal').style.display = 'none';
    this.modalInVisibleEvent.emit(false);
  }

  openModal(id: any) {
    console.log('id', id);
    const element = this.el.nativeElement;
    element.querySelector('.overlay').style.display = 'block';
    element.querySelector('.modal').style.display = 'block';
    this.editModalService.getProductFromAPI(id).subscribe(data => {
      this.product = data;
    });
  }

  saveProduct() {
    this.editModalService.updateProduct(this.product).subscribe(
      response => {
        console.log(response);
        this.closeModal();
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
