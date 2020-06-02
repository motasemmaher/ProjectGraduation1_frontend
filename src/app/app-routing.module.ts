import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PreloadAllModules } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'business'
      },
      {
        path: 'business',
        loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
