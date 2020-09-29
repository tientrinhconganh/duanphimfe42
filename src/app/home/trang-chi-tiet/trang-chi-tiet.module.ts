import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrangChiTietComponent} from './trang-chi-tiet.component'



@NgModule({
  declarations: [TrangChiTietComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TrangChiTietComponent
  ]
})
export class TrangChiTietModule { }
