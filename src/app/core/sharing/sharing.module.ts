import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipe/pipe.module';
import {ModalTrailerComponent} from './../components/modal-trailer/modal-trailer.component'


@NgModule({
  declarations: [ModalTrailerComponent],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports:[
    ModalTrailerComponent
  ]
})
export class SharingModule { }
