import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { SharedModule } from '../shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreInfoComponent } from './store-info/store-info.component';
import { NbTabsetModule, NbRouteTabsetModule, NbInputModule, NbButtonModule, NbToggleModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule,
    FormsModule,
    NbAuthModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbInputModule,
    NbButtonModule,
    NbToggleModule,
    NbSelectModule,
    NbSpinnerModule
  ],
  declarations: [StoreComponent, StoreInfoComponent
  ],
})
export class StoreModule { }
