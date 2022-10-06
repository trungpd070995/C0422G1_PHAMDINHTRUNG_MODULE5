import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Division} from "../../model/division";
import {EducationDegree} from "../../model/educationDegree";
import {EmployeePosition} from "../../model/employeePosition";
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {DivisionService} from "../../service/division.service";
import {EducationDegreeService} from "../../service/education-degree.service";
import {EmployeePositionService} from "../../service/employee-position.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm: FormGroup;

  id: number;
  employee: Employee = null;

  divisions: Division[] = [];
  educationDegrees: EducationDegree[] = [];
  positions: EmployeePosition[] = [];

  division: Division = null
  educationDegree: EducationDegreeService = null;
  position: EmployeePosition = null;

  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationDegreeService: EducationDegreeService,
              private positionService: EmployeePositionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.employeeService.findById(this.id).subscribe(employee => {
        this.employeeForm = new FormGroup({
            name: new FormControl(employee.name),
            birthday: new FormControl(employee.birthday),
            address: new FormControl(employee.address),
            idCard: new FormControl(employee.idCard),
            phoneNumber: new FormControl(employee.phoneNumber),
            email: new FormControl(employee.email),
            salary: new FormControl(employee.salary),
            educationDegree: new FormControl(employee.educationDegree.id),
            division: new FormControl(employee.division.id),
            position: new FormControl(employee.position.id),
          }
        )
      });
    });
  }

  ngOnInit(): void {
    this.getAllEducationDegree();
    this.getAllDivision();
    this.getAllPosition();
  }

  getAllDivision() {
    this.divisionService.getAll().subscribe(division => {
      this.divisions = division;
    });
  }

  getAllEducationDegree() {
    this.educationDegreeService.getAll().subscribe(educationDegree => {
      this.educationDegrees = educationDegree;
    });
  }

  getAllPosition() {
    this.positionService.getAll().subscribe(position => {
      this.positions = position;
    });
  }

   updateEmployee(id: number) {
    const employee = this.employeeForm.value;
    this.educationDegreeService.findById(this.employeeForm.value.educationDegree).subscribe(educationDegree => {
      employee.educationDegree = educationDegree;
      this.divisionService.findById(this.employeeForm.value.division).subscribe(division => {
        employee.division = division;
        this.positionService.findById(this.employeeForm.value.position).subscribe(position => {
          employee.position = position;
          this.employeeService.updateEmployee(id, employee).subscribe(() => {
            this.router.navigateByUrl('employee/list');
          })
        });
      });
    });
  }
}
