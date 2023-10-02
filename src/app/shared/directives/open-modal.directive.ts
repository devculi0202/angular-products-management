import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenModal]'
})
export class OpenModalDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') 
  onClick() {
 }

 openModal(){
  console.log('zo day roi ne');
  const element = this.el.nativeElement;
  const modalElement = element.querySelector('.modal');
  modalElement.style.display = 'block'; 
  element.style.display = 'block';
 }

}
