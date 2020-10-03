import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ToolsComponent } from './tools/tools.component';
import { SliderComponent } from './slider.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { SharingModule } from './../../../core/sharing/sharing.module';
import {MaterialModule} from 'src/app/core/material/material.module'


@NgModule({
  declarations: [
    SliderComponent,
    CarouselComponent,
    ToolsComponent,
    CarouselItemComponent,
    
  ],
  imports: [CommonModule, SharingModule,MaterialModule],
  exports: [SliderComponent],
})
export class SliderModule {}
