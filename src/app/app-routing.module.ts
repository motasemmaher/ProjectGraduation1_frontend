import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './HomePage/HomePage.component'
import { RegisterGarageOwner } from "./RegisterGarageOwner/RegisterGarageOwner.component";
import { RegisterCarOwner } from "./RegisterCarOwner/RegisterCarOwner.component";

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [
  // ... 
  {
    path: 'homepage',
    component: HomePageComponent
  },
  {
    path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) 
  },
  {

    path: 'auth',
    component: NbAuthComponent,
    children: [
      // {
      //   path: '',
      //   component: LoginComponent,
      // },
      {
        path: 'garage-owner/register',
        component: RegisterGarageOwner
      },
      {
        path: 'car-owner/register',
        component: RegisterCarOwner
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
