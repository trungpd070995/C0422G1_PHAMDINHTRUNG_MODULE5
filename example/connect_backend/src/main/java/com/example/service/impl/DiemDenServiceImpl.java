package com.example.service.impl;

import com.example.model.DiemDen;
import com.example.repository.IDiemDenRepository;
import com.example.service.IDiemDenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiemDenServiceImpl implements IDiemDenService {

    @Autowired
    private IDiemDenRepository iDiemDenRepository;


    @Override
    public List<DiemDen> getAllDiemDen() {
        return iDiemDenRepository.getAllDiemDen();
    }
}
