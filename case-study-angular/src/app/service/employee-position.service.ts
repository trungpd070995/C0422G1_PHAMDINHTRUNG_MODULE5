import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeePosition} from "../model/employeePosition";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<EmployeePosition[]> {
    return this.http.get<EmployeePosition[]>(API_URL + '/position');
  }
  findById(id: number): Observable<EmployeePosition> {
    return this.http.get<EmployeePosition>(`${API_URL}/position/${id}`);
  }

}
