import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthComponent } from './auth.component';
import { SignupGuard } from 'src/app/core/guard/signup.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'


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
    RouterModule
  ]
})
export class AuthModule { }
