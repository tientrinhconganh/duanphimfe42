import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { SapChieuComponent } from './sap-chieu/sap-chieu.component';
import { DangChieuComponent } from './dang-chieu/dang-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { UngDungComponent } from './ung-dung/ung-dung.component';
import { CumRapComponent } from './cum-rap/cum-rap.component';
import { TenRapComponent } from './ten-rap/ten-rap.component';
import { TenPhimComponent } from './ten-phim/ten-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { TrangChuComponent } from './trang-chu.component';
import { HeaderModule } from './../header/header.module';
import { FooterModule } from 'src/app/home/footer/footer.module';
import {SliderModule} from './slider/slider.module'


import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxSpinnerModule} from 'ngx-spinner'


const routes: Routes = [
  {
    path: '',
    component: TrangChuComponent,
    children: [
      { path: '', component: TrangChuComponent },
      // { path: 'trangchu', component: TrangChuComponent },
    ],
  },
  // {
  //   path: 'trangchu',
  //   component: TrangChuComponent,
  //   children: [
  //     { path: 'trangchu/dienanh24h', component: DienAnhComponent },
  //     { path: 'trangchu/review', component: ReviewComponent },
  //     { path: 'trangchu/khuyenmai', component: KhuyenMaiComponent },
  //   ],
  // },
];

@NgModule({
  declarations: [
    TrangChuComponent,
    LichChieuComponent,
    SapChieuComponent,
    DangChieuComponent,
    ItemPhimComponent,
    UngDungComponent,
    CumRapComponent,
    TenRapComponent,
    TenPhimComponent,
    TinTucComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    DienAnhComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SlickCarouselModule,
    CarouselModule,
    RouterModule.forChild(routes),
    RouterModule,
    NgxSpinnerModule,
    SliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrangChuModule {}
