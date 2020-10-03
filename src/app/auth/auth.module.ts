import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthComponent } from './auth.component';
import { SignupGuard } from 'src/app/core/guard/signup.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent, 
      canDeactivate: [SignupGuard]}
    ]
  }
]

@NgModule({
  declarations: [SignupComponent, SigninComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule,
    SocialLoginModule,
    FontAwesomeModule,

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('561602290896109'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
})
export class AuthModule { }
