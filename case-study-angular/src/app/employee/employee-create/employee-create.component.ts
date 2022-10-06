import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Division} from "../../model/division";
import {EducationDegree} from "../../model/educationDegree";
import {EmployeeService} from "../../service/employee.service";
import {DivisionService} from "../../service/division.service";
import {EducationDegreeService} from "../../service/education-degree.service";
import {EmployeePositionService} from "../../service/employee-position.service";
import {Router} from "@angular/router";
import {EmployeePosition} from "../../model/employeePosition";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;
  division: Division[] = [];
  educationDegree: EducationDegree[] = [];
  position: EmployeePosition[] = [];

  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationDegreeService: EducationDegreeService,
              private positionService: EmployeePositionService,
              private router: Router) {
    this.employeeForm = new FormGroup({
      name: new FormControl(),
      birthday: new FormControl(),
      address: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      salary: new FormControl(),
      educationDegree: new FormControl(),
      division: new FormControl(),
      position: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.getAllDivision();
    this.getAllEducationDegree();
    this.getAllPosition();
  }

  submitEmployee() {
    const employee = this.employeeForm.value;
    this.employeeService.saveEmployee(employee).subscribe(() => {
      this.employeeForm.reset();
      this.router.navigateByUrl('employee/list');
    });
  }

  getAllDivision() {
    this.divisionService.getAll().subscribe(division => {
      this.division = division;
    });
  }

  getAllEducationDegree() {
    this.educationDegreeService.getAll().subscribe(educationDegree => {
      this.educationDegree = educationDegree;
    });
  }

  getAllPosition() {
    this.positionService.getAll().subscribe(position => {
      this.position = position;
    });
  }

}
