import { Component, OnInit } from '@angular/core';
import { EditModalService } from './edit-modal.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  isModalVisible: boolean;

  constructor(private editModalService: EditModalService) {

  }
  ngOnInit(): void {
  }
  
  closeModal(){
    this.editModalService.closeModal();
    this.isModalVisible = this.editModalService.isModalOpen();
  }



}
