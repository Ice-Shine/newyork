package cn.hdu.newyork.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyMvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index.html");
        registry.addViewController("/index").setViewName("index");
        registry.addViewController("/baiduecharts").setViewName("baiduecharts");
        registry.addViewController("/baiduecharts_kmeans").setViewName("baiduecharts_kmeans");
        registry.addViewController("/baiduecharts_kmeans2020").setViewName("baiduecharts_kmeans2020");
        registry.addViewController("/demo1").setViewName("demo1");
        registry.addViewController("/render").setViewName("render");

    }



}
