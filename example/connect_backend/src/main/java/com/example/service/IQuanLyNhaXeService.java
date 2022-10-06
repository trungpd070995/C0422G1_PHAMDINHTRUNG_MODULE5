package com.example.service;

import com.example.model.QuanLyNhaXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IQuanLyNhaXeService {
    Page<QuanLyNhaXe> findAll(Pageable pageable);

    QuanLyNhaXe findById(int id);

    void save(QuanLyNhaXe quanLyNhaXe);

    void edit(Integer id, QuanLyNhaXe quanLyNhaXe);

    void delete(Integer id);

    Page<QuanLyNhaXe> search(String nhaXe, Pageable pageable);
}
