import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service'

import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

  curentUser: any = [];
  constructor(private auth: AuthService,private spinner: NgxSpinnerService) { }
  showSpinner() {
    this.spinner.show(undefined, { fullScreen: true });
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  changeOptions() {
    this.spinner.show(undefined,
      {
        type: 'square-spin',
        size: 'medium',
        bdColor: 'rgba(100,149,237, .8)',
        color: 'white',
        fullScreen: false
      }
    );
    setTimeout(() => this.spinner.hide(), 5000);
  }

  ngOnInit(): void {
    this.spinner.show(undefined,
      {
        type: 'square-spin',
        size: 'medium',
        bdColor: 'rgba(100,149,237, .8)',
        color: 'white',
        fullScreen: false
      }
    );
    setTimeout(() => this.spinner.hide(), 5000);



    this.auth.initCurrentUser();
    
    this.auth.currenUser.subscribe({
      next: (result) => {
        this.curentUser = result;
      }
    })
  }

 
}
