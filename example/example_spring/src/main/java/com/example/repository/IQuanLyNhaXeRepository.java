package com.example.repository;

import com.example.model.QuanLyNhaXe;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface IQuanLyNhaXeRepository extends JpaRepository<QuanLyNhaXe,Integer> {

}
