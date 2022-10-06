package com.example.repository;

import com.example.model.DiemDi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDiemDiRepository extends JpaRepository<DiemDi,Integer> {
    @Query(value = "select * from diem_di", nativeQuery = true)
    List<DiemDi> getAllDiemDi();
}
