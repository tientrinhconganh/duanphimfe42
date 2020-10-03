import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from '../../core/services/auth.service';

import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import {faFacebook,faGoogle} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: SocialUser;
  signinForm: FormGroup
  faFacebook=faFacebook
  faGoogle=faGoogle
  constructor(private auth: AuthService, private router : Router,private authService: SocialAuthService) {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('',[Validators.required]),
      matKhau: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    })
   }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }

  dangNhap(){
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid) return;

    console.log(this.signinForm.value);
    this.auth.dangNhap(this.signinForm.value).subscribe({
      next: res => console.log(res),
      error: err => console.log(err.error),
      complete: () => {
        console.log('Đăng nhập thành công');
        this.router.navigate(['/'])
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }

}
