import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators} from '@angular/forms'

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup

  constructor(private auth: AuthService, private router : Router,private authService: SocialAuthService) {
    this.signupForm=new FormGroup({
      taiKhoan: new FormControl('',[Validators.required]),
      matKhau: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$')
      ]),
      hoTen: new FormControl('',[Validators.required,
        Validators.pattern('^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+'),
      ]),
      soDT: new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11),
      ])
    })
   }

  ngOnInit(): void {
  }

  dangKy(){
    this.signupForm.markAllAsTouched()
    if(this.signupForm.invalid) return;

    console.log(this.signupForm);
    this.auth.dangKy(this.signupForm.value).subscribe({
      next: res => console.log(res),
      error: err => console.log(err),
      complete: () => console.log('Đăng ký thành công'),
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
