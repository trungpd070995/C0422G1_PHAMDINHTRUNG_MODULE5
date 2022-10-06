package com.example.controller;

import com.example.model.DiemDen;
import com.example.model.DiemDi;
import com.example.model.QuanLyNhaXe;
import com.example.service.IDiemDenService;
import com.example.service.IDiemDiService;
import com.example.service.IQuanLyNhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin("*")
public class QuanLyNhaXeController {

    @Autowired
    private IQuanLyNhaXeService iQuanLyNhaXeService;

    @Autowired
    private IDiemDiService iDiemDiService;

    @Autowired
    private IDiemDenService iDiemDenService;

    @GetMapping("/quanly/list")
    public ResponseEntity<List<QuanLyNhaXe>> getAllQuanLyNhaXe() {
        List<QuanLyNhaXe> quanLyNhaXe = iQuanLyNhaXeService.findAll();
        return new ResponseEntity<>(quanLyNhaXe, HttpStatus.OK);
    }

    @GetMapping("/diemDi/list")
    public ResponseEntity<List<DiemDi>> getAllDiemDi() {
        List<DiemDi> diemDiList = iDiemDiService.findAllDiemDi();
        return new ResponseEntity<>(diemDiList, HttpStatus.OK);
    }

    @GetMapping("/diemDen/list")
    public ResponseEntity<List<DiemDen>> getAllDiemDen() {
        List<DiemDen> diemDenList = iDiemDenService.findAllDiemDen();
        return new ResponseEntity<>(diemDenList, HttpStatus.OK);
    }

    @PostMapping("/quanly/create")
    public ResponseEntity<Void> create(@RequestBody QuanLyNhaXe quanLyNhaXe) {
        iQuanLyNhaXeService.save(quanLyNhaXe);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/quanly/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        iQuanLyNhaXeService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
