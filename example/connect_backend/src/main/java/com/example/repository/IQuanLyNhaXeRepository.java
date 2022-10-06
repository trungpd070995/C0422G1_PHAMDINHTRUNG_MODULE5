package com.example.repository;

import com.example.model.QuanLyNhaXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import javax.transaction.Transactional;

@Transactional
public interface IQuanLyNhaXeRepository extends JpaRepository<QuanLyNhaXe,Integer> {

    @Query(value = "select * from quan_ly_nha_xe where status = 0", nativeQuery = true)
    Page<QuanLyNhaXe> getAllQuanLyNhaXe(Pageable pageable);

    @Query(value = "select * from quan_ly_nha_xe where id = :id and status = 0", nativeQuery = true)
    QuanLyNhaXe findById(@Param("id") int id);

    @Modifying
    @Query(value = "insert into quan_ly_nha_xe (so_xe, nha_xe, so_dien_thoai, loai_xe, email, gio_di, gio_den, diem_di_id, diem_den_id, status) " +
            " values (:soXe, :nhaXe, :soDienThoai, :loaiXe, :email, :gioDi, :gioDen, :diemDi,:diemDen, 0)", nativeQuery = true)
    void save(@Param("soXe") String soXe, @Param("nhaXe") String nhaXe, @Param("soDienThoai") String soDienThoai, @Param("loaiXe") String loaiXe,
              @Param("email") String email, @Param("gioDi") String gioDi, @Param("gioDen") String gioDen, @Param("diemDi") Integer diemDi, @Param("diemDen") Integer diemDen);

    @Modifying
    @Query(value = "update quan_ly_nha_xe set so_xe = :soXe, nha_xe = :nhaXe, so_dien_thoai = :soDienThoai," +
            " loai_xe = :loaiXe, email = :email, gio_di = :gioDi, gio_den = :gioDen where id = :id", nativeQuery = true)
    void update(@Param("soXe") String soXe, @Param("nhaXe") String nhaXe, @Param("soDienThoai") String soDienThoai, @Param("loaiXe") String loaiXe,
                @Param("email") String email, @Param("gioDi") String gioDi, @Param("gioDen") String gioDen,@Param("id") int id);

    @Query(value = "update quan_ly_nha_xe set status = 1 where id = :id", nativeQuery = true)
    void delete(@Param("id") Integer id);

    @Query(value = "select * from quan_ly_nha_xe where nha_xe like :nhaXe and status = 0", nativeQuery = true)
    Page<QuanLyNhaXe> search(@Param("nhaXe") String nhaXe, Pageable pageable);

}
