import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Division} from "../model/division";
import {EducationDegree} from "../model/educationDegree";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {


  constructor(private http: HttpClient) {

  }

  getAll(): Observable<EducationDegree[]> {
    return this.http.get<EducationDegree[]>(API_URL + '/educationDegree');
  }
  findById(id: number): Observable<EducationDegree> {
    return this.http.get<EducationDegree>(`${API_URL}/educationDegree/${id}`);
  }
}
