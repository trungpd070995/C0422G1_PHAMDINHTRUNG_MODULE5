import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Division} from "../model/division";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Division[]> {
    return this.http.get<Division[]>(API_URL + '/division');
  }

  findById(id: number): Observable<Division> {
    return this.http.get<Division>(`${API_URL}/division/${id}`);
  }


}
