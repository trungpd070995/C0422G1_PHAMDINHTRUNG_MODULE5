package com.example.controller;
import com.example.dto.QuanLyNhaXeDto;
import com.example.model.DiemDen;
import com.example.model.DiemDi;
import com.example.model.QuanLyNhaXe;
import com.example.service.impl.DiemDenServiceImpl;
import com.example.service.impl.DiemDiServiceImpl;
import com.example.service.impl.QuanLyNhaXeServiceImpl;
import com.example.validation.QuanLyNhaXeDtoValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "*")
public class QuanLyNhaXeController {
    @Autowired
    private QuanLyNhaXeServiceImpl quanLyNhaXeService;

    @Autowired
    private DiemDenServiceImpl diemDenService;

    @Autowired
    private DiemDiServiceImpl diemDiService;

    @Autowired
    private QuanLyNhaXeDtoValidation quanLyNhaXeDtoValidation;

    @GetMapping("/quanly/list")
    public ResponseEntity<Page<QuanLyNhaXe>> getAllQuanLyNhaXe(@PageableDefault(value = 2) Pageable pageable) {
        Page<QuanLyNhaXe> quanLyNhaXe = quanLyNhaXeService.findAll(pageable);
        return new ResponseEntity<>(quanLyNhaXe, HttpStatus.OK);
    }

    @GetMapping("/diemDen/list")
    public ResponseEntity<List<DiemDen>> getAllDiemDen() {
        List<DiemDen> diemDenList = diemDenService.getAllDiemDen();
        return new ResponseEntity<>(diemDenList, HttpStatus.OK);
    }

    @GetMapping("/diemDi/list")
    public ResponseEntity<List<DiemDi>> getAllDiemDi() {
        List<DiemDi> diemDiList = diemDiService.findAllDiemDi();
        return new ResponseEntity<>(diemDiList, HttpStatus.OK);
    }

    @GetMapping("/quanly/{id}")
    public ResponseEntity<QuanLyNhaXe> getPatient(@PathVariable int id) {
        QuanLyNhaXe quanLyNhaXe = quanLyNhaXeService.findById(id);
        return new ResponseEntity<>(quanLyNhaXe, HttpStatus.OK);
    }

    @PostMapping("quanly/create")
    public ResponseEntity<Void> create(@RequestBody QuanLyNhaXe quanLyNhaXe) {
        quanLyNhaXeService.save(quanLyNhaXe);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("quanly/edit/{id}")
    public ResponseEntity<?> update(@RequestBody @Valid QuanLyNhaXeDto quanLyNhaXeDto, BindingResult bindingResult,
                                           @PathVariable int id) {
        QuanLyNhaXe quanLyNhaXe = quanLyNhaXeService.findById(id);

        quanLyNhaXeDtoValidation.validate(quanLyNhaXeDto, bindingResult);

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_MODIFIED);
        }

        if (quanLyNhaXe == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        quanLyNhaXeService.edit(id, quanLyNhaXe);
        return new ResponseEntity<>(quanLyNhaXe, HttpStatus.OK);
    }

    @DeleteMapping("quanly/delete/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable int id) {
        quanLyNhaXeService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("quanly/search")
    public ResponseEntity<Page<QuanLyNhaXe>> search(@RequestParam String nhaXe,
                                                       @PageableDefault(value = 2) Pageable pageable) {
        Page<QuanLyNhaXe> quanLyNhaXe = quanLyNhaXeService.search(nhaXe, pageable);
        return new ResponseEntity<>(quanLyNhaXe, HttpStatus.OK);
    }
}
