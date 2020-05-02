import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Header/Header.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './SideBar/SideBar.component'
import { NbThemeModule, NbChatModule, NbListModule, NbMenuService, NbSidebarModule, NbContextMenuModule, NbSidebarService, NbCardModule, NbMenuModule, NbLayoutModule, NbButtonModule, NbIconModule, NbSearchModule, NbActionsModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import "@angular/compiler";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import { RegisterComponent } from './Register/Register.component';
import { AppComponent } from './app.component';
import { UserApiService } from './Services/userApi.service'
import { SharedModule } from './shared/shared.module'
import { ChatComponent } from './shared/Chat/Chat.component'

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomePageComponent,
      SideBarComponent,
      RegisterComponent,
      ChatComponent
   ],
   imports: [
      NbChatModule,
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
                  endpoint: "/v-login",
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
      UserApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
