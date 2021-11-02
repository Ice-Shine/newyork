package cn.hdu.newyork.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Path {
    private List<List<Double>> coords;
    private Integer value;
}
