package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class DiemDi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ten_tinh")
    private String tenTinh;

    @OneToMany(mappedBy = "diemDi")
    @JsonBackReference
    private List<QuanLyNhaXe> quanLyNhaXe;

    public DiemDi() {
    }

    public DiemDi(Integer id, String tenTinh, List<QuanLyNhaXe> quanLyNhaXe) {
        this.id = id;
        this.tenTinh = tenTinh;
        this.quanLyNhaXe = quanLyNhaXe;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenTinh() {
        return tenTinh;
    }

    public void setTenTinh(String tenTinh) {
        this.tenTinh = tenTinh;
    }

    public List<QuanLyNhaXe> getQuanLyNhaXe() {
        return quanLyNhaXe;
    }

    public void setQuanLyNhaXe(List<QuanLyNhaXe> quanLyNhaXe) {
        this.quanLyNhaXe = quanLyNhaXe;
    }
}

