import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  NbCheckboxModule, NbAlertModule, NbStepperModule, NbInputModule,
  NbSidebarModule, NbMenuModule, NbLayoutModule,
  NbButtonModule, NbIconModule, NbActionsModule, NbSelectModule, NbUserModule, NbContextMenuModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { UserApiService } from './Services/user/userApi.service';
import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from '../business/HomePage/HomePage.component';
import { SideBarComponent } from '../business/SideBar/SideBar.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    BusinessComponent,
    HomePageComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NbAlertModule,
    NbCheckboxModule,
    NbStepperModule,
    NbInputModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbSelectModule,
    NbMenuModule,
    BusinessRoutingModule,
    HeaderModule,
    SharedModule,
    NbContextMenuModule
  ],
  providers: [
    UserApiService
  ],

})
export class BusinessModule { }
