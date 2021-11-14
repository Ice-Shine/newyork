package cn.hdu.newyork.service;

import cn.hdu.newyork.domain.Path;
import cn.hdu.newyork.domain.Point;

import java.util.List;

public interface MapService {
    List<Path> findAllPath(int year,int day,int num);

    List<Point> findAllPoint(int year,int month);

    List<Point> findSelfPoint(int year,int month,int day);

    int getMaxCount(int year,int month,int day);
}
