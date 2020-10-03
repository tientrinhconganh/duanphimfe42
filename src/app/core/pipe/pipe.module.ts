import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from './shortcut.pipe';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [ShortcutPipe, SafePipe],
  imports: [
    CommonModule
  ],
  exports:[
    SafePipe,ShortcutPipe
  ]
})
export class PipeModule { }
