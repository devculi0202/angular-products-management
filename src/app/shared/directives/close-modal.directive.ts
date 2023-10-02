import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCloseModal]'
})
export class CloseModalDirective {

  @Input() 
  appCloseModal: boolean;

  constructor(private el: ElementRef) {

   }

   @HostListener('click') 
   onClick() {
    console.log('hahahahahaha',this.appCloseModal)
    if(!this.appCloseModal){
      this.closeModal();
    }
    else {
      this.openModal();
    }
  }
  
  closeModal(){
    const element = this.el.nativeElement;
    const modalElement = element.querySelector('.modal');
    modalElement.style.display = 'none'; 
    element.style.display = 'none';
  }

  openModal(){
    const element = this.el.nativeElement;
    const modalElement = element.querySelector('.modal');
    modalElement.style.display = 'block'; 
    element.style.display = 'block';
  }

  
  


}
