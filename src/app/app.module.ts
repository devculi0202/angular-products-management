import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { ModelViewsComponent } from './modules/model-views/model-views.component';
import { FormComponent } from './modules/form/form.component';
import { RestapiComponent } from './modules/restapi/restapi.component';
import { ProductDetailsComponent } from './modules/model-views/product-details/product-details.component';
import { UpdateProductComponent } from './modules/model-views/update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelViewsComponent,
    FormComponent,
    RestapiComponent,
    ProductDetailsComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
