package cn.hdu.newyork.controller;

import cn.hdu.newyork.domain.DateT;
import cn.hdu.newyork.domain.Path;
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
    public List<Path>  indPath(DateT t_date, HttpSession session){
        System.out.println(t_date.getYear());
        List<Path> all = mapService.findAll(t_date.getYear(), t_date.getDay());
        System.out.println(all);
        System.out.println("in");
        return all;
    }
}
