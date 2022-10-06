package com.example.service;

import com.example.model.QuanLyNhaXe;

import java.util.List;

public interface IQuanLyNhaXeService {

    List<QuanLyNhaXe> findAll();

    void save(QuanLyNhaXe quanLyNhaXe);

    void edit(Integer id, QuanLyNhaXe quanLyNhaXe);

    void remove(Integer id);

}
