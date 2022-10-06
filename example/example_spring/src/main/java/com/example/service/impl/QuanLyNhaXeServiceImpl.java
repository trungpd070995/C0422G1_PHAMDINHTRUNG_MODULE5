package com.example.service.impl;

import com.example.model.QuanLyNhaXe;
import com.example.repository.IQuanLyNhaXeRepository;
import com.example.service.IQuanLyNhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuanLyNhaXeServiceImpl implements IQuanLyNhaXeService {

    @Autowired
    private IQuanLyNhaXeRepository iQuanLyNhaXeRepository;

    @Override
    public List<QuanLyNhaXe> findAll() {
        return iQuanLyNhaXeRepository.findAll();
    }

    @Override
    public void save(QuanLyNhaXe quanLyNhaXe) {
        iQuanLyNhaXeRepository.save(quanLyNhaXe);
    }

    @Override
    public void edit(Integer id, QuanLyNhaXe quanLyNhaXe) {

    }

    @Override
    public void remove(Integer id) {
        iQuanLyNhaXeRepository.deleteById(id);
    }


}
