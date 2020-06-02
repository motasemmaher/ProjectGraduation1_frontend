import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../business/HomePage/HomePage.component';
import { BusinessComponent } from './business.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'homepage'
      },
      {
        path: 'homepage',
        component: HomePageComponent
      },
      {
        path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
      },
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }

