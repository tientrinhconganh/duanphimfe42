import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from 'src/app/core/guard/admin.guard'

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
      canActivate: [AdminGuard]
  },
  {
    path: '',
    loadChildren: () => import('src/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
