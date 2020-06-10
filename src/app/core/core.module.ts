import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbThemeService, NbThemeModule, NbMenuModule, NbSidebarModule, NbMenuService } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule, NbTokenService, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { RouterModule } from '@angular/router';
import { BusinessModule } from '../business/business.module';

@NgModule({
  imports: [
    HttpClientModule,
    FontAwesomeModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:4445/user',
          login: {
            endpoint: '/login',
            redirect: {
              success: '/business',
              failure: null
            },
          },
          logout: {
            endpoint: '/logout',
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
    RouterModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    BusinessModule
  ],
  providers: [
    NbThemeService,
    NbTokenService
  ],
})
export class CoreModule { }


