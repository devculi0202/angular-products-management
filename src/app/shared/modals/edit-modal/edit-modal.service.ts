import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditModalService {
  private isModalVisible = false;

  constructor() { }

  openModal(){
    this.isModalVisible = true;
    console.log('open', this.isModalVisible);
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