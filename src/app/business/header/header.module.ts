import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NbCardModule, NbContextMenuModule, NbUserModule, NbListModule, NbSearchModule, NbMenuService } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbContextMenuModule,
    NbUserModule,
    NbSearchModule,
    NbListModule,
    SharedModule
  ],
  declarations: [HeaderComponent],
  providers: [
    NbMenuService
  ],
  exports:
    [
      CommonModule,
      HeaderComponent
    ]
})
export class HeaderModule { }

