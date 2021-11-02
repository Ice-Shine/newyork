//初始化echarts,并和框体map绑定。
var myChart = echarts.init(document.getElementById('map'));

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
function getLines() {

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "/map" ,
		data: $('#form1').serialize(), //提交的数据
		success: function (result) {
			if(result==null){
				alert("请输入正确的日期！");
			}else{
				console.log(option.series[1].data);

				option.series[1].data=result;//1是普通线2是最多线
				console.log(result);
				myChart.setOption(option);
			}


		},
		error : function() {
			alert("请输入正确的日期！");
		}
	});

	return false;
}
var points=[];
get(points,-73.95355502,40.80226458,"[ 40.80226458 -73.95355502]");
get(points,-73.94482205631833,40.70495520325787,"[ 40.7049552  -73.94482206]");
get(points,-73.99793472956988,40.727337478663976,"[ 40.72733748 -73.99793473]");
get(points,-73.96191975642873,40.76189835915254,"[ 40.76189836 -73.96191976]");
get(points,-73.9946678695664,40.67899569599493,"[ 40.6789957  -73.99466787]");
get(points,-73.90133399999999,40.6982,"[ 40.6982   -73.901334]");
get(points,-73.99143057889415,40.759707252904995,"[ 40.75970725 -73.99143058]");
get(points,-73.95828648689772,40.67476751209813,"[ 40.67476751 -73.95828649]");
get(points,-73.9254769793184,40.767410011428154,"[ 40.76741001 -73.92547698]");
get(points,-73.97944723,40.69630197272727,"[ 40.69630197 -73.97944723]");
get(points,-74.03820467123043,40.7191532142622,"[ 40.71915321 -74.03820467]");
get(points,-73.98039283521818,40.73025252461316,"[ 40.73025252 -73.98039284]");
get(points,-73.9285737,40.69917515,"[ 40.69917515 -73.9285737 ]");
get(points,-73.95754318872999,40.719278114916065,"[ 40.71927811 -73.95754319]");
get(points,-74.0099610459091,40.70559545409091,"[ 40.70559545 -74.00996105]");
get(points,-73.97809637327825,40.778929974370406,"[ 40.77892997 -73.97809637]");
get(points,-73.94777197121292,40.777587807051795,"[ 40.77758781 -73.94777197]");
get(points,-73.94302358484055,40.757849757387966,"[ 40.75784976 -73.94302358]");
get(points,-73.99513133945236,40.74595877643876,"[ 40.74595878 -73.99513134]");
get(points,-73.97794335607983,40.67386077026985,"[ 40.67386077 -73.97794336]");
get(points,-73.93885572764705,40.79697736941176,"[ 40.79697737 -73.93885573]");
get(points,-73.97518061217572,40.752924706655925,"[ 40.75292471 -73.97518061]");
get(points,-73.99610118421053,40.714327706842106,"[ 40.71432771 -73.99610118]");
get(points,-74.00866936918135,40.67671749946484,"[ 40.6767175  -74.00866937]");
get(points,-73.90718940384706,40.681671646954605,"[ 40.68167165 -73.9071894 ]");
get(points,-73.95540630462729,40.73120245865939,"[ 40.73120246 -73.9554063 ]");
get(points,-73.99609773314826,40.68868053178531,"[ 40.68868053 -73.99609773]");
get(points,-73.91614022222223,40.69926366666667,"[ 40.69926367 -73.91614022]");
get(points,-73.97438415560946,40.78866500291553,"[ 40.788665   -73.97438416]");
get(points,-73.95060446263946,40.692578755249556,"[ 40.69257876 -73.95060446]");
get(points,-73.97933723268436,40.74179249539119,"[ 40.7417925  -73.97933723]");
get(points,-73.98965388038765,40.73411954115772,"[ 40.73411954 -73.98965388]");
get(points,-73.95662244963984,40.7796775381043,"[ 40.77967754 -73.95662245]");
get(points,-73.95361463880649,40.744927158848824,"[ 40.74492716 -73.95361464]");
get(points,-73.94576244810659,40.72084529492045,"[ 40.72084529 -73.94576245]");
get(points,-73.97537760882732,40.686240139713256,"[ 40.68624014 -73.97537761]");
get(points,-74.00559516909887,40.72113580152774,"[ 40.7211358  -74.00559517]");
get(points,-73.93286708558054,40.757071474607386,"[ 40.75707147 -73.93286709]");
get(points,-74.00736521620401,40.73236565419754,"[ 40.73236565 -74.00736522]");
get(points,-73.95923082046933,40.81039881256099,"[ 40.81039881 -73.95923082]");
get(points,-74.04044330120087,40.748715945380226,"[ 40.74871595 -74.0404433 ]");
get(points,-73.97884171538462,40.72249210384615,"[ 40.7224921  -73.97884172]");
get(points,-74.00337774678961,40.74940037449328,"[ 40.74940037 -74.00337775]");
get(points,-73.96509517060203,40.79752693756678,"[ 40.79752694 -73.96509517]");
get(points,-73.96991614415496,40.76074289239098,"[ 40.76074289 -73.96991614]");
get(points,-73.93772036071428,40.71274354357143,"[ 40.71274354 -73.93772036]");
get(points,-74.07126188278198,40.71928220070702,"[ 40.7192822  -74.07126188]");
get(points,-73.93404862222222,40.7689874,"[ 40.7689874  -73.93404862]");
get(points,-73.96520117111874,40.70934401743747,"[ 40.70934402 -73.96520117]");
get(points,-73.98629744921882,40.66859602208761,"[ 40.66859602 -73.98629745]");
get(points,-73.93961099124208,40.68227978740434,"[ 40.68227979 -73.93961099]");
get(points,-73.94372584442577,40.806867362314954,"[ 40.80686736 -73.94372584]");
get(points,-73.96069075148118,40.770571047147975,"[ 40.77057105 -73.96069075]");
get(points,-73.94850865966164,40.78906217597076,"[ 40.78906218 -73.94850866]");
get(points,-73.96867906148196,40.678214802883616,"[ 40.6782148  -73.96867906]");
get(points,-73.98600536072104,40.68735565580014,"[ 40.68735566 -73.98600536]");
get(points,-73.95651373039549,40.684580407202674,"[ 40.68458041 -73.95651373]");
get(points,-73.98892057785778,40.72139044404578,"[ 40.72139044 -73.98892058]");
get(points,-73.9905098395787,40.76823133228271,"[ 40.76823133 -73.99050984]");
get(points,-73.90812684090952,40.705253877595226,"[ 40.70525388 -73.90812684]");
get(points,-73.90826090909091,40.692744545454545,"[ 40.69274455 -73.90826091]");
get(points,-73.98546595781663,40.77723338577707,"[ 40.77723339 -73.98546596]");
get(points,-73.987026055,40.75038865928572,"[ 40.75038866 -73.98702606]");
get(points,-73.9392346088889,40.69623990444445,"[ 40.6962399  -73.93923461]");
get(points,-73.9170111,40.68916,"[ 40.68916   -73.9170111]");
get(points,-73.94048319290373,40.74741483759439,"[ 40.74741484 -73.94048319]");
get(points,-74.00966495275497,40.656244220581584,"[ 40.65624422 -74.00966495]");
get(points,-73.98276365551675,40.71533226284953,"[ 40.71533226 -73.98276366]");
get(points,-73.9580383986557,40.665688611874536,"[ 40.66568861 -73.9580384 ]");
get(points,-73.96772313878832,40.69376425428427,"[ 40.69376425 -73.96772314]");
get(points,-74.00236900371237,40.739845363562964,"[ 40.73984536 -74.002369  ]");
get(points,-73.9200905,40.77710352857143,"[ 40.77710353 -73.9200905 ]");
get(points,-74.0103601002239,40.715099812236566,"[ 40.71509981 -74.0103601 ]");
get(points,-73.92126927000001,40.75911615,"[ 40.75911615 -73.92126927]");
get(points,-73.92198092307693,40.707816538461536,"[ 40.70781654 -73.92198092]");
get(points,-73.99995891901985,40.758975242889434,"[ 40.75897524 -73.99995892]");
get(points,-73.99165896570469,40.69864220963185,"[ 40.69864221 -73.99165897]");
get(points,-73.95347848243816,40.711126922582444,"[ 40.71112692 -73.95347848]");
get(points,-73.9139171229967,40.769679335945206,"[ 40.76967934 -73.91391712]");
get(points,-73.98108463624541,40.76313060151954,"[ 40.7631306  -73.98108464]");




//echarts中使用地图的配置参数
var option = {
    bmap: {
        // 百度地图中心经纬度 坐标拾取器http://api.map.baidu.com/lbsapi/getpoint/index.html
        center: [-73.98997825,40.72019576],
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
        pieces: [      // 自定义每一段的范围，以及每一段的文字
            { min: 20, label: '20以上'}, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 10, max: 20, label: '10-20'},
            { min: 3, max: 10, label: '3-10'},
            { max: 3, label: '3以下'}          // 不指定 min，表示 min 为无限大（-Infinity）。
        ],
        seriesIndex:1,//指定series里的哪个数据
        //dimension:3,//找数据的维度
        inRange: {
            // 渐变颜色，从小到大
            color: ['#dacfa5', '#e8cc32', '#ef9930', '#ef0002']
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
myChart.setOption(option);
//初始化bmap和echarts实例绑定
var bmap = myChart.getModel().getComponent('bmap').getBMap();
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
    myChart.on('click', function (params) {
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