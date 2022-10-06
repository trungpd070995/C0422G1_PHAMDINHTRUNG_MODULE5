import {DiemDi} from "./diemDi";
import {DiemDen} from "./diemDen";

export interface QuanLyNhaXe {
  id?: number,
  soXe?: string,
  nhaXe?: string,
  soDienThoai?: string,
  loaiXe?: string,
  email?: string,
  gioDi?: string,
  gioDen?: string,
  diemDi?: DiemDi,
  diemDen?: DiemDen
}
