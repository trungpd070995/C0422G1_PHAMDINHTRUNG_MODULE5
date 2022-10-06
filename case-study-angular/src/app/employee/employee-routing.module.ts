import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";
import {EmployeeCreateComponent} from "./employee-create/employee-create.component";

const routes: Routes = [
  {
    path: 'employee/list',
    component: EmployeeListComponent
  }, {
    path: 'employee/edit/:id',
    component: EmployeeEditComponent
  }, {
    path: 'employee/create',
    component: EmployeeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
