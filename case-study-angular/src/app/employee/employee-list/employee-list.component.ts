import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee[] = [];
  idDelete: number;
  nameDelete: string;
  nameSearch = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee(this.nameSearch).subscribe(employee =>{
      this.employee = employee;
      console.log(this.employee)
    });
  }

  openDelete(item: Employee) {
    this.idDelete = item.id;
    this.nameDelete = item.name;
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.idDelete).subscribe(() => {
      this.ngOnInit();
    });
  }

  getValueSearchEmployee(){
    this.employeeService.getAllEmployee(this.nameSearch).subscribe(employee =>{
      this.employee = employee;
    })
  }

}
