import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterGarageOwner } from './RegisterGarageOwner/RegisterGarageOwner.component';
import { RegisterCarOwner } from './RegisterCarOwner/RegisterCarOwner.component';
import { NbCheckboxModule, NbAlertModule, NbStepperModule, NbInputModule, NbListModule, NbCardModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { AuthServiceService } from './service/auth/AuthService.service';


@NgModule({
  declarations: [
    RegisterGarageOwner,
    RegisterCarOwner
  ],
  providers: [
    AuthServiceService,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbCheckboxModule,
    NbAlertModule,
    NbStepperModule,
    FormsModule,
    NbInputModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
  ]
})
export class AuthModule { }
