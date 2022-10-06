package com.example.repository;

import com.example.model.DiemDi;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface IDiemDiRepository extends JpaRepository<DiemDi,Integer> {

}
