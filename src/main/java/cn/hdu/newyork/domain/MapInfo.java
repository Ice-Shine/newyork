package cn.hdu.newyork.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MapInfo {
    List<Path> path;//储存路径
    List<Point> points;//储存点
    List<Point> points_num;//储存点及自流量

}
