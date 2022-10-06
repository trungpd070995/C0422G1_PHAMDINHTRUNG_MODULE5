package com.example.dto;

import com.example.model.DiemDen;
import com.example.model.DiemDi;

public class QuanLyNhaXeDto {
    private int id;
    private String soXe;
    private String nhaXe;
    private String soDienThoai;
    private String loaiXe;
    private String email;
    private String gioDi;
    private String gioDen;
    private DiemDi diemDi;
    private DiemDen diemDen;

    public QuanLyNhaXeDto() {
    }

    public QuanLyNhaXeDto(int id, String soXe, String nhaXe, String soDienThoai, String loaiXe, String email,
                          String gioDi, String gioDen, DiemDi diemDi, DiemDen diemDen) {
        this.id = id;
        this.soXe = soXe;
        this.nhaXe = nhaXe;
        this.soDienThoai = soDienThoai;
        this.loaiXe = loaiXe;
        this.email = email;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSoXe() {
        return soXe;
    }

    public void setSoXe(String soXe) {
        this.soXe = soXe;
    }

    public String getNhaXe() {
        return nhaXe;
    }

    public void setNhaXe(String nhaXe) {
        this.nhaXe = nhaXe;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(String loaiXe) {
        this.loaiXe = loaiXe;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }

    public DiemDi getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(DiemDi diemDi) {
        this.diemDi = diemDi;
    }

    public DiemDen getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(DiemDen diemDen) {
        this.diemDen = diemDen;
    }
}
