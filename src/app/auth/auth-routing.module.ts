import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterGarageOwner } from "./RegisterGarageOwner/RegisterGarageOwner.component";
import { RegisterCarOwner } from "./RegisterCarOwner/RegisterCarOwner.component";
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes =
  [
    {
      path: '',
      component: NbAuthComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'login'
        },
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
          redirectTo: 'car-owner/register'
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
