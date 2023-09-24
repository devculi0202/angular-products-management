import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigateComponent } from '../modules/navigate/navigate.component';
import { HomeComponent } from '../modules/home/home.component';
import { ModelViewsModule } from '../modules/model-views/model-views.module';
import { ModelViewsComponent } from '../modules/model-views/model-views.component';
import { FormComponent } from '../modules/form/form.component';
import { FormModule } from '../modules/form/form.module';
import { RestapiComponent } from '../modules/restapi/restapi.component';
import { RestapiModule } from '../modules/restapi/restapi.module';

const routes: Routes = [
  {
    path: 'knowledge',
    component: HomeComponent,
    children: [
      {
      component: NavigateComponent,
      path: 'routing',
      loadChildren: () => import('../modules/navigate/navigate.module').then(m => m.NavigateModule)
      },
      {
        component: ModelViewsComponent,
        path: 'model-views',
        loadChildren: () => import('../modules/model-views/model-views.module').then(m => ModelViewsModule)
      },
      {
        component: FormComponent,
        path: 'form',
        loadChildren: () => import('../modules/form/form.module').then(m => FormModule)
      },
      {
        component: RestapiComponent,
        path: 'restapi',
        loadChildren: () => import('../modules/restapi/restapi.module').then(m => RestapiModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
