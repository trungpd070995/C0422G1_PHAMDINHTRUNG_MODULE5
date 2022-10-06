import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DiemDen} from "../../model/diemDen";
import {DiemDi} from "../../model/diemDi";
import {QuanLyNhaXeService} from "../quan-ly-nha-xe.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-quan-ly-create',
  templateUrl: './quan-ly-create.component.html',
  styleUrls: ['./quan-ly-create.component.css']
})
export class QuanLyCreateComponent implements OnInit {
  nhaXeForm: FormGroup;
  diemDen: DiemDen[] = [];
  diemDi: DiemDi[] = [];

  constructor(private quanLyNhaXeService: QuanLyNhaXeService,
              private router: Router) {
    this.nhaXeForm = new FormGroup({
      soXe: new FormControl('', [Validators.required]),
      nhaXe: new FormControl('', [Validators.required]),
      loaiXe: new FormControl('', [Validators.required]),
      soDienThoai: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      diemDi: new FormGroup({
          id: new FormControl('',[Validators.required])
        }
      ),
      diemDen: new FormGroup({
          id: new FormControl('',[Validators.required])
        }
      ),
      gioDi: new FormControl('', [Validators.required]),
      gioDen: new FormControl('', [Validators.required])
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

  submit() {
    const nhaXe = this.nhaXeForm.value;
    console.log(nhaXe)
    if (this.nhaXeForm.valid) {
      this.quanLyNhaXeService.save(nhaXe).subscribe(() => {
        this.router.navigateByUrl("quanly/list");
      });
    }
  }
}
