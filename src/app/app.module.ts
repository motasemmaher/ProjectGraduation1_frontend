import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Header/Header.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './SideBar/SideBar.component'
import { NbThemeModule,NbCheckboxModule,NbAlertModule ,NbStepperModule, NbInputModule, NbListModule, NbMenuService, NbSidebarModule, NbContextMenuModule, NbSidebarService, NbCardModule, NbMenuModule, NbLayoutModule, NbButtonModule, NbIconModule, NbSearchModule, NbActionsModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import "@angular/compiler";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken,NbAuthToken, NbTokenService } from '@nebular/auth';
import { RegisterComponent } from "./RegisterStore/RegisterComponent";
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { StoreComponent } from './Store/Store.component'
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { UserApiService } from './Services/user/userApi.service'



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomePageComponent,
      SideBarComponent,
      RegisterComponent,
      StoreComponent

   ],
   imports: [
      FormsModule,
      FileUploadModule,
      NbAlertModule,
      NbCheckboxModule,
      NbButtonModule,
      NbStepperModule,
      NbInputModule,
      NbListModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      NbThemeModule.forRoot(),
      NbLayoutModule,
      NbEvaIconsModule,
      NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
      NbButtonModule,
      NbIconModule,
      NbSearchModule,
      NbActionsModule,
      NbSelectModule,
      NbUserModule,
      NbCardModule,
      NbMenuModule.forRoot(),
      NbContextMenuModule,
      FontAwesomeModule,
      NbThemeModule.forRoot({ name: 'dark' }),
      HttpClientModule,
      NbAuthModule.forRoot({
         strategies: [
            NbPasswordAuthStrategy.setup({
               name: 'email',
               
               baseEndpoint: "http://localhost:4445/user",
               login: {
                  endpoint: "/login",
                  redirect: {
                     success: '/homepage',
                     failure: null
                  },
               },
               register: {
                  endpoint: "/v-sign-up",
                  redirect: {
                     success: '/homepage',
                     failure: null
                  },
               },
               logout: {
                  endpoint: "/v-logout",
                  redirect: {
                     success: '/auth/login',
                     failure: null
                  },
               },
               token: {
                  class: NbAuthJWTToken,
                  key: 'token', // this parameter tells where to look for the token
               },
            }),

         ],
         forms: {},
      }),
      SharedModule
   ],
   providers: [
      NbSidebarService,
      NbMenuService,
      UserApiService,
      NbTokenService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }