var apps = new Vue({
    data () {
          return {
        
    provtj:[],
    bmtjdata1:[],
    bmtjdata2:[],
bmlist:[],
circles:{
    allnum:'',  //综合值
    cnum1:[],  //数值
    cname1:[],  //名称
    }

}
},
//
mounted() {
    //高度
    var winHei = $(window).height();
    $(".charts").height(winHei / 3 - 30);
    $("#mapChart").height(winHei / 3 * 2 - 92);
    $("#pie5").height(winHei / 3-11)
    $("#barchart").height(winHei / 3-11);                //
    var $this = this;
    //左侧顶端（商业家区域统计）
    jQuery.post('http://api.foodszs.cn/v1/meet/provtj',function(data) {
        var datas = eval('('+data+')')
        if (datas.code == 100) {
            apps.$data.provtj=datas.result;
        }
        //
        var dom = document.getElementById("DoughnutChart");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            color: ['#4197fd', '#1adc74', "#faaa39",'#28ca96', '#faa939', "#c6e0ff"],
            backgroundColor: "#fff",
            title: {
                text: '京津冀商业家大会地区分布图',
                padding: [15, 15, 15, 15],
                textStyle: {
                    color: '#6b6b6b',
                    fontWeight: 'normal',
                    fontSize: 15
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },            
            series: [
                {
                    name: '京津冀商业家大会地区分布图',
                    type: 'pie',
                    radius: ['50%', '66%'],
                    avoidLabelOverlap: false,
                    "startAngle": 315,

                    label: {
                        normal: {
                            formatter: '{b}{d}%'
                        }
                    },
                    data:$this.provtj
                }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

    })
    //左侧中间（商业家报名30天数据）
    jQuery.post("http://api.foodszs.cn/v1/meet/bmtj?meetid=613&days=30",function(data){
        var datas = eval('('+data+')')
        if (datas.code == 100) {
            for(var i=0;i<datas.result.length;i++){
                apps.$data.bmtjdata1.push(datas.result[i].date);
                apps.$data.bmtjdata2.push(datas.result[i].c);
            }
        }
        //
        var dom2 = document.getElementById("Basicareachart");
        var myChart2 = echarts.init(dom2);
        var app = {};
        option2 = null;
        option2 = {
            backgroundColor: "#fff",
            title: {
                text: '京津冀商业家大会报名数据',
                padding: [15, 15, 15, 15],
                textStyle: {
                    color: '#6b6b6b',
                    fontWeight: 'normal',
                    fontSize: 15
                }
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            grid:{
                left:"10%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:$this.bmtjdata1
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: $this.bmtjdata2,
                type: 'line',
                color: "#4b7efe",
                areaStyle: {
                    color: "#c6e0ff"
                }
            }]
        };
        if (option2 && typeof option2 === "object") {
            myChart2.setOption(option2, true);
        }
        //左侧底部（实时的浏览报名数据）
        jQuery.post("http://api.foodszs.cn/v1/meet/ss_csh",function(data){
            var datas = eval('('+data+')')
            if (datas.code == 100) {
                apps.$data.bmlist=datas.result;
            }
        })
        //
        setInterval(function(){
            console.log($this.bmlist[0].addtime);
            console.log("调取新报名数据");
            //左侧底部（每5s取最新的数据）
            jQuery.post("http://api.foodszs.cn/v1/meet/sstj?addtime="+$this.bmlist[0].addtime,function(data){
                var datas = eval('('+data+')')
                if (datas.code == 100) {
                    for(var i=0;i<datas.result.length;i++){
                        apps.$data.bmlist.unshift(datas.result[i]);
                    }                       
                }
            })
        },10000)          
        //

    })

    //百分比
    jQuery.post("http://api.foodszs.cn/v1/meet/entertj",function(data){
        var datas = eval('('+data+')')
        if (datas.code == 100) {
            for(var i=0;i<datas.result.length;i++){
                apps.$data.circles.cnum1.push(datas.result[i].c);
                apps.$data.circles.cname1.push(datas.result[i].enter_type);
                apps.$data.circles.allnum= Number(apps.$data.circles.allnum)+Number(datas.result[i].c);
                //circles:{
                //        allnum:'',  //综合值
                //        cnum1:[],  //数值
                //        cname1:[],  //名称
                //        }
            }    
            var val1 = Math.round($this.circles.cnum1[0]/$this.circles.allnum*100);
            var val2 = Math.round($this.circles.cnum1[1]/$this.circles.allnum*100);
            var val3 = Math.round($this.circles.cnum1[2]/$this.circles.allnum*100);
            var val4 = Math.round($this.circles.cnum1[3]/$this.circles.allnum*100);
            var name1= $this.circles.cname1[0];
            var name2= $this.circles.cname1[1];
            var name3= $this.circles.cname1[2];
            var name4= $this.circles.cname1[3];
        }

        $("#circle1").circleChart({
            value:val1,
            text: 0,
            onDraw: function(el, circle) {
                circle.text(Math.round(circle.value) + "%"+"<span>"+name1+"</span>");
            }
        });
        $("#circle2").circleChart({
            value: val2,
            text: 0,
            onDraw: function(el, circle) {
                circle.text(Math.round(circle.value) + "%"+"<span>"+name2+"</span>");
            }
        });
        $("#circle3").circleChart({
            value: val3,
            text: 0,
            onDraw: function(el, circle) {
                circle.text(Math.round(circle.value) + "%"+"<span>"+name3+"</span>");
            }
        });
        $("#circle4").circleChart({
            value: val4,
            text: 0,
            onDraw: function(el, circle) {
                circle.text(Math.round(circle.value) + "%"+"<span>"+name4+"</span>");
            }
        });

    })
    //字符云
    $(function(){
        echartsCloud();//初始化echarts图
    })
    function echartsCloud(){
        var myChart = echarts.init(document.getElementById('zfy'));
        myChart.setOption({
            title: {
                text: '京津冀热门话题',
                padding: [15, 15, 15, 15],
                textStyle: {
                    color: '#6b6b6b',
                    fontWeight: 'normal',
                    fontSize: 15
                }
            },
            tooltip: {
                show:true
            },
            series: [{
                type : 'wordCloud',  //类型为字符云
                shape:'smooth',  //平滑
                gridSize : 1, //网格尺寸
                size : ['50%','50%'],
                rotationRange : [ 0, 0 ], //旋转范围
                textStyle : {  
                    normal : {
                        fontFamily:'sans-serif',
                        color : function() {  
                            return 'rgb('  
                                    + [ Math.round(Math.random() * 200),  
                                            Math.round(Math.random() * 51),  
                                            Math.round(Math.random() * 250) ]  
                                            .join(',') + ')';  
                        }  
                    }                     
                },
                data: [          
                      {
                          name: "2019华糖新商业家大会",
                          value: 9811,
                      },
                      {
                          name: "华糖会员",
                          value: 1831,
                      },
                      {
                          name: "专属海报",
                          value: 1817,
                      },    {
                          name: "个性化传播",
                          value: 1817,
                      },
                      {
                          name: "报名",
                          value: 117,
                      },    {
                          name: "华糖",
                          value: 1817,
                      },
                      {
                          name: "石家庄",
                          value: 7,
                      },    {
                          name: "个性化传播",
                          value: 18,
                      },
                      {
                          name: "京津冀",
                          value: 5817,
                      }

                ],
            }]
        });
           
    }  
    //地图
    var dom13 = document.getElementById("mapChart");
    var myChart13 = echarts.init(dom13);
    var app = {};
    option13 = null;
    var geoCoordMap = {
        "海门":[121.15,31.89],
        "鄂尔多斯":[109.781327,39.608266],
        "招远":[120.38,37.35],
        "舟山":[122.207216,29.985295],
        "齐齐哈尔":[123.97,47.33],
        "盐城":[120.13,33.38],
        "赤峰":[118.87,42.28],
        "青岛":[120.33,36.07],
        "乳山":[121.52,36.89],
        "金昌":[102.188043,38.520089],
        "泉州":[118.58,24.93],
        "莱西":[120.53,36.86],
        "日照":[119.46,35.42],
        "胶南":[119.97,35.88],
        "南通":[121.05,32.08],
        "拉萨":[91.11,29.97],
        "云浮":[112.02,22.93],
        "梅州":[116.1,24.55],
        "文登":[122.05,37.2],
        "上海":[121.48,31.22],
        "攀枝花":[101.718637,26.582347],
        "威海":[122.1,37.5],
        "承德":[117.93,40.97],
        "厦门":[118.1,24.46],
        "汕尾":[115.375279,22.786211],
        "潮州":[116.63,23.68],
        "丹东":[124.37,40.13],
        "太仓":[121.1,31.45],
        "曲靖":[103.79,25.51],
        "烟台":[121.39,37.52],
        "福州":[119.3,26.08],
        "瓦房店":[121.979603,39.627114],
        "即墨":[120.45,36.38],
        "抚顺":[123.97,41.97],
        "玉溪":[102.52,24.35],
        "张家口":[114.87,40.82],
        "阳泉":[113.57,37.85],
        "莱州":[119.942327,37.177017],
        "湖州":[120.1,30.86],
        "汕头":[116.69,23.39],
        "昆山":[120.95,31.39],
        "宁波":[121.56,29.86],
        "湛江":[110.359377,21.270708],
        "揭阳":[116.35,23.55],
        "荣成":[122.41,37.16],
        "连云港":[119.16,34.59],
        "葫芦岛":[120.836932,40.711052],
        "常熟":[120.74,31.64],
        "东莞":[113.75,23.04],
        "河源":[114.68,23.73],
        "淮安":[119.15,33.5],
        "泰州":[119.9,32.49],
        "南宁":[108.33,22.84],
        "营口":[122.18,40.65],
        "惠州":[114.4,23.09],
        "江阴":[120.26,31.91],
        "蓬莱":[120.75,37.8],
        "韶关":[113.62,24.84],
        "嘉峪关":[98.289152,39.77313],
        "广州":[113.23,23.16],
        "延安":[109.47,36.6],
        "太原":[112.53,37.87],
        "清远":[113.01,23.7],
        "中山":[113.38,22.52],
        "昆明":[102.73,25.04],
        "寿光":[118.73,36.86],
        "盘锦":[122.070714,41.119997],
        "长治":[113.08,36.18],
        "深圳":[114.07,22.62],
        "珠海":[113.52,22.3],
        "宿迁":[118.3,33.96],
        "咸阳":[108.72,34.36],
        "铜川":[109.11,35.09],
        "平度":[119.97,36.77],
        "佛山":[113.11,23.05],
        "海口":[110.35,20.02],
        "江门":[113.06,22.61],
        "章丘":[117.53,36.72],
        "肇庆":[112.44,23.05],
        "大连":[121.62,38.92],
        "临汾":[111.5,36.08],
        "吴江":[120.63,31.16],
        "石嘴山":[106.39,39.04],
        "沈阳":[123.38,41.8],
        "苏州":[120.62,31.32],
        "茂名":[110.88,21.68],
        "嘉兴":[120.76,30.77],
        "长春":[125.35,43.88],
        "胶州":[120.03336,36.264622],
        "银川":[106.27,38.47],
        "张家港":[120.555821,31.875428],
        "三门峡":[111.19,34.76],
        "锦州":[121.15,41.13],
        "南昌":[115.89,28.68],
        "柳州":[109.4,24.33],
        "三亚":[109.511909,18.252847],
        "自贡":[104.778442,29.33903],
        "吉林":[126.57,43.87],
        "阳江":[111.95,21.85],
        "泸州":[105.39,28.91],
        "西宁":[101.74,36.56],
        "宜宾":[104.56,29.77],
        "呼和浩特":[111.65,40.82],
        "成都":[104.06,30.67],
        "大同":[113.3,40.12],
        "镇江":[119.44,32.2],
        "桂林":[110.28,25.29],
        "张家界":[110.479191,29.117096],
        "宜兴":[119.82,31.36],
        "北海":[109.12,21.49],
        "西安":[108.95,34.27],
        "金坛":[119.56,31.74],
        "东营":[118.49,37.46],
        "牡丹江":[129.58,44.6],
        "遵义":[106.9,27.7],
        "绍兴":[120.58,30.01],
        "扬州":[119.42,32.39],
        "常州":[119.95,31.79],
        "潍坊":[119.1,36.62],
        "重庆":[106.54,29.59],
        "台州":[121.420757,28.656386],
        "南京":[118.78,32.04],
        "滨州":[118.03,37.36],
        "贵阳":[106.71,26.57],
        "无锡":[120.29,31.59],
        "本溪":[123.73,41.3],
        "克拉玛依":[84.77,45.59],
        "渭南":[109.5,34.52],
        "马鞍山":[118.48,31.56],
        "宝鸡":[107.15,34.38],
        "焦作":[113.21,35.24],
        "句容":[119.16,31.95],
        "北京":[116.46,39.92],
        "徐州":[117.2,34.26],
        "衡水":[115.72,37.72],
        "包头":[110,40.58],
        "绵阳":[104.73,31.48],
        "乌鲁木齐":[87.68,43.77],
        "枣庄":[117.57,34.86],
        "杭州":[120.19,30.26],
        "淄博":[118.05,36.78],
        "鞍山":[122.85,41.12],
        "溧阳":[119.48,31.43],
        "库尔勒":[86.06,41.68],
        "安阳":[114.35,36.1],
        "开封":[114.35,34.79],
        "济南":[117,36.65],
        "德阳":[104.37,31.13],
        "温州":[120.65,28.01],
        "九江":[115.97,29.71],
        "邯郸":[114.47,36.6],
        "临安":[119.72,30.23],
        "兰州":[103.73,36.03],
        "沧州":[116.83,38.33],
        "临沂":[118.35,35.05],
        "南充":[106.110698,30.837793],
        "天津":[117.2,39.13],
        "富阳":[119.95,30.07],
        "泰安":[117.13,36.18],
        "诸暨":[120.23,29.71],
        "郑州":[113.65,34.76],
        "哈尔滨":[126.63,45.75],
        "聊城":[115.97,36.45],
        "芜湖":[118.38,31.33],
        "唐山":[118.02,39.63],
        "平顶山":[113.29,33.75],
        "邢台":[114.48,37.05],
        "德州":[116.29,37.45],
        "济宁":[116.59,35.38],
        "荆州":[112.239741,30.335165],
        "宜昌":[111.3,30.7],
        "义乌":[120.06,29.32],
        "丽水":[119.92,28.45],
        "洛阳":[112.44,34.7],
        "秦皇岛":[119.57,39.95],
        "株洲":[113.16,27.83],
        "石家庄":[114.48,38.03],
        "莱芜":[117.67,36.19],
        "常德":[111.69,29.05],
        "保定":[115.48,38.85],
        "湘潭":[112.91,27.87],
        "金华":[119.64,29.12],
        "岳阳":[113.09,29.37],
        "长沙":[113,28.21],
        "衢州":[118.88,28.97],
        "廊坊":[116.7,39.53],
        "菏泽":[115.480656,35.23375],
        "合肥":[117.27,31.86],
        "武汉":[114.31,30.52],
        "大庆":[125.03,46.58]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    option13 = {
        title: {
            text: '华糖全国战略分布图',
            padding: [15, 15, 15, 15],
            textStyle: {
                color: '#6b6b6b',
                fontWeight: 'normal',
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.value[2];
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            left:"-10000",
            inRange: {
                color: ['#c6e0ff', '#4197fd']
            }
        },
        geo: {
            map: 'china',
        },
        series: [
            {
                type: 'scatter',
                coordinateSystem: 'geo',    
                data: convertData([                   
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 5},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 93},
                    {name: "菏泽", value: 4},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]),
                symbolSize: 12                 
            }
        ]
    };
    if (option13 && typeof option13 === "object") {
        myChart13.setOption(option13, true);
    }

    //


}


      


}).$mount('#app')






       
//
var dom9 = document.getElementById("barchart");
var myChart9 = echarts.init(dom9);
var app = {};
option9 = null;
option9 = {
    backgroundColor: "#fff",
    color:"#4197fd",
    title: {
        text: '省份排名',
        padding: [15, 15, 15, 15],
        textStyle: {
            color: '#6b6b6b',
            fontWeight: 'normal',
            fontSize: 15
        }
    },
    grid:{
        left:"14%"
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '河北']
    },
    series: [
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
if (option9 && typeof option9 === "object") {
    myChart9.setOption(option9, true);
}
// 
var dom7 = document.getElementById("Basicareachart2");
var myChart7 = echarts.init(dom7);
var app = {};
option7 = null;
option7 = {
    backgroundColor: "#fff",
    title: {
        text: '12个月的访问量',
        padding: [15, 15, 15, 15],
        textStyle: {
            color: '#6b6b6b',
            fontWeight: 'normal',
            fontSize: 15
        }
    },
    grid: {
        left: "13%"
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        color: "#4b7efe",
        areaStyle: {
            color: "#c6e0ff"
        }
    }]
};
if (option7 && typeof option7 === "object") {
    myChart7.setOption(option7, true);
}
//


//
$(window).resize(function () {           //重置容器高宽
    location.reload();
});
//