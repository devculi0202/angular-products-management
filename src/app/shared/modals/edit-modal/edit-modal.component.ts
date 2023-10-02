import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EditModalService } from './edit-modal.service';
import { CloseModalDirective } from '../../directives/close-modal.directive';
import { Product } from 'src/app/data/types/Product';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit{
  
  product = new Product();
  constructor(private editModalService: EditModalService, private el: ElementRef) {

  }
  ngOnInit(): void {
    
  }

  closeModal(){
    this.editModalService.closeModal();
    const element = this.el.nativeElement;
    element.querySelector('.overlay').style.display = 'none';
    element.querySelector('.modal').style.display = 'none';
  }

  openModal(id: any){
    const element = this.el.nativeElement;
    element.querySelector('.overlay').style.display = 'block';
    element.querySelector('.modal').style.display = 'block';
    this.product = this.editModalService.openModal(id);
    
  }




}
