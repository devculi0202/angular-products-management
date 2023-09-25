import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsModule } from './product-details/product-details.module';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateProductModule } from './update-product/update-product.module';

const routes: Routes = [
  {
    path: 'view/:id',
    component: ProductDetailsComponent,
    loadChildren: () => import('./product-details/product-details.module').then(m => ProductDetailsModule)
  },
  {
    path: 'edit/:id',
    component: UpdateProductComponent,
    loadChildren: () => import('./update-product/update-product.module').then(m => UpdateProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelViewsRoutingModule { }
