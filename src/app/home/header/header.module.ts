import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {RouterModule,Routes } from '@angular/router';
// import { TrangChuComponent } from '../trang-chu/trang-chu.component';

const routes: Routes = [
 
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,FontAwesomeModule,
    RouterModule.forChild(routes),
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
