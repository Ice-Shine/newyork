//初始化echarts,并和框体map绑定。
var myChart2 = echarts.init(document.getElementById('map2'));

//手工写入的一个迁徙线的数据，正常项目中应该是由AJAX或其他方式来获取数据。
var linesdata = [];
var linesmax=[];
/*$("#button").click(function(){
	$.post("map", {
		year:2020,
		month:3,
		day:1,
		num:10
	},function (data) {
		console.log(option.series[1].data);

		option.series[1].data=data;//1是普通线2是最多线
		console.log(data);
		myChart.setOption(option);
	});
});*/
function getLines2() {

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "/map" ,
		data: $('#form2').serialize(), //提交的数据
		success: function (result) {//返回一个path和一个points
			if(result==null){
				alert("请输入正确的日期！");
			}else{
                console.log(option.series[1].data);

                option.series[1].data=result.path;//1是普通线2是最多线
                option.series[0].data=result.points;
                console.log(result.points);
                myChart2.setOption(option);
			}


		},
		error : function() {
			alert("请输入正确的日期！");
		}
	});

	return false;
}
var points=[];




//echarts中使用地图的配置参数
var option = {
    bmap: {
        // 百度地图中心经纬度 坐标拾取器http://api.map.baidu.com/lbsapi/getpoint/index.html
        center: [-73.97999825,40.72219576],
        // 百度地图缩放等级，数字越大，放大越大，地图比例尺越小
        zoom: 14,
        // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        roam: true,
        // mapStyle是百度地图的自定义样式，见 http://developer.baidu.com/map/custom/
        mapStyle: {
            styleJson: [/*{
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#021019"
                }
            },
                {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#147a92"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#0b3d51"
                    }
                },
                {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#08304b"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#08304b"
                    }
                },
                {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                        "lightness": -70
                    }
                },
                {
                    "featureType": "building",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#857f7f"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#000000"
                    }
                },
                {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#022338"
                    }
                },
                {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#062032"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                        "color": "#1e1c1c"
                    }
                },
                {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#022338"
                    }
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#2da0c6",
                        "visibility": "on"
                    }
                }*/
            ]
        }
    },
    "title": [
        {
            "text": "纽约自行车租还情况图",
            "padding": 5,
            "itemGap": 10
        }
    ],
    visualMap: {
        type: 'continuous',
        min:0,                                  //指定 visualMapContinuous 组件的允许的最小值
        max:20,
        /*pieces: [      // 自定义每一段的范围，以及每一段的文字
            { min: 10, label: '10以上'}, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 5, max: 10, label: '5-10'},
            { min: 3, max: 5, label: '3-5'},
            { max: 3, label: '3以下'}          // 不指定 min，表示 min 为无限大（-Infinity）。
        ],*/
        seriesIndex:1,//指定series里的哪个数据
        //dimension:3,//找数据的维度
        inRange: {
            // 渐变颜色，从小到大
            //color: ['#dacfa5', '#e8cc32', '#ef9930', '#ef0002']
            color: ['#6ab92c', '#aed606', '#fef804','#ff7b00','#db253e','#5b1875']
        },
        zlevel:2,
        padding:50,
    },
    "legend": [
        {
            "data": [
                "2020-3"
            ],
            "selected": {
                "2020-3": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
//series是在地图上的线条等效果的配置文件，具体可以查阅文档。
    series: [
		{
			name: '2020.3point',
			type: 'scatter',
			coordinateSystem: 'bmap',
			data: points,
			symbolSize: 10,
			encode: {
				value: 2
			},
			zlevel: 3,
			label: {
				formatter: '{b}',
				position: 'right',
				show: false
			},
			emphasis: {
				label: {
					show: true
				}
			}
		},
    	{
            name: "2020-3",
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            effect: {
                show: false,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 10,
                constantSpeed: 0,

        },
        "symbol": [
            "none",
            "arrow"

        ],
        lineStyle: {
            normal: {
                color: "#a6c84c",
                width: 2,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        //将手动做的一个迁徙数据放入线条的数据部分。
        data: linesdata
    },
		{
			name: "2020-3max",
			type: 'lines',
			coordinateSystem: 'bmap',
			zlevel: 3,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: 'arrow',
				symbolSize: 10,
				constantSpeed: 0,

			},
			"symbol": [
				"none",

			],
			lineStyle: {
				normal: {
					color: "red",
					width: 3,
					opacity: 0.6,
					curveness: 0.2
				}
			},
			//将手动做的一个迁徙数据放入线条的数据部分。
			data: linesmax
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
        "formatter": function (params) {
            console.log(params);
            return ;

        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    }

};

//配置参数传入图形实例中
myChart2.setOption(option);
//初始化bmap和echarts实例绑定
var bmap = myChart2.getModel().getComponent('bmap').getBMap();
bmap.addControl(new BMap.MapTypeControl());

if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点


    /* var options = {
         size: BMAP_POINT_SIZE_SMALL,
         shape: BMAP_POINT_SHAPE_STAR,
         color: '#d340c3'
     }*/
    var pointCollection = new BMap.PointCollection(points);  // 初始化PointCollection
    pointCollection.addEventListener('click', function (e) {
        var opts = {
            width : 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title :e.point.title , // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
			setTop: true
        }
        var infoWindow = new BMap.InfoWindow(e.point.lng + ',' + e.point.lat, opts);  // 创建信息窗口对象

            bmap.openInfoWindow(infoWindow,e.point); //开启信息窗口

      //  alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
    });
    bmap.addOverlay(pointCollection);  // 添加Overlay
    myChart2.on('click', function (params) {
        console.log(params);
        alert('数量是：'+params.data.value);
    });
} else {
    alert('请在chrome、safari、IE8+以上浏览器查看本示例');
}

function get(points,lng,lat,title) {
	points.push({
		name:title,
		value:[lng,lat]
	});
}