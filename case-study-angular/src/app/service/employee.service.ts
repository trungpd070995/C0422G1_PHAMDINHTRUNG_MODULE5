import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

  }

  getAllEmployee(nameSearch:string): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employee?name_like='+nameSearch);
  }

  saveEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(API_URL + '/employee', employee);
  }

  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${API_URL}/employee/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${API_URL}/employee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${API_URL}/employee/${id}`);
  }
}
