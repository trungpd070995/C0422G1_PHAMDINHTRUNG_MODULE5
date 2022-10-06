import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyNhaXeRoutingModule } from './quan-ly-nha-xe-routing.module';
import { QuanLyListComponent } from './quan-ly-list/quan-ly-list.component';
import { QuanLyEditComponent } from './quan-ly-edit/quan-ly-edit.component';
import { QuanLyCreateComponent } from './quan-ly-create/quan-ly-create.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [QuanLyListComponent, QuanLyEditComponent, QuanLyCreateComponent],
    imports: [
        CommonModule,
        QuanLyNhaXeRoutingModule,
        ReactiveFormsModule
    ]
})
export class QuanLyNhaXeModule { }
