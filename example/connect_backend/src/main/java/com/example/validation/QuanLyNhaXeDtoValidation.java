package com.example.validation;

import com.example.dto.QuanLyNhaXeDto;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.regex.Pattern;

@Component
public class QuanLyNhaXeDtoValidation implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        QuanLyNhaXeDto quanLyNhaXeDto = (QuanLyNhaXeDto) target;

        if (quanLyNhaXeDto.getNhaXe() == null) {
            errors.rejectValue("nhaXe", "nhaXe.null", "Tên không được để trống");
        } else if (quanLyNhaXeDto.getNhaXe().length() < 6) {
            errors.rejectValue("nhaXe", "nhaXe.length", "Tên phải lơn hơn 6 ký tự");
        } else if (!Pattern.compile("^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+(\\s[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+)*$").matcher(quanLyNhaXeDto.getNhaXe()).find()) {
            errors.rejectValue("nhaXe", "nhaXe.pattern", "Tên phải đúng định dạng");
        }

    }
}
