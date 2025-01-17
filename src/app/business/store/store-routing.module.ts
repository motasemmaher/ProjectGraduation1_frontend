import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { StoreInfoComponent } from './store-info/store-info.component';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StoreComponent,
  },
  {
    path: ':id',
    component: StoreInfoComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
