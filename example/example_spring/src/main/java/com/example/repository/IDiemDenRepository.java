package com.example.repository;

import com.example.model.DiemDen;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;


@Transactional
public interface IDiemDenRepository extends JpaRepository<DiemDen,Integer> {

}
