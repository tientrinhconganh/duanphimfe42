import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrangDatVeModule } from './trang-dat-ve/trang-dat-ve.module';
import { TrangChiTietModule } from './trang-chi-tiet/trang-chi-tiet.module';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: TrangChuModule},
      {path: 'chitiet', component:TrangChiTietModule},
      {path: 'datve', component:TrangDatVeModule},
    ]
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TrangChuModule,
    TrangDatVeModule,
    TrangChiTietModule,
    RouterModule.forChild(routes),
    RouterModule
  ],
})
export class HomeModule {}
