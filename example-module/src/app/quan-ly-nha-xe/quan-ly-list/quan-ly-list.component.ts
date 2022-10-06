import {Component, OnInit} from '@angular/core';
import {QuanLyNhaXe} from "../../model/quanLyNhaXe";
import {QuanLyNhaXeService} from "../quan-ly-nha-xe.service";

@Component({
  selector: 'app-quan-ly-list',
  templateUrl: './quan-ly-list.component.html',
  styleUrls: ['./quan-ly-list.component.css']
})
export class QuanLyListComponent implements OnInit {
  id = "";
  nhaXe: QuanLyNhaXe[] = [];
  idDelete: number;
  nameDelete: string;
  quanLyNhaXe;

  constructor(private quanLiNhaXeService: QuanLyNhaXeService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.quanLiNhaXeService.getAll().subscribe(nhaXe => {
      this.nhaXe = nhaXe;
      console.log(this.nhaXe)
    });
  }

  openDelete(item: QuanLyNhaXe) {
    this.idDelete = item.id;
    this.nameDelete = item.soXe;
  }

  delete() {
    this.quanLiNhaXeService.delete(this.idDelete).subscribe(() => {
      this.ngOnInit();
    });
  }

}
