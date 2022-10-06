package com.example.model;

import javax.persistence.*;

@Entity
public class QuanLyNhaXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "so_xe")
    private String soXe;

    @Column(name = "nha_xe")
    private String nhaXe;

    @Column(name = "so_dien_thoai")
    private String soDienThoai;

    @Column(name = "loai_xe")
    private String loaiXe;

    private String email;

    @Column(name = "gio_di")
    private String gioDi;

    @Column(name = "gio_den")
    private String gioDen;

    private byte status;

    @ManyToOne
    @JoinColumn(name = "diem_di_id", referencedColumnName = "id")
    private DiemDi diemDi;

    @ManyToOne
    @JoinColumn(name = "diem_den_id", referencedColumnName = "id")
    private DiemDen diemDen;

    public QuanLyNhaXe() {
    }

    public QuanLyNhaXe(Integer id, String soXe, String nhaXe, String soDienThoai, String loaiXe, String email,
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public byte getStatus() {
        return status;
    }

    public void setStatus(byte status) {
        this.status = status;
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


