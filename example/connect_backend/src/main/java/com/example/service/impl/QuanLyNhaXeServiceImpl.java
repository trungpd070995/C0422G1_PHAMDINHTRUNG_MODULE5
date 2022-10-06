package com.example.service.impl;

import com.example.model.QuanLyNhaXe;
import com.example.repository.IQuanLyNhaXeRepository;
import com.example.service.IQuanLyNhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class QuanLyNhaXeServiceImpl implements IQuanLyNhaXeService {

    @Autowired
    private IQuanLyNhaXeRepository iQuanLyNhaXeRepository;

    @Override
    public Page<QuanLyNhaXe> findAll(Pageable pageable) {
        return iQuanLyNhaXeRepository.getAllQuanLyNhaXe(pageable);
    }

    @Override
    public QuanLyNhaXe findById(int id) {
        return iQuanLyNhaXeRepository.findById(id);
    }

    @Override
    public void save(QuanLyNhaXe quanLyNhaXe) {
        iQuanLyNhaXeRepository.save(quanLyNhaXe.getSoXe(), quanLyNhaXe.getNhaXe(), quanLyNhaXe.getSoDienThoai(),
                quanLyNhaXe.getLoaiXe(), quanLyNhaXe.getEmail(), quanLyNhaXe.getGioDi(), quanLyNhaXe.getGioDen(),
                quanLyNhaXe.getDiemDi().getId(), quanLyNhaXe.getDiemDen().getId());
    }

    @Override
    public void edit(Integer id, QuanLyNhaXe quanLyNhaXe) {
        iQuanLyNhaXeRepository.update(quanLyNhaXe.getSoXe(), quanLyNhaXe.getNhaXe(), quanLyNhaXe.getSoDienThoai(),
                quanLyNhaXe.getLoaiXe(), quanLyNhaXe.getEmail(), quanLyNhaXe.getGioDi(), quanLyNhaXe.getGioDen(), id);
    }

    @Override
    public void delete(Integer id) {
        iQuanLyNhaXeRepository.deleteById(id);
    }

    @Override
    public Page<QuanLyNhaXe> search(String nhaXe, Pageable pageable) {
        return iQuanLyNhaXeRepository.search("%" + nhaXe + "%", pageable);
    }
}
