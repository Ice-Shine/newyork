package cn.hdu.newyork.service;

import cn.hdu.newyork.domain.Path;

import java.util.List;

public interface MapService {
    List<Path> findAll(int year,int day,int num);
}
