import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreInfoComponent } from './store-info/store-info.component';
import { NbTabsetModule, NbRouteTabsetModule, NbInputModule, NbButtonModule, NbToggleModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StoreComponent,
    StoreInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbInputModule,
    NbButtonModule,
    NbToggleModule,
    NbSelectModule,
    NbSpinnerModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule {
}
