import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuanLyListComponent} from "./quan-ly-list/quan-ly-list.component";
import {QuanLyEditComponent} from "./quan-ly-edit/quan-ly-edit.component";
import {QuanLyCreateComponent} from "./quan-ly-create/quan-ly-create.component";

const routes: Routes = [
  {
    path: 'quanly/list',
    component: QuanLyListComponent
  }, {
    path: 'quanly/edit/:id',
    component: QuanLyEditComponent
  },
  {
    path: 'quanly/create',
    component: QuanLyCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyNhaXeRoutingModule { }
