var map = new BMapGL.Map("allmap");
var point = new BMapGL.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
map.addControl(new BMapGL.NavigationControl());
map.enableScrollWheelZoom();


var polyline = new BMapGL.Polyline([
    //new BMap.Point(116.399, 39.910),
    new BMapGL.Point(116.405, 39.920),
    new BMapGL.Point(116.425,39.91936),
    new BMapGL.Point(116.415,39.93936),
// new BMap.Point(116.415,39.92936),
], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5});
map.addOverlay(polyline);
addArrow(polyline,10,Math.PI/7);

function addArrow(polyline,length,angleValue){ //绘制箭头的函数
    var linePoint=polyline.getPath();//线的坐标串
    var arrowCount=linePoint.length;
    for(var i =1;i<arrowCount;i++){ //在拐点处绘制箭头
        var pixelStart=map.pointToPixel(linePoint[i-1]);
        var pixelEnd=map.pointToPixel(linePoint[i]);
        var angle=angleValue;//箭头和主线的夹角
        var r=length; // r/Math.sin(angle)代表箭头长度
        var delta=0; //主线斜率，垂直时无斜率
        var param=0; //代码简洁考虑
        var pixelTemX,pixelTemY;//临时点坐标
        var pixelX,pixelY,pixelX1,pixelY1;//箭头两个点
        if(pixelEnd.x-pixelStart.x==0){ //斜率不存在是时
            pixelTemX=pixelEnd.x;
            if(pixelEnd.y>pixelStart.y)
            {
                pixelTemY=pixelEnd.y-r;
            }
            else
            {
                pixelTemY=pixelEnd.y+r;
            }
            //已知直角三角形两个点坐标及其中一个角，求另外一个点坐标算法
            pixelX=pixelTemX-r*Math.tan(angle);
            pixelX1=pixelTemX+r*Math.tan(angle);
            pixelY=pixelY1=pixelTemY;
        }
        else  //斜率存在时
        {
            delta=(pixelEnd.y-pixelStart.y)/(pixelEnd.x-pixelStart.x);
            param=Math.sqrt(delta*delta+1);

            if((pixelEnd.x-pixelStart.x)<0) //第二、三象限
            {
                pixelTemX=pixelEnd.x+ r/param;
                pixelTemY=pixelEnd.y+delta*r/param;
            }
            else//第一、四象限
            {
                pixelTemX=pixelEnd.x- r/param;
                pixelTemY=pixelEnd.y-delta*r/param;
            }
            //已知直角三角形两个点坐标及其中一个角，求另外一个点坐标算法
            pixelX=pixelTemX+ Math.tan(angle)*r*delta/param;
            pixelY=pixelTemY-Math.tan(angle)*r/param;

            pixelX1=pixelTemX- Math.tan(angle)*r*delta/param;
            pixelY1=pixelTemY+Math.tan(angle)*r/param;
        }

        var pointArrow=map.pixelToPoint(new BMapGL.Pixel(pixelX,pixelY));
        var pointArrow1=map.pixelToPoint(new BMapGL.Pixel(pixelX1,pixelY1));
        var Arrow = new BMapGL.Polyline([
            pointArrow,
            linePoint[i],
            pointArrow1
        ], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5});
        map.addOverlay(Arrow);
    }
}