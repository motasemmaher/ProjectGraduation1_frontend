import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './HomePage/HomePage.component'
import { StoreComponent } from './Store/Store.component'
import { RegisterComponent } from "./RegisterStore/RegisterComponent";

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
    path: 'store',
    component: StoreComponent
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
        path: 'store/register',
        component: RegisterComponent
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
