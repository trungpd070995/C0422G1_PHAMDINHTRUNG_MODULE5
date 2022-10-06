import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuanLyNhaXe} from "../model/quanLyNhaXe";
import {DiemDen} from "../model/diemDen";
import {DiemDi} from "../model/diemDi";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class QuanLyNhaXeService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<QuanLyNhaXe[]> {
    return this.http.get<QuanLyNhaXe[]>(API_URL + '/api/v1/quanly/list');
  }

  getAllDiemDen(): Observable<DiemDen[]> {
    return this.http.get<DiemDen[]>(API_URL + '/api/v1/diemDen/list');
  }

  getAllDiemDi(): Observable<DiemDi[]> {
    return this.http.get<DiemDi[]>(API_URL + '/api/v1/diemDi/list');
  }

  save(quanLyNhaXe): Observable<QuanLyNhaXe> {
    return this.http.post<QuanLyNhaXe>(API_URL + '/api/v1/quanly/create', quanLyNhaXe);
  }

  findById(id: number): Observable<QuanLyNhaXe> {
    return this.http.get<QuanLyNhaXe>(`${API_URL}/api/v1/quanly/${id}`);
  }

  update(id: number, quanLyNhaXe: QuanLyNhaXe): Observable<QuanLyNhaXe> {
    return this.http.put<QuanLyNhaXe>(`${API_URL}/api/v1/quanly/edit${id}`, quanLyNhaXe);
  }

  delete(id: number): Observable<QuanLyNhaXe> {
    return this.http.delete<QuanLyNhaXe>(`${API_URL}/api/v1/quanly/delete${id}`);
  }
}
