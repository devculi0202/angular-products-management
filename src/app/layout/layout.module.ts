import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import ContentComponent from './content/content.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NavbarComponent,
    ContentComponent
  ]
})
export class LayoutModule { }
