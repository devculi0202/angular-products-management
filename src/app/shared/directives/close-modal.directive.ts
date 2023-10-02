import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCloseModal]'
})
export class CloseModalDirective {

  constructor(private el: ElementRef) {
   }

   @HostListener('click')
   onClick()
   {

    this.closeModal();
   }
  
  closeModal(){
    const element = this.el.nativeElement;
    const modalElement = element.querySelector('.modal');
    modalElement.style.display = 'none'; 
    element.style.display = 'none';
  }

  openModal(){
    const element = this.el.nativeElement;
    element.style.display = 'block';
    const modalElement = element.querySelector('.modal');
    modalElement.style.display = 'block'; 
  }
}
