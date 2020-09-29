import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrangDatVeComponent} from './trang-dat-ve.component'



@NgModule({
  declarations: [TrangDatVeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TrangDatVeComponent
  ]
})
export class TrangDatVeModule { }
