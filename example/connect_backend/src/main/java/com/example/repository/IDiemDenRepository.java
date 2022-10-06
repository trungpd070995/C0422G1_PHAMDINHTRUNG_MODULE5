package com.example.repository;

import com.example.model.DiemDen;
import com.example.model.DiemDi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDiemDenRepository extends JpaRepository<DiemDen,Integer> {
    @Query(value = "select * from diem_den", nativeQuery = true)
    List<DiemDen> getAllDiemDen();
}
