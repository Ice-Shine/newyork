package cn.hdu.newyork.service.impl;

import cn.hdu.newyork.domain.Path;
import cn.hdu.newyork.service.MapService;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.*;
import java.util.LinkedList;
import java.util.List;
@Service
public class MapServiceImpl implements MapService {

    @Override
    public List<Path> findAll(int year, int day,int num) {
        List<Path> list = new LinkedList<Path>();


        //从文件中读取（暂时还没有加入日期选择）
        String line = "";
        String cvsSplitBy = ",";
        String filename = "src/main/resources/static/data/"+year+".3."+day+".csv";
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {

            while ((line = br.readLine()) != null) {
                List<List<Double>> coords = new LinkedList<List<Double>>();
                // 按照js文件格式要求储存
                String[] country = line.split(cvsSplitBy);
                if(Integer.parseInt(country[4])>=num){
                    List<Double> path = new LinkedList<Double>();
                    List<Double> path2 = new LinkedList<Double>();
                    path.add(Double.parseDouble(country[0]));
                    path.add(Double.parseDouble(country[1]));
                    path2.add(Double.parseDouble(country[2]));
                    path2.add(Double.parseDouble(country[3]));
                    coords.add(path);
                    coords.add(path2);
                    Path path1 = new Path(coords);
                    list.add(path1);
                }

            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return list;
    }
}
