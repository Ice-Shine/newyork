
$(function () {
    $('#date1').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: moment.locale('zh-cn')
    });
});
for (let i = 1; i < 12; i++) {

    document.getElementById(i).addEventListener('click', function () {
        var str = "2020.3."+i+"\u501f\u51fa\u60c5\u51b5";
        if(option_d0a4bb8be35841c28cd5b46eabf60ef3.legend[0].selected[str])  option_d0a4bb8be35841c28cd5b46eabf60ef3.legend[0].selected[str]=false;
        else{
            option_d0a4bb8be35841c28cd5b46eabf60ef3.legend[0].selected[str]=true;
        }
        chart_d0a4bb8be35841c28cd5b46eabf60ef3.setOption(option_d0a4bb8be35841c28cd5b46eabf60ef3);
        console.log(option_d0a4bb8be35841c28cd5b46eabf60ef3.legend[0].selected);
    })
}
var chart_d0a4bb8be35841c28cd5b46eabf60ef3 = echarts.init(
    document.getElementById('d0a4bb8be35841c28cd5b46eabf60ef3'), 'white', {renderer: 'canvas'});
var option_d0a4bb8be35841c28cd5b46eabf60ef3 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "line",
            "name": "2020.3.1\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    404
                ],
                [
                    "01",
                    252
                ],
                [
                    "02",
                    155
                ],
                [
                    "03",
                    87
                ],
                [
                    "04",
                    65
                ],
                [
                    "05",
                    61
                ],
                [
                    "06",
                    137
                ],
                [
                    "07",
                    399
                ],
                [
                    "08",
                    768
                ],
                [
                    "09",
                    1235
                ],
                [
                    "10",
                    1846
                ],
                [
                    "11",
                    2336
                ],
                [
                    "12",
                    2809
                ],
                [
                    "13",
                    2857
                ],
                [
                    "14",
                    2938
                ],
                [
                    "15",
                    3081
                ],
                [
                    "16",
                    2949
                ],
                [
                    "17",
                    2811
                ],
                [
                    "18",
                    2124
                ],
                [
                    "19",
                    1542
                ],
                [
                    "20",
                    1172
                ],
                [
                    "21",
                    849
                ],
                [
                    "22",
                    632
                ],
                [
                    "23",
                    369
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.2\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    224
                ],
                [
                    "01",
                    105
                ],
                [
                    "02",
                    55
                ],
                [
                    "03",
                    56
                ],
                [
                    "04",
                    97
                ],
                [
                    "05",
                    478
                ],
                [
                    "06",
                    1555
                ],
                [
                    "07",
                    3472
                ],
                [
                    "08",
                    5882
                ],
                [
                    "09",
                    3587
                ],
                [
                    "10",
                    1963
                ],
                [
                    "11",
                    1979
                ],
                [
                    "12",
                    2355
                ],
                [
                    "13",
                    2638
                ],
                [
                    "14",
                    2826
                ],
                [
                    "15",
                    3215
                ],
                [
                    "16",
                    4066
                ],
                [
                    "17",
                    6703
                ],
                [
                    "18",
                    6163
                ],
                [
                    "19",
                    3786
                ],
                [
                    "20",
                    2465
                ],
                [
                    "21",
                    1644
                ],
                [
                    "22",
                    1045
                ],
                [
                    "23",
                    587
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.3\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    212
                ],
                [
                    "01",
                    102
                ],
                [
                    "02",
                    67
                ],
                [
                    "03",
                    54
                ],
                [
                    "04",
                    129
                ],
                [
                    "05",
                    578
                ],
                [
                    "06",
                    1814
                ],
                [
                    "07",
                    4209
                ],
                [
                    "08",
                    7361
                ],
                [
                    "09",
                    4523
                ],
                [
                    "10",
                    2413
                ],
                [
                    "11",
                    2185
                ],
                [
                    "12",
                    2513
                ],
                [
                    "13",
                    2480
                ],
                [
                    "14",
                    1812
                ],
                [
                    "15",
                    795
                ],
                [
                    "16",
                    1627
                ],
                [
                    "17",
                    4219
                ],
                [
                    "18",
                    4784
                ],
                [
                    "19",
                    3267
                ],
                [
                    "20",
                    2341
                ],
                [
                    "21",
                    1398
                ],
                [
                    "22",
                    371
                ],
                [
                    "23",
                    469
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.4\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    259
                ],
                [
                    "01",
                    117
                ],
                [
                    "02",
                    51
                ],
                [
                    "03",
                    66
                ],
                [
                    "04",
                    113
                ],
                [
                    "05",
                    562
                ],
                [
                    "06",
                    1813
                ],
                [
                    "07",
                    3942
                ],
                [
                    "08",
                    6573
                ],
                [
                    "09",
                    4072
                ],
                [
                    "10",
                    2094
                ],
                [
                    "11",
                    2090
                ],
                [
                    "12",
                    2562
                ],
                [
                    "13",
                    2742
                ],
                [
                    "14",
                    2813
                ],
                [
                    "15",
                    3032
                ],
                [
                    "16",
                    3883
                ],
                [
                    "17",
                    6702
                ],
                [
                    "18",
                    6060
                ],
                [
                    "19",
                    3863
                ],
                [
                    "20",
                    2005
                ],
                [
                    "21",
                    1514
                ],
                [
                    "22",
                    1092
                ],
                [
                    "23",
                    650
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.5\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    370
                ],
                [
                    "01",
                    165
                ],
                [
                    "02",
                    67
                ],
                [
                    "03",
                    75
                ],
                [
                    "04",
                    119
                ],
                [
                    "05",
                    466
                ],
                [
                    "06",
                    1660
                ],
                [
                    "07",
                    3716
                ],
                [
                    "08",
                    6510
                ],
                [
                    "09",
                    4277
                ],
                [
                    "10",
                    2287
                ],
                [
                    "11",
                    2187
                ],
                [
                    "12",
                    2552
                ],
                [
                    "13",
                    2749
                ],
                [
                    "14",
                    2815
                ],
                [
                    "15",
                    3056
                ],
                [
                    "16",
                    4044
                ],
                [
                    "17",
                    6419
                ],
                [
                    "18",
                    5668
                ],
                [
                    "19",
                    3554
                ],
                [
                    "20",
                    2403
                ],
                [
                    "21",
                    1732
                ],
                [
                    "22",
                    1080
                ],
                [
                    "23",
                    715
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.6\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    333
                ],
                [
                    "01",
                    177
                ],
                [
                    "02",
                    106
                ],
                [
                    "03",
                    53
                ],
                [
                    "04",
                    107
                ],
                [
                    "05",
                    464
                ],
                [
                    "06",
                    1477
                ],
                [
                    "07",
                    3471
                ],
                [
                    "08",
                    6039
                ],
                [
                    "09",
                    3936
                ],
                [
                    "10",
                    2174
                ],
                [
                    "11",
                    2016
                ],
                [
                    "12",
                    2198
                ],
                [
                    "13",
                    1667
                ],
                [
                    "14",
                    848
                ],
                [
                    "15",
                    783
                ],
                [
                    "16",
                    1575
                ],
                [
                    "17",
                    1671
                ],
                [
                    "18",
                    1102
                ],
                [
                    "19",
                    1232
                ],
                [
                    "20",
                    1005
                ],
                [
                    "21",
                    694
                ],
                [
                    "22",
                    547
                ],
                [
                    "23",
                    460
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.7\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    392
                ],
                [
                    "01",
                    275
                ],
                [
                    "02",
                    189
                ],
                [
                    "03",
                    128
                ],
                [
                    "04",
                    100
                ],
                [
                    "05",
                    85
                ],
                [
                    "06",
                    260
                ],
                [
                    "07",
                    613
                ],
                [
                    "08",
                    1267
                ],
                [
                    "09",
                    1907
                ],
                [
                    "10",
                    2456
                ],
                [
                    "11",
                    2978
                ],
                [
                    "12",
                    3390
                ],
                [
                    "13",
                    3463
                ],
                [
                    "14",
                    3538
                ],
                [
                    "15",
                    3494
                ],
                [
                    "16",
                    3540
                ],
                [
                    "17",
                    3036
                ],
                [
                    "18",
                    2513
                ],
                [
                    "19",
                    1865
                ],
                [
                    "20",
                    1385
                ],
                [
                    "21",
                    1036
                ],
                [
                    "22",
                    862
                ],
                [
                    "23",
                    676
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.8\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    512
                ],
                [
                    "01",
                    426
                ],
                [
                    "02",
                    0
                ],
                [
                    "03",
                    273
                ],
                [
                    "04",
                    161
                ],
                [
                    "05",
                    102
                ],
                [
                    "06",
                    143
                ],
                [
                    "07",
                    331
                ],
                [
                    "08",
                    693
                ],
                [
                    "09",
                    1359
                ],
                [
                    "10",
                    2141
                ],
                [
                    "11",
                    2827
                ],
                [
                    "12",
                    3653
                ],
                [
                    "13",
                    4096
                ],
                [
                    "14",
                    4663
                ],
                [
                    "15",
                    4856
                ],
                [
                    "16",
                    5078
                ],
                [
                    "17",
                    4667
                ],
                [
                    "18",
                    4053
                ],
                [
                    "19",
                    2562
                ],
                [
                    "20",
                    1690
                ],
                [
                    "21",
                    1310
                ],
                [
                    "22",
                    900
                ],
                [
                    "23",
                    498
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.9\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    290
                ],
                [
                    "01",
                    164
                ],
                [
                    "02",
                    79
                ],
                [
                    "03",
                    60
                ],
                [
                    "04",
                    103
                ],
                [
                    "05",
                    468
                ],
                [
                    "06",
                    1477
                ],
                [
                    "07",
                    3303
                ],
                [
                    "08",
                    5879
                ],
                [
                    "09",
                    3958
                ],
                [
                    "10",
                    2146
                ],
                [
                    "11",
                    2189
                ],
                [
                    "12",
                    2777
                ],
                [
                    "13",
                    3041
                ],
                [
                    "14",
                    3388
                ],
                [
                    "15",
                    4026
                ],
                [
                    "16",
                    5466
                ],
                [
                    "17",
                    8984
                ],
                [
                    "18",
                    8868
                ],
                [
                    "19",
                    5171
                ],
                [
                    "20",
                    3086
                ],
                [
                    "21",
                    1846
                ],
                [
                    "22",
                    1343
                ],
                [
                    "23",
                    656
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.10\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    340
                ],
                [
                    "01",
                    172
                ],
                [
                    "02",
                    90
                ],
                [
                    "03",
                    68
                ],
                [
                    "04",
                    136
                ],
                [
                    "05",
                    474
                ],
                [
                    "06",
                    1713
                ],
                [
                    "07",
                    3805
                ],
                [
                    "08",
                    6990
                ],
                [
                    "09",
                    4664
                ],
                [
                    "10",
                    2458
                ],
                [
                    "11",
                    2210
                ],
                [
                    "12",
                    2534
                ],
                [
                    "13",
                    2748
                ],
                [
                    "14",
                    3013
                ],
                [
                    "15",
                    2986
                ],
                [
                    "16",
                    4135
                ],
                [
                    "17",
                    7297
                ],
                [
                    "18",
                    7427
                ],
                [
                    "19",
                    4635
                ],
                [
                    "20",
                    2731
                ],
                [
                    "21",
                    1887
                ],
                [
                    "22",
                    1135
                ],
                [
                    "23",
                    629
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.11\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    355
                ],
                [
                    "01",
                    147
                ],
                [
                    "02",
                    106
                ],
                [
                    "03",
                    50
                ],
                [
                    "04",
                    109
                ],
                [
                    "05",
                    494
                ],
                [
                    "06",
                    1527
                ],
                [
                    "07",
                    3400
                ],
                [
                    "08",
                    6447
                ],
                [
                    "09",
                    4290
                ],
                [
                    "10",
                    2338
                ],
                [
                    "11",
                    2310
                ],
                [
                    "12",
                    2715
                ],
                [
                    "13",
                    2757
                ],
                [
                    "14",
                    2937
                ],
                [
                    "15",
                    3339
                ],
                [
                    "16",
                    4331
                ],
                [
                    "17",
                    7054
                ],
                [
                    "18",
                    6938
                ],
                [
                    "19",
                    4221
                ],
                [
                    "20",
                    2465
                ],
                [
                    "21",
                    1666
                ],
                [
                    "22",
                    1133
                ],
                [
                    "23",
                    687
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.12\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    337
                ],
                [
                    "01",
                    156
                ],
                [
                    "02",
                    103
                ],
                [
                    "03",
                    81
                ],
                [
                    "04",
                    103
                ],
                [
                    "05",
                    417
                ],
                [
                    "06",
                    1368
                ],
                [
                    "07",
                    2981
                ],
                [
                    "08",
                    5534
                ],
                [
                    "09",
                    3940
                ],
                [
                    "10",
                    2233
                ],
                [
                    "11",
                    2096
                ],
                [
                    "12",
                    2339
                ],
                [
                    "13",
                    2544
                ],
                [
                    "14",
                    2775
                ],
                [
                    "15",
                    3007
                ],
                [
                    "16",
                    3778
                ],
                [
                    "17",
                    5509
                ],
                [
                    "18",
                    5267
                ],
                [
                    "19",
                    3234
                ],
                [
                    "20",
                    1329
                ],
                [
                    "21",
                    1034
                ],
                [
                    "22",
                    711
                ],
                [
                    "23",
                    456
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.13\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    259
                ],
                [
                    "01",
                    165
                ],
                [
                    "02",
                    88
                ],
                [
                    "03",
                    63
                ],
                [
                    "04",
                    75
                ],
                [
                    "05",
                    287
                ],
                [
                    "06",
                    516
                ],
                [
                    "07",
                    847
                ],
                [
                    "08",
                    1165
                ],
                [
                    "09",
                    1027
                ],
                [
                    "10",
                    1266
                ],
                [
                    "11",
                    1747
                ],
                [
                    "12",
                    2376
                ],
                [
                    "13",
                    2792
                ],
                [
                    "14",
                    3348
                ],
                [
                    "15",
                    3694
                ],
                [
                    "16",
                    4428
                ],
                [
                    "17",
                    5721
                ],
                [
                    "18",
                    5166
                ],
                [
                    "19",
                    3493
                ],
                [
                    "20",
                    1966
                ],
                [
                    "21",
                    1307
                ],
                [
                    "22",
                    902
                ],
                [
                    "23",
                    645
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.14\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    431
                ],
                [
                    "01",
                    261
                ],
                [
                    "02",
                    146
                ],
                [
                    "03",
                    88
                ],
                [
                    "04",
                    73
                ],
                [
                    "05",
                    80
                ],
                [
                    "06",
                    227
                ],
                [
                    "07",
                    523
                ],
                [
                    "08",
                    1051
                ],
                [
                    "09",
                    1587
                ],
                [
                    "10",
                    2205
                ],
                [
                    "11",
                    2969
                ],
                [
                    "12",
                    3524
                ],
                [
                    "13",
                    4234
                ],
                [
                    "14",
                    4619
                ],
                [
                    "15",
                    4800
                ],
                [
                    "16",
                    4700
                ],
                [
                    "17",
                    4111
                ],
                [
                    "18",
                    3006
                ],
                [
                    "19",
                    2030
                ],
                [
                    "20",
                    1291
                ],
                [
                    "21",
                    966
                ],
                [
                    "22",
                    738
                ],
                [
                    "23",
                    579
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.15\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    410
                ],
                [
                    "01",
                    232
                ],
                [
                    "02",
                    117
                ],
                [
                    "03",
                    71
                ],
                [
                    "04",
                    50
                ],
                [
                    "05",
                    50
                ],
                [
                    "06",
                    145
                ],
                [
                    "07",
                    358
                ],
                [
                    "08",
                    699
                ],
                [
                    "09",
                    1067
                ],
                [
                    "10",
                    1583
                ],
                [
                    "11",
                    2292
                ],
                [
                    "12",
                    2936
                ],
                [
                    "13",
                    3569
                ],
                [
                    "14",
                    3888
                ],
                [
                    "15",
                    4103
                ],
                [
                    "16",
                    3937
                ],
                [
                    "17",
                    3467
                ],
                [
                    "18",
                    2785
                ],
                [
                    "19",
                    1767
                ],
                [
                    "20",
                    1066
                ],
                [
                    "21",
                    704
                ],
                [
                    "22",
                    519
                ],
                [
                    "23",
                    325
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.16\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    175
                ],
                [
                    "01",
                    97
                ],
                [
                    "02",
                    46
                ],
                [
                    "03",
                    32
                ],
                [
                    "04",
                    44
                ],
                [
                    "05",
                    227
                ],
                [
                    "06",
                    782
                ],
                [
                    "07",
                    1499
                ],
                [
                    "08",
                    2165
                ],
                [
                    "09",
                    1683
                ],
                [
                    "10",
                    1387
                ],
                [
                    "11",
                    1500
                ],
                [
                    "12",
                    1911
                ],
                [
                    "13",
                    1949
                ],
                [
                    "14",
                    2093
                ],
                [
                    "15",
                    2134
                ],
                [
                    "16",
                    2336
                ],
                [
                    "17",
                    3016
                ],
                [
                    "18",
                    2630
                ],
                [
                    "19",
                    1689
                ],
                [
                    "20",
                    928
                ],
                [
                    "21",
                    529
                ],
                [
                    "22",
                    402
                ],
                [
                    "23",
                    227
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.17\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    115
                ],
                [
                    "01",
                    49
                ],
                [
                    "02",
                    31
                ],
                [
                    "03",
                    40
                ],
                [
                    "04",
                    36
                ],
                [
                    "05",
                    122
                ],
                [
                    "06",
                    343
                ],
                [
                    "07",
                    456
                ],
                [
                    "08",
                    779
                ],
                [
                    "09",
                    577
                ],
                [
                    "10",
                    510
                ],
                [
                    "11",
                    848
                ],
                [
                    "12",
                    1395
                ],
                [
                    "13",
                    1664
                ],
                [
                    "14",
                    1881
                ],
                [
                    "15",
                    2133
                ],
                [
                    "16",
                    2698
                ],
                [
                    "17",
                    3087
                ],
                [
                    "18",
                    3090
                ],
                [
                    "19",
                    2057
                ],
                [
                    "20",
                    1001
                ],
                [
                    "21",
                    679
                ],
                [
                    "22",
                    454
                ],
                [
                    "23",
                    286
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.18\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    187
                ],
                [
                    "01",
                    77
                ],
                [
                    "02",
                    52
                ],
                [
                    "03",
                    36
                ],
                [
                    "04",
                    60
                ],
                [
                    "05",
                    162
                ],
                [
                    "06",
                    648
                ],
                [
                    "07",
                    1215
                ],
                [
                    "08",
                    1678
                ],
                [
                    "09",
                    1469
                ],
                [
                    "10",
                    1397
                ],
                [
                    "11",
                    1595
                ],
                [
                    "12",
                    2079
                ],
                [
                    "13",
                    2168
                ],
                [
                    "14",
                    2286
                ],
                [
                    "15",
                    2653
                ],
                [
                    "16",
                    2696
                ],
                [
                    "17",
                    3159
                ],
                [
                    "18",
                    2924
                ],
                [
                    "19",
                    1857
                ],
                [
                    "20",
                    929
                ],
                [
                    "21",
                    553
                ],
                [
                    "22",
                    342
                ],
                [
                    "23",
                    274
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.19\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    139
                ],
                [
                    "01",
                    48
                ],
                [
                    "02",
                    14
                ],
                [
                    "03",
                    10
                ],
                [
                    "04",
                    10
                ],
                [
                    "05",
                    26
                ],
                [
                    "06",
                    160
                ],
                [
                    "07",
                    431
                ],
                [
                    "08",
                    653
                ],
                [
                    "09",
                    568
                ],
                [
                    "10",
                    756
                ],
                [
                    "11",
                    911
                ],
                [
                    "12",
                    1360
                ],
                [
                    "13",
                    1514
                ],
                [
                    "14",
                    1590
                ],
                [
                    "15",
                    1728
                ],
                [
                    "16",
                    1990
                ],
                [
                    "17",
                    2452
                ],
                [
                    "18",
                    2663
                ],
                [
                    "19",
                    1673
                ],
                [
                    "20",
                    959
                ],
                [
                    "21",
                    558
                ],
                [
                    "22",
                    329
                ],
                [
                    "23",
                    300
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.20\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    150
                ],
                [
                    "01",
                    54
                ],
                [
                    "02",
                    36
                ],
                [
                    "03",
                    14
                ],
                [
                    "04",
                    36
                ],
                [
                    "05",
                    154
                ],
                [
                    "06",
                    513
                ],
                [
                    "07",
                    819
                ],
                [
                    "08",
                    1160
                ],
                [
                    "09",
                    1120
                ],
                [
                    "10",
                    1113
                ],
                [
                    "11",
                    1341
                ],
                [
                    "12",
                    1716
                ],
                [
                    "13",
                    1981
                ],
                [
                    "14",
                    2157
                ],
                [
                    "15",
                    2548
                ],
                [
                    "16",
                    3200
                ],
                [
                    "17",
                    3883
                ],
                [
                    "18",
                    3889
                ],
                [
                    "19",
                    2479
                ],
                [
                    "20",
                    1313
                ],
                [
                    "21",
                    722
                ],
                [
                    "22",
                    513
                ],
                [
                    "23",
                    416
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.21\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    242
                ],
                [
                    "01",
                    172
                ],
                [
                    "02",
                    117
                ],
                [
                    "03",
                    46
                ],
                [
                    "04",
                    46
                ],
                [
                    "05",
                    57
                ],
                [
                    "06",
                    161
                ],
                [
                    "07",
                    307
                ],
                [
                    "08",
                    544
                ],
                [
                    "09",
                    896
                ],
                [
                    "10",
                    1198
                ],
                [
                    "11",
                    1686
                ],
                [
                    "12",
                    2390
                ],
                [
                    "13",
                    3082
                ],
                [
                    "14",
                    3716
                ],
                [
                    "15",
                    4019
                ],
                [
                    "16",
                    3842
                ],
                [
                    "17",
                    3327
                ],
                [
                    "18",
                    2483
                ],
                [
                    "19",
                    1501
                ],
                [
                    "20",
                    791
                ],
                [
                    "21",
                    531
                ],
                [
                    "22",
                    331
                ],
                [
                    "23",
                    227
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.22\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    157
                ],
                [
                    "01",
                    121
                ],
                [
                    "02",
                    47
                ],
                [
                    "03",
                    40
                ],
                [
                    "04",
                    29
                ],
                [
                    "05",
                    31
                ],
                [
                    "06",
                    118
                ],
                [
                    "07",
                    219
                ],
                [
                    "08",
                    404
                ],
                [
                    "09",
                    584
                ],
                [
                    "10",
                    880
                ],
                [
                    "11",
                    1163
                ],
                [
                    "12",
                    1541
                ],
                [
                    "13",
                    1823
                ],
                [
                    "14",
                    2242
                ],
                [
                    "15",
                    2532
                ],
                [
                    "16",
                    2502
                ],
                [
                    "17",
                    2044
                ],
                [
                    "18",
                    1446
                ],
                [
                    "19",
                    909
                ],
                [
                    "20",
                    419
                ],
                [
                    "21",
                    282
                ],
                [
                    "22",
                    210
                ],
                [
                    "23",
                    148
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.23\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    88
                ],
                [
                    "01",
                    41
                ],
                [
                    "02",
                    20
                ],
                [
                    "03",
                    14
                ],
                [
                    "04",
                    29
                ],
                [
                    "05",
                    89
                ],
                [
                    "06",
                    293
                ],
                [
                    "07",
                    342
                ],
                [
                    "08",
                    392
                ],
                [
                    "09",
                    305
                ],
                [
                    "10",
                    206
                ],
                [
                    "11",
                    154
                ],
                [
                    "12",
                    201
                ],
                [
                    "13",
                    195
                ],
                [
                    "14",
                    167
                ],
                [
                    "15",
                    177
                ],
                [
                    "16",
                    139
                ],
                [
                    "17",
                    180
                ],
                [
                    "18",
                    139
                ],
                [
                    "19",
                    156
                ],
                [
                    "20",
                    221
                ],
                [
                    "21",
                    205
                ],
                [
                    "22",
                    138
                ],
                [
                    "23",
                    108
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.24\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    60
                ],
                [
                    "01",
                    29
                ],
                [
                    "02",
                    23
                ],
                [
                    "03",
                    19
                ],
                [
                    "04",
                    34
                ],
                [
                    "05",
                    103
                ],
                [
                    "06",
                    387
                ],
                [
                    "07",
                    617
                ],
                [
                    "08",
                    746
                ],
                [
                    "09",
                    613
                ],
                [
                    "10",
                    702
                ],
                [
                    "11",
                    933
                ],
                [
                    "12",
                    1213
                ],
                [
                    "13",
                    1484
                ],
                [
                    "14",
                    1671
                ],
                [
                    "15",
                    1853
                ],
                [
                    "16",
                    2196
                ],
                [
                    "17",
                    2592
                ],
                [
                    "18",
                    2541
                ],
                [
                    "19",
                    1518
                ],
                [
                    "20",
                    731
                ],
                [
                    "21",
                    382
                ],
                [
                    "22",
                    259
                ],
                [
                    "23",
                    157
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.25\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    83
                ],
                [
                    "01",
                    37
                ],
                [
                    "02",
                    23
                ],
                [
                    "03",
                    20
                ],
                [
                    "04",
                    32
                ],
                [
                    "05",
                    91
                ],
                [
                    "06",
                    405
                ],
                [
                    "07",
                    574
                ],
                [
                    "08",
                    679
                ],
                [
                    "09",
                    581
                ],
                [
                    "10",
                    550
                ],
                [
                    "11",
                    665
                ],
                [
                    "12",
                    739
                ],
                [
                    "13",
                    890
                ],
                [
                    "14",
                    624
                ],
                [
                    "15",
                    600
                ],
                [
                    "16",
                    928
                ],
                [
                    "17",
                    1267
                ],
                [
                    "18",
                    1260
                ],
                [
                    "19",
                    863
                ],
                [
                    "20",
                    509
                ],
                [
                    "21",
                    303
                ],
                [
                    "22",
                    200
                ],
                [
                    "23",
                    143
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.26\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    90
                ],
                [
                    "01",
                    54
                ],
                [
                    "02",
                    27
                ],
                [
                    "03",
                    18
                ],
                [
                    "04",
                    23
                ],
                [
                    "05",
                    89
                ],
                [
                    "06",
                    405
                ],
                [
                    "07",
                    585
                ],
                [
                    "08",
                    765
                ],
                [
                    "09",
                    679
                ],
                [
                    "10",
                    742
                ],
                [
                    "11",
                    942
                ],
                [
                    "12",
                    1309
                ],
                [
                    "13",
                    1530
                ],
                [
                    "14",
                    1837
                ],
                [
                    "15",
                    2124
                ],
                [
                    "16",
                    2396
                ],
                [
                    "17",
                    2799
                ],
                [
                    "18",
                    2603
                ],
                [
                    "19",
                    1451
                ],
                [
                    "20",
                    680
                ],
                [
                    "21",
                    398
                ],
                [
                    "22",
                    292
                ],
                [
                    "23",
                    158
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.27\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    88
                ],
                [
                    "01",
                    51
                ],
                [
                    "02",
                    35
                ],
                [
                    "03",
                    24
                ],
                [
                    "04",
                    26
                ],
                [
                    "05",
                    100
                ],
                [
                    "06",
                    392
                ],
                [
                    "07",
                    574
                ],
                [
                    "08",
                    726
                ],
                [
                    "09",
                    688
                ],
                [
                    "10",
                    722
                ],
                [
                    "11",
                    1064
                ],
                [
                    "12",
                    1372
                ],
                [
                    "13",
                    1745
                ],
                [
                    "14",
                    2260
                ],
                [
                    "15",
                    2571
                ],
                [
                    "16",
                    2922
                ],
                [
                    "17",
                    3417
                ],
                [
                    "18",
                    3385
                ],
                [
                    "19",
                    2084
                ],
                [
                    "20",
                    1028
                ],
                [
                    "21",
                    548
                ],
                [
                    "22",
                    383
                ],
                [
                    "23",
                    299
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.28\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    175
                ],
                [
                    "01",
                    123
                ],
                [
                    "02",
                    72
                ],
                [
                    "03",
                    38
                ],
                [
                    "04",
                    36
                ],
                [
                    "05",
                    58
                ],
                [
                    "06",
                    160
                ],
                [
                    "07",
                    325
                ],
                [
                    "08",
                    611
                ],
                [
                    "09",
                    766
                ],
                [
                    "10",
                    496
                ],
                [
                    "11",
                    433
                ],
                [
                    "12",
                    550
                ],
                [
                    "13",
                    638
                ],
                [
                    "14",
                    429
                ],
                [
                    "15",
                    561
                ],
                [
                    "16",
                    892
                ],
                [
                    "17",
                    988
                ],
                [
                    "18",
                    639
                ],
                [
                    "19",
                    278
                ],
                [
                    "20",
                    240
                ],
                [
                    "21",
                    165
                ],
                [
                    "22",
                    106
                ],
                [
                    "23",
                    92
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.29\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    70
                ],
                [
                    "01",
                    35
                ],
                [
                    "02",
                    27
                ],
                [
                    "03",
                    27
                ],
                [
                    "04",
                    11
                ],
                [
                    "05",
                    24
                ],
                [
                    "06",
                    89
                ],
                [
                    "07",
                    168
                ],
                [
                    "08",
                    292
                ],
                [
                    "09",
                    339
                ],
                [
                    "10",
                    530
                ],
                [
                    "11",
                    507
                ],
                [
                    "12",
                    621
                ],
                [
                    "13",
                    754
                ],
                [
                    "14",
                    911
                ],
                [
                    "15",
                    1061
                ],
                [
                    "16",
                    1086
                ],
                [
                    "17",
                    924
                ],
                [
                    "18",
                    717
                ],
                [
                    "19",
                    525
                ],
                [
                    "20",
                    348
                ],
                [
                    "21",
                    246
                ],
                [
                    "22",
                    193
                ],
                [
                    "23",
                    141
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.30\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    81
                ],
                [
                    "01",
                    49
                ],
                [
                    "02",
                    56
                ],
                [
                    "03",
                    43
                ],
                [
                    "04",
                    28
                ],
                [
                    "05",
                    73
                ],
                [
                    "06",
                    355
                ],
                [
                    "07",
                    697
                ],
                [
                    "08",
                    812
                ],
                [
                    "09",
                    639
                ],
                [
                    "10",
                    712
                ],
                [
                    "11",
                    834
                ],
                [
                    "12",
                    1027
                ],
                [
                    "13",
                    1168
                ],
                [
                    "14",
                    1160
                ],
                [
                    "15",
                    1222
                ],
                [
                    "16",
                    1370
                ],
                [
                    "17",
                    1474
                ],
                [
                    "18",
                    1287
                ],
                [
                    "19",
                    932
                ],
                [
                    "20",
                    515
                ],
                [
                    "21",
                    212
                ],
                [
                    "22",
                    159
                ],
                [
                    "23",
                    136
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2020.3.31\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    83
                ],
                [
                    "01",
                    30
                ],
                [
                    "02",
                    24
                ],
                [
                    "03",
                    22
                ],
                [
                    "04",
                    30
                ],
                [
                    "05",
                    69
                ],
                [
                    "06",
                    321
                ],
                [
                    "07",
                    589
                ],
                [
                    "08",
                    676
                ],
                [
                    "09",
                    561
                ],
                [
                    "10",
                    571
                ],
                [
                    "11",
                    672
                ],
                [
                    "12",
                    895
                ],
                [
                    "13",
                    952
                ],
                [
                    "14",
                    1144
                ],
                [
                    "15",
                    1228
                ],
                [
                    "16",
                    1399
                ],
                [
                    "17",
                    1676
                ],
                [
                    "18",
                    1660
                ],
                [
                    "19",
                    1053
                ],
                [
                    "20",
                    600
                ],
                [
                    "21",
                    356
                ],
                [
                    "22",
                    237
                ],
                [
                    "23",
                    148
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.1\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    247
                ],
                [
                    "01",
                    109
                ],
                [
                    "02",
                    61
                ],
                [
                    "03",
                    42
                ],
                [
                    "04",
                    63
                ],
                [
                    "05",
                    164
                ],
                [
                    "06",
                    564
                ],
                [
                    "07",
                    1077
                ],
                [
                    "08",
                    2104
                ],
                [
                    "09",
                    1952
                ],
                [
                    "10",
                    1180
                ],
                [
                    "11",
                    1221
                ],
                [
                    "12",
                    1397
                ],
                [
                    "13",
                    1677
                ],
                [
                    "14",
                    1854
                ],
                [
                    "15",
                    2044
                ],
                [
                    "16",
                    2555
                ],
                [
                    "17",
                    3570
                ],
                [
                    "18",
                    2974
                ],
                [
                    "19",
                    2005
                ],
                [
                    "20",
                    1335
                ],
                [
                    "21",
                    887
                ],
                [
                    "22",
                    666
                ],
                [
                    "23",
                    485
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.2\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    255
                ],
                [
                    "01",
                    111
                ],
                [
                    "02",
                    64
                ],
                [
                    "03",
                    34
                ],
                [
                    "04",
                    23
                ],
                [
                    "05",
                    23
                ],
                [
                    "06",
                    44
                ],
                [
                    "07",
                    108
                ],
                [
                    "08",
                    276
                ],
                [
                    "09",
                    457
                ],
                [
                    "10",
                    757
                ],
                [
                    "11",
                    1006
                ],
                [
                    "12",
                    1183
                ],
                [
                    "13",
                    1444
                ],
                [
                    "14",
                    1515
                ],
                [
                    "15",
                    1758
                ],
                [
                    "16",
                    1811
                ],
                [
                    "17",
                    1708
                ],
                [
                    "18",
                    1423
                ],
                [
                    "19",
                    1245
                ],
                [
                    "20",
                    884
                ],
                [
                    "21",
                    764
                ],
                [
                    "22",
                    604
                ],
                [
                    "23",
                    504
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.3\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    349
                ],
                [
                    "01",
                    309
                ],
                [
                    "02",
                    159
                ],
                [
                    "03",
                    135
                ],
                [
                    "04",
                    73
                ],
                [
                    "05",
                    74
                ],
                [
                    "06",
                    138
                ],
                [
                    "07",
                    377
                ],
                [
                    "08",
                    792
                ],
                [
                    "09",
                    1292
                ],
                [
                    "10",
                    1857
                ],
                [
                    "11",
                    2386
                ],
                [
                    "12",
                    2698
                ],
                [
                    "13",
                    2692
                ],
                [
                    "14",
                    2513
                ],
                [
                    "15",
                    2544
                ],
                [
                    "16",
                    2071
                ],
                [
                    "17",
                    1023
                ],
                [
                    "18",
                    656
                ],
                [
                    "19",
                    424
                ],
                [
                    "20",
                    289
                ],
                [
                    "21",
                    182
                ],
                [
                    "22",
                    142
                ],
                [
                    "23",
                    64
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.4\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    32
                ],
                [
                    "01",
                    10
                ],
                [
                    "02",
                    5
                ],
                [
                    "03",
                    9
                ],
                [
                    "04",
                    30
                ],
                [
                    "05",
                    151
                ],
                [
                    "06",
                    474
                ],
                [
                    "07",
                    897
                ],
                [
                    "08",
                    1844
                ],
                [
                    "09",
                    1732
                ],
                [
                    "10",
                    1107
                ],
                [
                    "11",
                    1124
                ],
                [
                    "12",
                    1403
                ],
                [
                    "13",
                    1546
                ],
                [
                    "14",
                    1558
                ],
                [
                    "15",
                    1688
                ],
                [
                    "16",
                    2159
                ],
                [
                    "17",
                    3548
                ],
                [
                    "18",
                    3476
                ],
                [
                    "19",
                    2242
                ],
                [
                    "20",
                    1464
                ],
                [
                    "21",
                    944
                ],
                [
                    "22",
                    611
                ],
                [
                    "23",
                    367
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.5\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    156
                ],
                [
                    "01",
                    57
                ],
                [
                    "02",
                    39
                ],
                [
                    "03",
                    21
                ],
                [
                    "04",
                    83
                ],
                [
                    "05",
                    351
                ],
                [
                    "06",
                    1169
                ],
                [
                    "07",
                    2346
                ],
                [
                    "08",
                    4171
                ],
                [
                    "09",
                    2963
                ],
                [
                    "10",
                    1547
                ],
                [
                    "11",
                    1403
                ],
                [
                    "12",
                    1547
                ],
                [
                    "13",
                    1690
                ],
                [
                    "14",
                    1698
                ],
                [
                    "15",
                    1922
                ],
                [
                    "16",
                    2217
                ],
                [
                    "17",
                    3838
                ],
                [
                    "18",
                    3649
                ],
                [
                    "19",
                    2412
                ],
                [
                    "20",
                    1627
                ],
                [
                    "21",
                    1107
                ],
                [
                    "22",
                    698
                ],
                [
                    "23",
                    386
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.6\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    155
                ],
                [
                    "01",
                    74
                ],
                [
                    "02",
                    39
                ],
                [
                    "03",
                    26
                ],
                [
                    "04",
                    71
                ],
                [
                    "05",
                    317
                ],
                [
                    "06",
                    1094
                ],
                [
                    "07",
                    2282
                ],
                [
                    "08",
                    3725
                ],
                [
                    "09",
                    2756
                ],
                [
                    "10",
                    1438
                ],
                [
                    "11",
                    1302
                ],
                [
                    "12",
                    1493
                ],
                [
                    "13",
                    1418
                ],
                [
                    "14",
                    1451
                ],
                [
                    "15",
                    1638
                ],
                [
                    "16",
                    2051
                ],
                [
                    "17",
                    3523
                ],
                [
                    "18",
                    3218
                ],
                [
                    "19",
                    2061
                ],
                [
                    "20",
                    1360
                ],
                [
                    "21",
                    880
                ],
                [
                    "22",
                    601
                ],
                [
                    "23",
                    306
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.7\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    147
                ],
                [
                    "01",
                    76
                ],
                [
                    "02",
                    35
                ],
                [
                    "03",
                    17
                ],
                [
                    "04",
                    64
                ],
                [
                    "05",
                    292
                ],
                [
                    "06",
                    1013
                ],
                [
                    "07",
                    2319
                ],
                [
                    "08",
                    3833
                ],
                [
                    "09",
                    2857
                ],
                [
                    "10",
                    1493
                ],
                [
                    "11",
                    1389
                ],
                [
                    "12",
                    1527
                ],
                [
                    "13",
                    1610
                ],
                [
                    "14",
                    1644
                ],
                [
                    "15",
                    1758
                ],
                [
                    "16",
                    2328
                ],
                [
                    "17",
                    3842
                ],
                [
                    "18",
                    3435
                ],
                [
                    "19",
                    2351
                ],
                [
                    "20",
                    1529
                ],
                [
                    "21",
                    1136
                ],
                [
                    "22",
                    773
                ],
                [
                    "23",
                    439
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.8\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    241
                ],
                [
                    "01",
                    109
                ],
                [
                    "02",
                    49
                ],
                [
                    "03",
                    36
                ],
                [
                    "04",
                    71
                ],
                [
                    "05",
                    311
                ],
                [
                    "06",
                    1098
                ],
                [
                    "07",
                    2189
                ],
                [
                    "08",
                    4087
                ],
                [
                    "09",
                    3149
                ],
                [
                    "10",
                    1763
                ],
                [
                    "11",
                    1696
                ],
                [
                    "12",
                    2000
                ],
                [
                    "13",
                    2042
                ],
                [
                    "14",
                    2092
                ],
                [
                    "15",
                    2444
                ],
                [
                    "16",
                    3036
                ],
                [
                    "17",
                    4208
                ],
                [
                    "18",
                    3583
                ],
                [
                    "19",
                    2218
                ],
                [
                    "20",
                    1528
                ],
                [
                    "21",
                    999
                ],
                [
                    "22",
                    789
                ],
                [
                    "23",
                    668
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.9\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    463
                ],
                [
                    "01",
                    273
                ],
                [
                    "02",
                    195
                ],
                [
                    "03",
                    101
                ],
                [
                    "04",
                    76
                ],
                [
                    "05",
                    71
                ],
                [
                    "06",
                    236
                ],
                [
                    "07",
                    607
                ],
                [
                    "08",
                    1139
                ],
                [
                    "09",
                    1909
                ],
                [
                    "10",
                    2377
                ],
                [
                    "11",
                    2856
                ],
                [
                    "12",
                    3297
                ],
                [
                    "13",
                    3582
                ],
                [
                    "14",
                    3684
                ],
                [
                    "15",
                    3734
                ],
                [
                    "16",
                    3555
                ],
                [
                    "17",
                    3101
                ],
                [
                    "18",
                    2270
                ],
                [
                    "19",
                    1806
                ],
                [
                    "20",
                    1232
                ],
                [
                    "21",
                    1014
                ],
                [
                    "22",
                    715
                ],
                [
                    "23",
                    635
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.10\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    454
                ],
                [
                    "01",
                    349
                ],
                [
                    "02",
                    0
                ],
                [
                    "03",
                    193
                ],
                [
                    "04",
                    46
                ],
                [
                    "05",
                    34
                ],
                [
                    "06",
                    42
                ],
                [
                    "07",
                    111
                ],
                [
                    "08",
                    210
                ],
                [
                    "09",
                    226
                ],
                [
                    "10",
                    309
                ],
                [
                    "11",
                    468
                ],
                [
                    "12",
                    838
                ],
                [
                    "13",
                    1337
                ],
                [
                    "14",
                    1646
                ],
                [
                    "15",
                    1848
                ],
                [
                    "16",
                    2046
                ],
                [
                    "17",
                    2130
                ],
                [
                    "18",
                    2031
                ],
                [
                    "19",
                    1521
                ],
                [
                    "20",
                    1205
                ],
                [
                    "21",
                    856
                ],
                [
                    "22",
                    599
                ],
                [
                    "23",
                    398
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.11\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    189
                ],
                [
                    "01",
                    100
                ],
                [
                    "02",
                    51
                ],
                [
                    "03",
                    42
                ],
                [
                    "04",
                    90
                ],
                [
                    "05",
                    406
                ],
                [
                    "06",
                    1212
                ],
                [
                    "07",
                    2784
                ],
                [
                    "08",
                    5041
                ],
                [
                    "09",
                    3714
                ],
                [
                    "10",
                    1999
                ],
                [
                    "11",
                    1829
                ],
                [
                    "12",
                    2141
                ],
                [
                    "13",
                    2360
                ],
                [
                    "14",
                    2590
                ],
                [
                    "15",
                    2810
                ],
                [
                    "16",
                    3601
                ],
                [
                    "17",
                    6028
                ],
                [
                    "18",
                    6086
                ],
                [
                    "19",
                    3783
                ],
                [
                    "20",
                    2391
                ],
                [
                    "21",
                    1577
                ],
                [
                    "22",
                    1025
                ],
                [
                    "23",
                    564
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.12\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    208
                ],
                [
                    "01",
                    106
                ],
                [
                    "02",
                    53
                ],
                [
                    "03",
                    29
                ],
                [
                    "04",
                    91
                ],
                [
                    "05",
                    405
                ],
                [
                    "06",
                    1301
                ],
                [
                    "07",
                    2874
                ],
                [
                    "08",
                    5216
                ],
                [
                    "09",
                    3678
                ],
                [
                    "10",
                    1882
                ],
                [
                    "11",
                    1558
                ],
                [
                    "12",
                    2013
                ],
                [
                    "13",
                    1980
                ],
                [
                    "14",
                    1990
                ],
                [
                    "15",
                    2373
                ],
                [
                    "16",
                    3139
                ],
                [
                    "17",
                    5109
                ],
                [
                    "18",
                    5168
                ],
                [
                    "19",
                    3218
                ],
                [
                    "20",
                    2044
                ],
                [
                    "21",
                    1352
                ],
                [
                    "22",
                    923
                ],
                [
                    "23",
                    497
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.13\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    206
                ],
                [
                    "01",
                    89
                ],
                [
                    "02",
                    50
                ],
                [
                    "03",
                    29
                ],
                [
                    "04",
                    82
                ],
                [
                    "05",
                    411
                ],
                [
                    "06",
                    1303
                ],
                [
                    "07",
                    2795
                ],
                [
                    "08",
                    5151
                ],
                [
                    "09",
                    3945
                ],
                [
                    "10",
                    2149
                ],
                [
                    "11",
                    1910
                ],
                [
                    "12",
                    2319
                ],
                [
                    "13",
                    2409
                ],
                [
                    "14",
                    2485
                ],
                [
                    "15",
                    2700
                ],
                [
                    "16",
                    3184
                ],
                [
                    "17",
                    5145
                ],
                [
                    "18",
                    5103
                ],
                [
                    "19",
                    3212
                ],
                [
                    "20",
                    2204
                ],
                [
                    "21",
                    1487
                ],
                [
                    "22",
                    1116
                ],
                [
                    "23",
                    636
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.14\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    316
                ],
                [
                    "01",
                    151
                ],
                [
                    "02",
                    73
                ],
                [
                    "03",
                    41
                ],
                [
                    "04",
                    112
                ],
                [
                    "05",
                    403
                ],
                [
                    "06",
                    1349
                ],
                [
                    "07",
                    3053
                ],
                [
                    "08",
                    5891
                ],
                [
                    "09",
                    4220
                ],
                [
                    "10",
                    2355
                ],
                [
                    "11",
                    2302
                ],
                [
                    "12",
                    2718
                ],
                [
                    "13",
                    2749
                ],
                [
                    "14",
                    2737
                ],
                [
                    "15",
                    3159
                ],
                [
                    "16",
                    3814
                ],
                [
                    "17",
                    6049
                ],
                [
                    "18",
                    6068
                ],
                [
                    "19",
                    3737
                ],
                [
                    "20",
                    2452
                ],
                [
                    "21",
                    1695
                ],
                [
                    "22",
                    1188
                ],
                [
                    "23",
                    834
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.15\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    469
                ],
                [
                    "01",
                    212
                ],
                [
                    "02",
                    110
                ],
                [
                    "03",
                    76
                ],
                [
                    "04",
                    110
                ],
                [
                    "05",
                    383
                ],
                [
                    "06",
                    1123
                ],
                [
                    "07",
                    2424
                ],
                [
                    "08",
                    4980
                ],
                [
                    "09",
                    4251
                ],
                [
                    "10",
                    2540
                ],
                [
                    "11",
                    2442
                ],
                [
                    "12",
                    2864
                ],
                [
                    "13",
                    3143
                ],
                [
                    "14",
                    3385
                ],
                [
                    "15",
                    3898
                ],
                [
                    "16",
                    4748
                ],
                [
                    "17",
                    6782
                ],
                [
                    "18",
                    5901
                ],
                [
                    "19",
                    3703
                ],
                [
                    "20",
                    2345
                ],
                [
                    "21",
                    323
                ],
                [
                    "22",
                    517
                ],
                [
                    "23",
                    777
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.16\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    674
                ],
                [
                    "01",
                    388
                ],
                [
                    "02",
                    264
                ],
                [
                    "03",
                    146
                ],
                [
                    "04",
                    85
                ],
                [
                    "05",
                    92
                ],
                [
                    "06",
                    233
                ],
                [
                    "07",
                    631
                ],
                [
                    "08",
                    1302
                ],
                [
                    "09",
                    2111
                ],
                [
                    "10",
                    2936
                ],
                [
                    "11",
                    3161
                ],
                [
                    "12",
                    3488
                ],
                [
                    "13",
                    3857
                ],
                [
                    "14",
                    3811
                ],
                [
                    "15",
                    3731
                ],
                [
                    "16",
                    3500
                ],
                [
                    "17",
                    3254
                ],
                [
                    "18",
                    2759
                ],
                [
                    "19",
                    1894
                ],
                [
                    "20",
                    1342
                ],
                [
                    "21",
                    1021
                ],
                [
                    "22",
                    792
                ],
                [
                    "23",
                    666
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.17\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    448
                ],
                [
                    "01",
                    293
                ],
                [
                    "02",
                    202
                ],
                [
                    "03",
                    120
                ],
                [
                    "04",
                    83
                ],
                [
                    "05",
                    131
                ],
                [
                    "06",
                    275
                ],
                [
                    "07",
                    440
                ],
                [
                    "08",
                    928
                ],
                [
                    "09",
                    1574
                ],
                [
                    "10",
                    2117
                ],
                [
                    "11",
                    2666
                ],
                [
                    "12",
                    3084
                ],
                [
                    "13",
                    3311
                ],
                [
                    "14",
                    3428
                ],
                [
                    "15",
                    3588
                ],
                [
                    "16",
                    3444
                ],
                [
                    "17",
                    3089
                ],
                [
                    "18",
                    2744
                ],
                [
                    "19",
                    1807
                ],
                [
                    "20",
                    1207
                ],
                [
                    "21",
                    857
                ],
                [
                    "22",
                    581
                ],
                [
                    "23",
                    407
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.18\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    179
                ],
                [
                    "01",
                    101
                ],
                [
                    "02",
                    54
                ],
                [
                    "03",
                    33
                ],
                [
                    "04",
                    86
                ],
                [
                    "05",
                    392
                ],
                [
                    "06",
                    1194
                ],
                [
                    "07",
                    2502
                ],
                [
                    "08",
                    4633
                ],
                [
                    "09",
                    3429
                ],
                [
                    "10",
                    1829
                ],
                [
                    "11",
                    1738
                ],
                [
                    "12",
                    2001
                ],
                [
                    "13",
                    2146
                ],
                [
                    "14",
                    2209
                ],
                [
                    "15",
                    2401
                ],
                [
                    "16",
                    3062
                ],
                [
                    "17",
                    5273
                ],
                [
                    "18",
                    5276
                ],
                [
                    "19",
                    3209
                ],
                [
                    "20",
                    2044
                ],
                [
                    "21",
                    1339
                ],
                [
                    "22",
                    912
                ],
                [
                    "23",
                    490
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.19\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    250
                ],
                [
                    "01",
                    107
                ],
                [
                    "02",
                    53
                ],
                [
                    "03",
                    43
                ],
                [
                    "04",
                    85
                ],
                [
                    "05",
                    429
                ],
                [
                    "06",
                    1425
                ],
                [
                    "07",
                    3032
                ],
                [
                    "08",
                    5435
                ],
                [
                    "09",
                    3835
                ],
                [
                    "10",
                    2071
                ],
                [
                    "11",
                    2088
                ],
                [
                    "12",
                    2310
                ],
                [
                    "13",
                    2416
                ],
                [
                    "14",
                    2487
                ],
                [
                    "15",
                    2705
                ],
                [
                    "16",
                    3341
                ],
                [
                    "17",
                    5769
                ],
                [
                    "18",
                    5837
                ],
                [
                    "19",
                    3598
                ],
                [
                    "20",
                    2338
                ],
                [
                    "21",
                    1600
                ],
                [
                    "22",
                    1117
                ],
                [
                    "23",
                    610
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.20\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    288
                ],
                [
                    "01",
                    127
                ],
                [
                    "02",
                    89
                ],
                [
                    "03",
                    64
                ],
                [
                    "04",
                    91
                ],
                [
                    "05",
                    422
                ],
                [
                    "06",
                    1449
                ],
                [
                    "07",
                    2990
                ],
                [
                    "08",
                    5618
                ],
                [
                    "09",
                    4229
                ],
                [
                    "10",
                    2252
                ],
                [
                    "11",
                    2311
                ],
                [
                    "12",
                    2552
                ],
                [
                    "13",
                    2646
                ],
                [
                    "14",
                    2731
                ],
                [
                    "15",
                    2953
                ],
                [
                    "16",
                    3762
                ],
                [
                    "17",
                    5902
                ],
                [
                    "18",
                    5861
                ],
                [
                    "19",
                    3495
                ],
                [
                    "20",
                    2212
                ],
                [
                    "21",
                    1566
                ],
                [
                    "22",
                    1085
                ],
                [
                    "23",
                    684
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.21\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    309
                ],
                [
                    "01",
                    135
                ],
                [
                    "02",
                    83
                ],
                [
                    "03",
                    63
                ],
                [
                    "04",
                    96
                ],
                [
                    "05",
                    371
                ],
                [
                    "06",
                    1151
                ],
                [
                    "07",
                    1828
                ],
                [
                    "08",
                    2160
                ],
                [
                    "09",
                    1950
                ],
                [
                    "10",
                    753
                ],
                [
                    "11",
                    705
                ],
                [
                    "12",
                    848
                ],
                [
                    "13",
                    888
                ],
                [
                    "14",
                    1003
                ],
                [
                    "15",
                    1174
                ],
                [
                    "16",
                    977
                ],
                [
                    "17",
                    1586
                ],
                [
                    "18",
                    1386
                ],
                [
                    "19",
                    1666
                ],
                [
                    "20",
                    1191
                ],
                [
                    "21",
                    494
                ],
                [
                    "22",
                    307
                ],
                [
                    "23",
                    114
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.22\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    79
                ],
                [
                    "01",
                    30
                ],
                [
                    "02",
                    14
                ],
                [
                    "03",
                    21
                ],
                [
                    "04",
                    33
                ],
                [
                    "05",
                    116
                ],
                [
                    "06",
                    342
                ],
                [
                    "07",
                    700
                ],
                [
                    "08",
                    1981
                ],
                [
                    "09",
                    1637
                ],
                [
                    "10",
                    1209
                ],
                [
                    "11",
                    1043
                ],
                [
                    "12",
                    1685
                ],
                [
                    "13",
                    2019
                ],
                [
                    "14",
                    2311
                ],
                [
                    "15",
                    2617
                ],
                [
                    "16",
                    3415
                ],
                [
                    "17",
                    4784
                ],
                [
                    "18",
                    4295
                ],
                [
                    "19",
                    2743
                ],
                [
                    "20",
                    1692
                ],
                [
                    "21",
                    1199
                ],
                [
                    "22",
                    847
                ],
                [
                    "23",
                    651
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.23\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    478
                ],
                [
                    "01",
                    302
                ],
                [
                    "02",
                    168
                ],
                [
                    "03",
                    94
                ],
                [
                    "04",
                    66
                ],
                [
                    "05",
                    76
                ],
                [
                    "06",
                    195
                ],
                [
                    "07",
                    468
                ],
                [
                    "08",
                    972
                ],
                [
                    "09",
                    1577
                ],
                [
                    "10",
                    2128
                ],
                [
                    "11",
                    2561
                ],
                [
                    "12",
                    2957
                ],
                [
                    "13",
                    3227
                ],
                [
                    "14",
                    3431
                ],
                [
                    "15",
                    3337
                ],
                [
                    "16",
                    3380
                ],
                [
                    "17",
                    3112
                ],
                [
                    "18",
                    2702
                ],
                [
                    "19",
                    2078
                ],
                [
                    "20",
                    1491
                ],
                [
                    "21",
                    986
                ],
                [
                    "22",
                    928
                ],
                [
                    "23",
                    661
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.24\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    523
                ],
                [
                    "01",
                    349
                ],
                [
                    "02",
                    213
                ],
                [
                    "03",
                    141
                ],
                [
                    "04",
                    79
                ],
                [
                    "05",
                    77
                ],
                [
                    "06",
                    157
                ],
                [
                    "07",
                    420
                ],
                [
                    "08",
                    891
                ],
                [
                    "09",
                    1718
                ],
                [
                    "10",
                    2632
                ],
                [
                    "11",
                    3556
                ],
                [
                    "12",
                    4193
                ],
                [
                    "13",
                    4824
                ],
                [
                    "14",
                    5172
                ],
                [
                    "15",
                    5252
                ],
                [
                    "16",
                    4920
                ],
                [
                    "17",
                    4386
                ],
                [
                    "18",
                    3560
                ],
                [
                    "19",
                    2643
                ],
                [
                    "20",
                    1795
                ],
                [
                    "21",
                    1339
                ],
                [
                    "22",
                    928
                ],
                [
                    "23",
                    544
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.25\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    267
                ],
                [
                    "01",
                    110
                ],
                [
                    "02",
                    78
                ],
                [
                    "03",
                    68
                ],
                [
                    "04",
                    99
                ],
                [
                    "05",
                    441
                ],
                [
                    "06",
                    1463
                ],
                [
                    "07",
                    3066
                ],
                [
                    "08",
                    5961
                ],
                [
                    "09",
                    3940
                ],
                [
                    "10",
                    2064
                ],
                [
                    "11",
                    1930
                ],
                [
                    "12",
                    2202
                ],
                [
                    "13",
                    2188
                ],
                [
                    "14",
                    2356
                ],
                [
                    "15",
                    2656
                ],
                [
                    "16",
                    3520
                ],
                [
                    "17",
                    6073
                ],
                [
                    "18",
                    6014
                ],
                [
                    "19",
                    3567
                ],
                [
                    "20",
                    2155
                ],
                [
                    "21",
                    1611
                ],
                [
                    "22",
                    1049
                ],
                [
                    "23",
                    573
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.26\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    243
                ],
                [
                    "01",
                    103
                ],
                [
                    "02",
                    64
                ],
                [
                    "03",
                    47
                ],
                [
                    "04",
                    91
                ],
                [
                    "05",
                    409
                ],
                [
                    "06",
                    1474
                ],
                [
                    "07",
                    3105
                ],
                [
                    "08",
                    5513
                ],
                [
                    "09",
                    3983
                ],
                [
                    "10",
                    2171
                ],
                [
                    "11",
                    2005
                ],
                [
                    "12",
                    2326
                ],
                [
                    "13",
                    2505
                ],
                [
                    "14",
                    2559
                ],
                [
                    "15",
                    2664
                ],
                [
                    "16",
                    3632
                ],
                [
                    "17",
                    6167
                ],
                [
                    "18",
                    6430
                ],
                [
                    "19",
                    4059
                ],
                [
                    "20",
                    2469
                ],
                [
                    "21",
                    1672
                ],
                [
                    "22",
                    1146
                ],
                [
                    "23",
                    577
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.27\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    244
                ],
                [
                    "01",
                    110
                ],
                [
                    "02",
                    77
                ],
                [
                    "03",
                    24
                ],
                [
                    "04",
                    92
                ],
                [
                    "05",
                    421
                ],
                [
                    "06",
                    1438
                ],
                [
                    "07",
                    3074
                ],
                [
                    "08",
                    5457
                ],
                [
                    "09",
                    4074
                ],
                [
                    "10",
                    2347
                ],
                [
                    "11",
                    2170
                ],
                [
                    "12",
                    2525
                ],
                [
                    "13",
                    2541
                ],
                [
                    "14",
                    2707
                ],
                [
                    "15",
                    2875
                ],
                [
                    "16",
                    3534
                ],
                [
                    "17",
                    5855
                ],
                [
                    "18",
                    5629
                ],
                [
                    "19",
                    3605
                ],
                [
                    "20",
                    2297
                ],
                [
                    "21",
                    1585
                ],
                [
                    "22",
                    1115
                ],
                [
                    "23",
                    677
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.28\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    284
                ],
                [
                    "01",
                    143
                ],
                [
                    "02",
                    58
                ],
                [
                    "03",
                    39
                ],
                [
                    "04",
                    116
                ],
                [
                    "05",
                    419
                ],
                [
                    "06",
                    1463
                ],
                [
                    "07",
                    3221
                ],
                [
                    "08",
                    5692
                ],
                [
                    "09",
                    4280
                ],
                [
                    "10",
                    2414
                ],
                [
                    "11",
                    2340
                ],
                [
                    "12",
                    2815
                ],
                [
                    "13",
                    2721
                ],
                [
                    "14",
                    2966
                ],
                [
                    "15",
                    3224
                ],
                [
                    "16",
                    3863
                ],
                [
                    "17",
                    6245
                ],
                [
                    "18",
                    5840
                ],
                [
                    "19",
                    3844
                ],
                [
                    "20",
                    2589
                ],
                [
                    "21",
                    1730
                ],
                [
                    "22",
                    1409
                ],
                [
                    "23",
                    814
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.29\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    472
                ],
                [
                    "01",
                    204
                ],
                [
                    "02",
                    101
                ],
                [
                    "03",
                    71
                ],
                [
                    "04",
                    96
                ],
                [
                    "05",
                    423
                ],
                [
                    "06",
                    1424
                ],
                [
                    "07",
                    3061
                ],
                [
                    "08",
                    5545
                ],
                [
                    "09",
                    4204
                ],
                [
                    "10",
                    2494
                ],
                [
                    "11",
                    2584
                ],
                [
                    "12",
                    3072
                ],
                [
                    "13",
                    3112
                ],
                [
                    "14",
                    3284
                ],
                [
                    "15",
                    2910
                ],
                [
                    "16",
                    3871
                ],
                [
                    "17",
                    6382
                ],
                [
                    "18",
                    5637
                ],
                [
                    "19",
                    3724
                ],
                [
                    "20",
                    2337
                ],
                [
                    "21",
                    1734
                ],
                [
                    "22",
                    1471
                ],
                [
                    "23",
                    1094
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.30\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    924
                ],
                [
                    "01",
                    532
                ],
                [
                    "02",
                    335
                ],
                [
                    "03",
                    211
                ],
                [
                    "04",
                    135
                ],
                [
                    "05",
                    164
                ],
                [
                    "06",
                    312
                ],
                [
                    "07",
                    744
                ],
                [
                    "08",
                    1608
                ],
                [
                    "09",
                    2727
                ],
                [
                    "10",
                    3753
                ],
                [
                    "11",
                    4823
                ],
                [
                    "12",
                    5761
                ],
                [
                    "13",
                    6350
                ],
                [
                    "14",
                    6228
                ],
                [
                    "15",
                    6367
                ],
                [
                    "16",
                    5986
                ],
                [
                    "17",
                    5365
                ],
                [
                    "18",
                    4721
                ],
                [
                    "19",
                    3348
                ],
                [
                    "20",
                    2184
                ],
                [
                    "21",
                    1585
                ],
                [
                    "22",
                    1305
                ],
                [
                    "23",
                    1194
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "2019.3.31\u501f\u51fa\u60c5\u51b5",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "00",
                    821
                ],
                [
                    "01",
                    579
                ],
                [
                    "02",
                    421
                ],
                [
                    "03",
                    203
                ],
                [
                    "04",
                    127
                ],
                [
                    "05",
                    103
                ],
                [
                    "06",
                    242
                ],
                [
                    "07",
                    554
                ],
                [
                    "08",
                    1185
                ],
                [
                    "09",
                    2090
                ],
                [
                    "10",
                    2839
                ],
                [
                    "11",
                    1834
                ],
                [
                    "12",
                    2053
                ],
                [
                    "13",
                    1948
                ],
                [
                    "14",
                    1588
                ],
                [
                    "15",
                    1705
                ],
                [
                    "16",
                    2276
                ],
                [
                    "17",
                    3149
                ],
                [
                    "18",
                    3014
                ],
                [
                    "19",
                    2230
                ],
                [
                    "20",
                    1586
                ],
                [
                    "21",
                    1090
                ],
                [
                    "22",
                    685
                ],
                [
                    "23",
                    440
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        }
    ],
    "legend": [
        {
            type: 'scroll',
            orient: 'vertical',
            align:'auto',
            right: -40,
            top: 20,
            bottom: 20,
            "data": [
                "2020.3.1\u501f\u51fa\u60c5\u51b5",
                "2020.3.2\u501f\u51fa\u60c5\u51b5",
                "2020.3.3\u501f\u51fa\u60c5\u51b5",
                "2020.3.4\u501f\u51fa\u60c5\u51b5",
                "2020.3.5\u501f\u51fa\u60c5\u51b5",
                "2020.3.6\u501f\u51fa\u60c5\u51b5",
                "2020.3.7\u501f\u51fa\u60c5\u51b5",
                "2020.3.8\u501f\u51fa\u60c5\u51b5",
                "2020.3.9\u501f\u51fa\u60c5\u51b5",
                "2020.3.10\u501f\u51fa\u60c5\u51b5",
                "2020.3.11\u501f\u51fa\u60c5\u51b5",
                "2020.3.12\u501f\u51fa\u60c5\u51b5",
                "2020.3.13\u501f\u51fa\u60c5\u51b5",
                "2020.3.14\u501f\u51fa\u60c5\u51b5",
                "2020.3.15\u501f\u51fa\u60c5\u51b5",
                "2020.3.16\u501f\u51fa\u60c5\u51b5",
                "2020.3.17\u501f\u51fa\u60c5\u51b5",
                "2020.3.18\u501f\u51fa\u60c5\u51b5",
                "2020.3.19\u501f\u51fa\u60c5\u51b5",
                "2020.3.20\u501f\u51fa\u60c5\u51b5",
                "2020.3.21\u501f\u51fa\u60c5\u51b5",
                "2020.3.22\u501f\u51fa\u60c5\u51b5",
                "2020.3.23\u501f\u51fa\u60c5\u51b5",
                "2020.3.24\u501f\u51fa\u60c5\u51b5",
                "2020.3.25\u501f\u51fa\u60c5\u51b5",
                "2020.3.26\u501f\u51fa\u60c5\u51b5",
                "2020.3.27\u501f\u51fa\u60c5\u51b5",
                "2020.3.28\u501f\u51fa\u60c5\u51b5",
                "2020.3.29\u501f\u51fa\u60c5\u51b5",
                "2020.3.30\u501f\u51fa\u60c5\u51b5",
                "2020.3.31\u501f\u51fa\u60c5\u51b5",
                "2019.3.1\u501f\u51fa\u60c5\u51b5",
                "2019.3.2\u501f\u51fa\u60c5\u51b5",
                "2019.3.3\u501f\u51fa\u60c5\u51b5",
                "2019.3.4\u501f\u51fa\u60c5\u51b5",
                "2019.3.5\u501f\u51fa\u60c5\u51b5",
                "2019.3.6\u501f\u51fa\u60c5\u51b5",
                "2019.3.7\u501f\u51fa\u60c5\u51b5",
                "2019.3.8\u501f\u51fa\u60c5\u51b5",
                "2019.3.9\u501f\u51fa\u60c5\u51b5",
                "2019.3.10\u501f\u51fa\u60c5\u51b5",
                "2019.3.11\u501f\u51fa\u60c5\u51b5",
                "2019.3.12\u501f\u51fa\u60c5\u51b5",
                "2019.3.13\u501f\u51fa\u60c5\u51b5",
                "2019.3.14\u501f\u51fa\u60c5\u51b5",
                "2019.3.15\u501f\u51fa\u60c5\u51b5",
                "2019.3.16\u501f\u51fa\u60c5\u51b5",
                "2019.3.17\u501f\u51fa\u60c5\u51b5",
                "2019.3.18\u501f\u51fa\u60c5\u51b5",
                "2019.3.19\u501f\u51fa\u60c5\u51b5",
                "2019.3.20\u501f\u51fa\u60c5\u51b5",
                "2019.3.21\u501f\u51fa\u60c5\u51b5",
                "2019.3.22\u501f\u51fa\u60c5\u51b5",
                "2019.3.23\u501f\u51fa\u60c5\u51b5",
                "2019.3.24\u501f\u51fa\u60c5\u51b5",
                "2019.3.25\u501f\u51fa\u60c5\u51b5",
                "2019.3.26\u501f\u51fa\u60c5\u51b5",
                "2019.3.27\u501f\u51fa\u60c5\u51b5",
                "2019.3.28\u501f\u51fa\u60c5\u51b5",
                "2019.3.29\u501f\u51fa\u60c5\u51b5",
                "2019.3.30\u501f\u51fa\u60c5\u51b5",
                "2019.3.31\u501f\u51fa\u60c5\u51b5"
            ],
            "selected": {
                "2020.3.1\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.2\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.3\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.4\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.5\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.6\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.7\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.8\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.9\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.10\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.11\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.12\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.13\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.14\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.15\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.16\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.17\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.18\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.19\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.20\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.21\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.22\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.23\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.24\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.25\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.26\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.27\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.28\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.29\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.30\u501f\u51fa\u60c5\u51b5": false,
                "2020.3.31\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.1\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.2\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.3\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.4\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.5\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.6\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.7\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.8\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.9\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.10\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.11\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.12\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.13\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.14\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.15\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.16\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.17\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.18\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.19\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.20\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.21\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.22\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.23\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.24\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.25\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.26\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.27\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.28\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.29\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.30\u501f\u51fa\u60c5\u51b5": false,
                "2019.3.31\u501f\u51fa\u60c5\u51b5": true
            },
            "X": "left",
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "00",
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {

            "padding": 5,
            "itemGap": 10
        }
    ]
};
chart_d0a4bb8be35841c28cd5b46eabf60ef3.setOption(option_d0a4bb8be35841c28cd5b46eabf60ef3);

