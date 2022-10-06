package com.example.service.impl;

import com.example.model.DiemDi;
import com.example.repository.IDiemDiRepository;
import com.example.service.IDiemDiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiemDiServiceImpl implements IDiemDiService {

    @Autowired
    private IDiemDiRepository iDiemDiRepository;

    @Override
    public List<DiemDi> findAllDiemDi() {
        return iDiemDiRepository.findAll();
    }
}
