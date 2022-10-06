import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DiemDen} from "../../model/diemDen";
import {DiemDi} from "../../model/diemDi";
import {QuanLyNhaXeService} from "../quan-ly-nha-xe.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {QuanLyNhaXe} from "../../model/quanLyNhaXe";

@Component({
  selector: 'app-quan-ly-edit',
  templateUrl: './quan-ly-edit.component.html',
  styleUrls: ['./quan-ly-edit.component.css']
})
export class QuanLyEditComponent implements OnInit {

  id: number;
  nhaXeForm: FormGroup;
  diemDen: DiemDen[] = [];
  diemDi: DiemDi[] = [];

  constructor(private quanLyNhaXeService: QuanLyNhaXeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.nhaXeForm = new FormGroup({
      soXe: new FormControl('', [Validators.required]),
      nhaXe: new FormControl('', [Validators.required]),
      loaiXe: new FormControl('', [Validators.required]),
      soDienThoai: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      diemDi: new FormControl('', [Validators.required]),
      diemDen: new FormControl('', [Validators.required]),
      gioDi: new FormControl('', [Validators.required]),
      gioDen: new FormControl('', [Validators.required]),
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.quanLyNhaXeService.findById(this.id).subscribe(nhaXe => {
        this.nhaXeForm.patchValue(nhaXe);
      });
    });
  }

  ngOnInit(): void {
    this.getAllDiemDen();
    this.getAllDiemDi();
  }

  getAllDiemDen() {
    this.quanLyNhaXeService.getAllDiemDen().subscribe(diemDen => {
      this.diemDen = diemDen;
    })
  }

  getAllDiemDi() {
    this.quanLyNhaXeService.getAllDiemDi().subscribe(diemDi => {
      this.diemDi = diemDi;
    })
  }

  update(id: number){
    const nhaXe = this.nhaXeForm.value;
    if (this.nhaXeForm.valid) {
      this.quanLyNhaXeService.update(id,nhaXe).subscribe(() => {
        this.router.navigateByUrl("quanly/list");
      });
    }
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
