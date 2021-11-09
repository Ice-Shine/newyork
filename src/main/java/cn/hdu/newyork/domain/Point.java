package cn.hdu.newyork.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Point {
    String name;
    List<Double> value;//包含两个double,第一位是lng,第二位是lat,第三位是这个点自流量的值
    Integer symbolSize;//自流量的值
}
