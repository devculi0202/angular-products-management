import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Input()
  productId: any;
  
  @Output()
  confirmDeleteEvent = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.openConfirmModal();
  }

  openConfirmModal(){
    const element = this.el.nativeElement;
    element.querySelector('.overlay').style.display = 'block';
  }

  closeConfirmModal(){
    const element = this.el.nativeElement;
    element.querySelector('.overlay').style.display = 'none';
  }

  confirmDelete(isDelete: boolean){
    if(isDelete){
      this.confirmDeleteEvent.emit(true);
      this.closeConfirmModal();
    }
    else {
      this.confirmDeleteEvent.emit(false);
      this.closeConfirmModal();
    }
  }

}
