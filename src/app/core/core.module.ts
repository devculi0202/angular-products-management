import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

/** 
 * This module core is for classes used by app.module. 
 * Resources which are always loaded such as route guards, HTTP interceptors, and application level services, 
 * such as the ThemeService and logging belong in this directory.
 */
