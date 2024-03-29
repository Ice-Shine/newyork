package cn.hdu.newyork.controller;

import cn.hdu.newyork.domain.DateT;
import cn.hdu.newyork.domain.MapInfo;
import cn.hdu.newyork.domain.Path;
import cn.hdu.newyork.domain.Point;
import cn.hdu.newyork.service.MapService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;


@RestController
public class MapController {
    @Resource
    MapService mapService;
    @PostMapping("/map")
    public MapInfo indPath(DateT t_date, HttpSession session){

        System.out.println(t_date);
        String[] split = t_date.getDate().split("-");
        if(!("03".equals(split[1]))||!("2020".equals(split[0])||"2019".equals(split[0]))||t_date.getNum()==null) return null;
        List<Path> pathAll = mapService.findAllPath(Integer.parseInt(split[0]),Integer.parseInt(split[2]),t_date.getNum());
        List<Point> points = mapService.findAllPoint(Integer.parseInt(split[0]),Integer.parseInt(split[1]));
        List<Point> points_num = mapService.findSelfPoint(Integer.parseInt(split[0]),Integer.parseInt(split[1]),Integer.parseInt(split[2]));
        MapInfo info = new MapInfo();
        info.setPath(pathAll);
        info.setPoints(points);
        info.setPoints_num(points_num);
        info.setMax(mapService.getMaxCount(Integer.parseInt(split[0]),Integer.parseInt(split[1]),Integer.parseInt(split[2])));
        System.out.println(info);
        return info;

    }
}
