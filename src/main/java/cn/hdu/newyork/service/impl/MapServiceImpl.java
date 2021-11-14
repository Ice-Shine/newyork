package cn.hdu.newyork.service.impl;

import cn.hdu.newyork.domain.Path;
import cn.hdu.newyork.domain.Point;
import cn.hdu.newyork.service.MapService;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.*;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
@Service
public class MapServiceImpl implements MapService {

    @Override
    public List<Path> findAllPath(int year, int day,int num) {
        List<Path> list = new LinkedList<Path>();

        //从csv中读取
        String line = "";
        String csvSplitBy = ",";
        String filename = "src/main/resources/static/data/"+year+".3."+day+".csv";
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {

            while ((line = br.readLine()) != null) {
                List<List<Double>> coords = new LinkedList<List<Double>>();
                // 按照js文件格式要求储存
                String[] country = line.split(csvSplitBy);
                if(Integer.parseInt(country[4])>=num){
                    List<Double> path = new LinkedList<Double>();
                    List<Double> path2 = new LinkedList<Double>();
                    path.add(Double.parseDouble(country[0]));
                    path.add(Double.parseDouble(country[1]));
                    path2.add(Double.parseDouble(country[2]));
                    path2.add(Double.parseDouble(country[3]));
                    coords.add(path);
                    coords.add(path2);
                    Path path1 = new Path(coords,Integer.parseInt(country[4]));
                    list.add(path1);
                }

            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public List<Point> findAllPoint(int year, int month) {
        List<Point> points = new ArrayList<Point>();
        String line = "";
        String csvSplitBy = ",";
        String filename = "src/main/resources/static/data/get"+year+"."+month+".csv";
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {

            while ((line = br.readLine()) != null) {
                // 按照js文件格式要求储存
                String[] country = line.split(csvSplitBy);
                List<Double> locate = new LinkedList<Double>();
                locate.add(Double.parseDouble(country[1]));
                locate.add(Double.parseDouble(country[0]));
                Point point = new Point(country[1]+","+country[0],locate,10);
                points.add(point);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(points);
        return points;
    }

    @Override
    public List<Point> findSelfPoint(int year, int month, int day) {
        List<Point> points = new ArrayList<Point>();
        String line = "";
        String csvSplitBy = ",";
        String filename = "src/main/resources/static/data/get"+year+"."+month+"."+day+".csv";
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {

            while ((line = br.readLine()) != null) {
                // 按照js文件格式要求储存
                String[] country = line.split(csvSplitBy);
                List<Double> locate = new LinkedList<Double>();
                locate.add(Double.parseDouble(country[0]));
                locate.add(Double.parseDouble(country[1]));//这两个顺序可能会存在问题

                Point point = new Point(country[1]+","+country[0]+","+country[2],locate,Integer.parseInt(country[2])*2);
                System.out.println(country[2]);
                points.add(point);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(points);
        return points;
    }

    @Override
    public int getMaxCount(int year, int month, int day) {
        List<Path> list = new LinkedList<Path>();

        //从csv中读取
        String line = "";
        String csvSplitBy = ",";
        String filename = "src/main/resources/static/data/"+year+".3."+day+".csv";
        int max = 0;
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {

            while ((line = br.readLine()) != null) {

                String[] country = line.split(csvSplitBy);
                if(Integer.parseInt(country[4])>max){
                    max = Integer.parseInt(country[4]);
                }

            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return max;
    }
}
