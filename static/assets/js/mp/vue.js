
		var form_textbox = Vue.extend({
			template: '\
			<input type="text" />	',
		props: [],
	created(){
		console.log('created');
	},
	mounted(){
     // alert('a');
   }})
		Vue.component('form_textbox', form_textbox)
		
		var form_textarea = Vue.extend({
			template: '\
			<textarea rows="3" cols="20">\
 这是一个textarea\
</textarea>	',
		})
		Vue.component('form_textarea', form_textarea)
		
		var navmenu = Vue.extend({
			template: '\
			<div class="flex fixnav">\
	<router-link v-bind:to="n.path" v-for="n,index in list" v-bind:key="index">\
		<i v-bind:class="n.icon" class="iconfont"></i><p v-text="n.text">-</p>\
	</router-link>\
</div>	',
		data(){
return{
	list:[
      {
          "path":"/",
          "img":"/js/easyui/themes/icons/8.png",
		  "icon":"icon-home",
          "text":"首页"
      },
	  {
          "path":"/apps",
          "img":"/js/easyui/themes/icons/44.png",
		  "icon":"icon-icon--",
          "text":"应用"
      },
	  {
          "path":"/kecheng",
          "img":"/js/easyui/themes/icons/10.png",
		  "icon":"icon-fangdajing",
          "text":"组件"
      },
      {
          "path":"/center",
          "img":"/js/easyui/themes/icons/43.png",
		  "icon":"icon-gerenzhongxinwode",
          "text":"我的"
      }
	]
}
},
created(){
		console.log('nav created');
},
mounted(){
        console.log('nav mounted');
}})
		Vue.component('navmenu', navmenu)
		
		var app_notfound = Vue.extend({
			template: '\
			<div>\
            error:404\
        </div>	',
		})
		Vue.component('app_notfound', app_notfound)
		
		var weui_msg = Vue.extend({
			template: '\
			<div class="weui-msg" style="padding-top:0px;">\
  <div class="weui-msg__icon-area" style="margin-bottom:2px;">\
    <img style="width:100%;" src="/images/banner.jpg" />\
  </div>\
\
</div>	',
		})
Vue.component('weui_msg', weui_msg)

 

var navmodule = Vue.extend({
			template: '\
	<div class="weui-grids grids-small" style="">\
      <a href="" class="weui-grid js_grid">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon2.jpg" class="gray" alt="">\
        </div>\
        <p class="weui-grid__label gray">\
          课程订购\
        </p>\
      </a>\
      <a href="" class="weui-grid js_grid">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon4.jpg" class="gray"  alt="">\
        </div>\
        <p class="weui-grid__label gray">\
          上课记录\
        </p>\
      </a>\
      <a href="" class="weui-grid js_grid">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon3.jpg" class="gray"  alt="">\
        </div>\
        <p class="weui-grid__label gray">\
          视频课程\
        </p>\
      </a>\
      <a href="" class="weui-grid js_grid">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon1.jpg" class="gray"  alt="">\
        </div>\
        <p class="weui-grid__label gray">\
          精品试卷\
        </p>\
      </a>\
		<a href="" class="weui-grid js_grid">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon5.jpg" class="gray"  alt="">\
        </div>\
        <p class="weui-grid__label gray">\
          交费记录\
        </p>\
      </a>\
		<a href="" class="weui-grid js_grid">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon8.jpg" class="gray"  alt="">\
        </div>\
        <p class="weui-grid__label gray">\
          幸运抽奖\
        </p>\
      </a>\
		<a href="" class="weui-grid js_grid">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon7.jpg" class="gray"  alt="">\
        </div>\
        <p class="weui-grid__label gray">\
          积分兑换\
        </p>\
      </a>\
		<a href="" class="weui-grid js_grid">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon5.jpg" class="gray"  alt="">\
        </div>\
        <p class="weui-grid__label gray">\
          上课视频\
        </p>\
      </a>\
    </div>\
	',
		})
Vue.component('navmodule', navmodule)









var xxms_topmsg = Vue.extend({
		template: '\
<div data-v-dec7aa6c="" class="bgwhite clear">\
   <div data-v-dec7aa6c="" class="datashows">\
    <p data-v-dec7aa6c="">流量统计</p> \
    <h1 data-v-dec7aa6c="" class="price_cls">3128</h1> \
    <div data-v-dec7aa6c="" class="flexbtn datanum_cls">\
     <p data-v-dec7aa6c="">应用数量<span data-v-dec7aa6c="">8</span></p> \
     <p data-v-dec7aa6c="">页面数量<span data-v-dec7aa6c="">36</span></p> \
     <p data-v-dec7aa6c="">组件数量<span data-v-dec7aa6c="">12</span></p>\
    </div>\
   </div>\
  </div>\
		',
		})
Vue.component('xxms_topmsg', xxms_topmsg)




var xxms_building = Vue.extend({
			template: '\
			<div class="weui-msg" style="padding-top:0px;">\
  <div class="weui-msg__icon-area" style="margin-bottom:2px;">\
    <img style="width:100%;" src="/images/building.jpg" />\
				<p data-v-7eb78c68="" class="tips" style="font-size:21px;">敬请期待</p>\
				<p data-v-7eb78c68="" class="tips">功能正在开发中...</p>\
  </div>\
\
</div>	',
		})
Vue.component('xxms_building', xxms_building)




var xxms_my = Vue.extend({
	template: '\
	<div data-v-ed66b0d2="" class="tit_cls"><i data-v-ed66b0d2="" class="iconfont icon-left"></i>我的账号\
	</div>\
	',
		})
Vue.component('xxms_my', xxms_my)



//----------------------------------------------------------------------------------------------
var app_banner = Vue.extend({
			template: '\
			<div class="weui-msg" style="padding-top:0px;">\
				<div class="weui-msg__icon-area" style="margin-bottom:2px;">\
					<img style="width:100%;" src="/images/banner.jpg" />\
				</div>\
			</div>	',
		})
Vue.component('app_banner', app_banner)
//----------------------------------------------------------------------------------------------

var app_apps = Vue.extend({
			template: '\
	<div class="weui-grids grids-small" style="">\
	<a href="" class="weui-grid js_grid" v-for="row in list" v-bind:href="\'/pm/\'+row.code">\
        <div class="weui-grid__icon">\
          <img src="/images/icon/icon5.jpg" v-bind:src="row.icon"  alt="">\
        </div>\
        <p class="weui-grid__label " v-text="row.title">\
		-\
        </p>\
      </a>\
    </div>\
	',
	//props:["list"],
	data(){
		return {
			list:[
			]
		}
	},
	created(){
			$this=this;
			console.log('apps created');
			axios.get('/adm/mp/appsjson')
			.then(function (response) {
				console.log(response);
				$this.list=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	},
	mounted(){
			console.log('apps mounted');
	}
})
Vue.component('app_apps', app_apps)


//------------------------------------------------------------------------------------

var app_applist = Vue.extend({
			template: '\
	 <div>\
     <div  class="pro  ">\
	   <div  class="fixDivtit">\
		<div  class="tit_cls flexbtn">\
		 <span ><i  class="iconfont icon-left" style="display:none;"></i>应用管理</span> \
		 <i class="iconfont icon-add" @click="add"></i>\
		</div> \
	   </div> \
	  </div>\
    <div class="weui-cells">\
      <router-link  class="weui-cell weui-cell_access" v-for="row in list" :key="row.id" :to="\'/pages/\'+row.id">\
        <div class="weui-cell__hd flex">\
          <img style="width:25px;height:25px;" src="/images/icon/icon5.jpg" v-bind:src="row.icon"  alt="">\
        </div>\
        <div class="weui-cell__bd"><p>{{row.title}}</p></div>\
        <div class="weui-cell__ft">{{row.code}}</div>\
      </router-link > \
    </div>\
  </div>\
	',
	data(){
		return {
			list:[
			]
		}
	},
	methods:{
		prev(){
		 this.$router.go(-1);  
		},
		add(){
		 $this.$router.push("/app/0");
		}
	},
	created(){
			$this=this;
			console.log('apps created');
			axios.get('/adm/mp/appsjson')
			.then(function (response) {
				console.log(response);
				if(response.data!=null) $this.list=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
			console.log('applist created');
	},
	mounted(){
			console.log('applist mounted');
	}
})
Vue.component('app_applist', app_applist)


//------------------------------------------------------------------------------------

var app_pagelist = Vue.extend({
			template: '\
	 <div>\
     <div  class="pro  ">\
	   <div  class="fixDivtit">\
		<div  class="tit_cls flexbtn">\
		 <span ><i  class="iconfont icon-left" @click="prev"></i>页面列表[{{a.title}}-{{a.code}}]</span> \
		 <i class="iconfont icon-tongzhiguanli" @click="appedit"></i>\
		 <i class="iconfont icon-add" @click="add"></i>\
		</div> \
	   </div> \
	  </div>\
    <div class="weui-cells">\
      <router-link  class="weui-cell weui-cell_access" v-for="row in list" :key="row.id" :to="\'/widgets/\'+row.id">\
        <div class="weui-cell__hd flex">\
          <i class="iconfont icon-tongzhiguanli"></i>\
        </div>\
        <div class="weui-cell__bd"><p>{{row.title}}</p></div>\
        <div class="weui-cell__ft">{{row.code}}</div>\
      </router-link > \
    </div>\
  </div>\
	',
	data(){
		return {
			id:0,
			a:{},
			list:[
			]
		}
	},
	methods:{
		prev(){
		 this.$router.go(-1);  
		},
			add(){
			$this.$router.push("/page/0?module="+this.a.code);
		},
		appedit(){
			$this.$router.push("/app/"+this.id);
		}
	},
	created(){
			$this=this;
			console.log('apps created 参数 '+this.$route.params.id);
			$this.id=this.$route.params.id;
			axios.get('/adm/mp/pagesjson?id='+this.$route.params.id)
			.then(function (response) {
				console.log(response);
				$this.list=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
			console.log('applist created');
			axios.get('/adm/mp/appjson?id='+this.$route.params.id)
			.then(function (response) {
				console.log(response);
				$this.a=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	},
	mounted(){
			console.log('applist mounted');
	}
})
Vue.component('app_pagelist', app_pagelist)


//------------------------------------------------------------------------------------

var app_widgetlist = Vue.extend({
			template: '\
	 <div>\
     <div  class="pro  ">\
	   <div  class="fixDivtit">\
		<div  class="tit_cls flexbtn">\
		 <span ><i  class="iconfont icon-left" @click="prev"></i>组件管理[{{p.title}}]</span> \
		 <i class="iconfont icon-tongzhiguanli" @click="pagedit"></i>\
		 <i class="iconfont icon-add" @click="add"></i>\
		</div> \
	   </div> \
	  </div>\
    <div class="weui-cells">\
      <router-link  class="weui-cell weui-cell_access" v-for="row in list" :key="row.id" :to="\'/widgetedit/\'+row.id+\'?tbmid=\'+row.tbmid">\
        <div class="weui-cell__hd flex">\
          <i class="iconfont icon-tongzhiguanli"></i>\
        </div>\
        <div class="weui-cell__bd"><p>{{row.field_name}}</p></div>\
        <div class="weui-cell__ft"></div>\
      </router-link > \
    </div>\
  </div>\
	',
	data(){
		return {
			p:{},
			list:[
			],
			id:0
		}
	},
	methods:{
		prev(){
		 this.$router.go(-1);  
		},
		add(){
			$this.$router.push("/widgetedit/0?tbmid="+id);
		},
		pagedit(){
			$this.$router.push("/page/"+id);
		}
	},
	created(){
			$this=this;
			console.log('widgets created 参数 '+this.$route.params.id);
			id=this.$route.params.id;
			axios.get('/adm/mp/widgetsjson?id='+this.$route.params.id)
			.then(function (response) {
				console.log(response);
				$this.list=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
			console.log('widgets created');
			axios.get('/adm/mp/pagejson?id='+id)
			.then(function (response) {
				//console.log(response);
				$this.p=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	},
	mounted(){
			console.log('widgets mounted');
	}
})
Vue.component('app_widgetlist', app_widgetlist)

//------------------------------------------------------------------------------------

var app_widgetedit = Vue.extend({
	template: '\
	 <div>\
	<form id="form1"  method="post" action="/adm/mp/widgetpost">\
     <div  class="pro  ">\
	   <div  class="fixDivtit">\
		<div  class="tit_cls flexbtn">\
		 <span ><i  class="iconfont icon-left" @click="prev"></i>组件编辑</span> \
		</div> \
	   </div> \
	  </div>\
    <div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">ID</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="id" name="id" type="text" readonly="readonly" v-model="m.id" value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">名称</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="field_name" name="field_name" type="text" v-model="m.field_name"  value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">排序</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="form_sort" name="form_sort" type="number" v-model="m.form_sort"  value="0" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells__title">组件类型</div>\
    <div class="weui-cells">\
      <div class="weui-cell weui-cell_select">\
        <div class="weui-cell__bd">\
          <select class="weui-select" name="form_type" id="form_type" v-model="m.form_type">\
            <option :value="row.tplcode" v-for="row in tpltypes" >{{row.title}}</option>\
          </select>\
        </div>\
      </div>\
    </div>\
	\
	<div class="weui-cells__title">显示设置</div>\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 列表\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="view_list" name="view_list" type="checkbox" v-model="m.view_list" class="weui-switch" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 表单\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="view_form" name="view_form" type="checkbox" v-model="m.view_form" class="weui-switch" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 详情\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="view_detail" name="view_detail" type="checkbox" v-model="m.view_detail" v-bind:true-value="1" class="weui-switch" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells__title">数据</div>\
    <div class="weui-cells weui-cells_form">\
      <div class="weui-cell">\
        <div class="weui-cell__bd">\
          <textarea class="weui-textarea" placeholder="请输入json格式" id="data" name="data" v-model="m.data" rows="3"></textarea>\
          <div class="weui-textarea-counter"><span>0</span>/200</div>\
        </div>\
      </div>\
    </div>\
	\
	<div class="weui-cells__title">绑定SQL</div>\
    <div class="weui-cells weui-cells_form">\
      <div class="weui-cell">\
        <div class="weui-cell__bd">\
          <textarea class="weui-textarea" placeholder="请输入sql文本" id="data_sql" name="data_sql" v-model="m.data_sql" rows="3"></textarea>\
          <div class="weui-textarea-counter"><span>0</span>/200</div>\
        </div>\
      </div>\
    </div>\
	\
	<div data-v-1009c6ac="" class="weui-cells__title">\
		<a data-v-1009c6ac="" href="javascript:;" @click="submit" class="weui-btn weui-btn_warn">保存</a>\
	</div>\
	\
	<div data-v-1009c6ac="" class="weui-cells__title" style="height:50px;">\
		<input type="hidden" name="tbmid" v-model="tbmid" /><br/><br/>\
	</div>\
	</form>\
  </div>\
	',
	data(){
		return {
			m:{'id':0},
			tbmid:0,
			tpltypes:[]
		}
	},
	methods:{
		prev(){
		 this.$router.go(-1);  
		},
		submit:function(){
			$this=this;
			$('#form1').ajaxSubmit(function (data) {
                if (data!= '1') {
                  layer.msg('操作失败,请稍后重试！');
                } else {
                    var ly=layer.alert('操作成功！',function(){
					$this.$router.go(-1);  
					layer.close(ly);
				  });
                }
            });
        }
	},
	created(){
			$this=this;
			console.log('widgetedit created 参数 id '+this.$route.params.id);
			console.log('widgetedit created 参数 tbmid '+this.$route.query.tbmid);
			$this.tbmid=this.$route.query.tbmid;

			axios.get('/adm/mp/widgettypesjson')
			.then(function (response) {
				console.log(response);
				$this.tpltypes=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});

			axios.get('/adm/mp/widgetjson?id='+this.$route.params.id)
			.then(function (response) {
				console.log(response);
				if(response.data!=null) $this.m=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
			
			
	},
	mounted(){
			console.log('widgetedit mounted');
			
	}
})
Vue.component('app_widgetedit', app_widgetedit)
//------------------------------------------------------------------------------------

var app_pageedit = Vue.extend({
	template: '\
	 <div>\
	<form id="form1"  method="post" action="/adm/mp/pagepost">\
     <div  class="pro  ">\
	   <div  class="fixDivtit">\
		<div  class="tit_cls flexbtn">\
		 <span ><i  class="iconfont icon-left" @click="prev"></i>页面编辑</span> \
		</div> \
	   </div> \
	  </div>\
    <div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">ID</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="id" name="id" type="text" readonly="readonly" v-model="m.id" value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">名称</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="title" name="title" type="text" v-model="m.title"  value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">代号</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="code" name="code" type="text" v-model="m.code"  value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells__title">应用</div>\
    <div class="weui-cells">\
      <div class="weui-cell weui-cell_select">\
        <div class="weui-cell__bd">\
          <select class="weui-select" name="module" id="module" v-model="module">\
			<option :value="row.code" v-for="row in apps" >{{row.title}}</option>\
          </select>\
        </div>\
      </div>\
    </div>\
	\
	<div class="weui-cells__title">显示设置</div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">网址</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="form_url" name="form_url" type="text" v-model="m.form_url"  value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">提示</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="tip_msg" name="tip_msg" type="text" v-model="m.tip_msg"  value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells__title">JS</div>\
    <div class="weui-cells weui-cells_form">\
      <div class="weui-cell">\
        <div class="weui-cell__bd">\
          <textarea class="weui-textarea" placeholder="请输入javascript" id="ex_javascript" name="ex_javascript" v-model="m.ex_javascript" rows="3"></textarea>\
          <div class="weui-textarea-counter"><span>0</span>/200</div>\
        </div>\
      </div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 状态\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="state" name="state" type="checkbox" v-model="m.state" v-bind:true-value="1" class="weui-switch" />\
			</div>\
		</div>\
    </div>\
	\
	<div data-v-1009c6ac="" class="weui-cells__title">\
		<a data-v-1009c6ac="" href="javascript:;" @click="submit" class="weui-btn weui-btn_warn">保存</a>\
	</div>\
	\
	<div data-v-1009c6ac="" class="weui-cells__title" style="height:50px;">\
		<br/><br/>\
	</div>\
	</form>\
  </div>\
	',
	data(){
		return {
			id:0,
			m:{
			  "banner": "",
			  "code": "",
			  "ex_javascript": "",
			  "form_btn": "",
			  "form_url": "",
			  "icon": "",
			  "id": "0",
			  "mch_id": "",
			  "memo": "",
			  "module": "",
			  "proj_id": "",
			  "state": "",
			  "tip_msg": "",
			  "title": "",
			  "user_id": ""
			},
			apps:[],
			module:""
		}
	},
	methods:{
		prev(){
		 this.$router.go(-1);  
		},
		submit:function(){  
			$this=this;
			$('#form1').ajaxSubmit(function (data) {
                if (data!= '1') {
                  layer.msg('操作失败,请稍后重试！');
                } else {
                  var ly=layer.alert('操作成功！',function(){
					$this.$router.go(-1);  
					layer.close(ly);
				  });
                }
            });
        }
	},
	created(){
			$this=this;
			$this.module=this.$route.query.module;

			axios.get('/adm/mp/appsjson')
			.then(function (response) {
				$this.apps=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});

			console.log('app_pageedit created 参数 id '+this.$route.params.id);
			axios.get('/adm/mp/pagejson?id='+this.$route.params.id)
			.then(function (response) {
				console.log(response);
				if(response.data!=null){
					$this.m=response.data;	
					$this.module=$this.m.module;
				}

			})
			.catch(function (error) {
				console.log(error);
			});
			console.log('app_pageedit created');

			
	},
	mounted(){
			console.log('app_pageedit mounted');
			
	}
})
Vue.component('app_pageedit', app_pageedit)

//------------------------------------------------------------------------------------

var app_appedit = Vue.extend({
			template: '\
	 <div>\
	<form id="form1"  method="post" action="/adm/mp/apppost">\
     <div  class="pro  ">\
	   <div  class="fixDivtit">\
		<div  class="tit_cls flexbtn">\
		 <span ><i  class="iconfont icon-left" @click="prev"></i>应用编辑</span> \
		</div> \
	   </div> \
	  </div>\
    <div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">ID</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="id" name="id" type="text" readonly="readonly" v-model="m.id" value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">名称</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="title" name="title" type="text"  v-model="m.title" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 <p data-v-1009c6ac="">代号</p>\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input  data-v-1009c6ac="" id="code" name="code" type="text" v-model="m.code" autocomplete="off" value="" class="weui-input" />\
			</div>\
		</div>\
    </div>\
	\
	<div class="weui-cells__title">图标选择</div>\
    <div class="weui-cells">\
      <div class="weui-cell weui-cell_select">\
        <div class="weui-cell__bd">\
          <select class="weui-select" name="icon" id="icon" v-model="m.icon">\
            <option :value="row.url" v-for="row in icons" >{{row.title}}</option>\
          </select>\
        </div>\
      </div>\
    </div>\
	\
	<div class="weui-cells__title">显示设置</div>\
	\
	<div class="weui-cells__title">备注</div>\
    <div class="weui-cells weui-cells_form">\
      <div class="weui-cell">\
        <div class="weui-cell__bd">\
          <textarea class="weui-textarea" placeholder="请输入" id="memo" name="memo" v-model="m.memo"   rows="3"></textarea>\
          <div class="weui-textarea-counter"><span>0</span>/200</div>\
        </div>\
      </div>\
    </div>\
	\
	<div class="weui-cells">\
		<div data-v-1009c6ac="" class="weui-cell">\
			<div data-v-1009c6ac="" class="weui-cell__bd">\
			 状态\
			</div> \
			<div data-v-1009c6ac="" class="weui-cell__ft">\
			 <input data-v-1009c6ac="" id="state" name="state" type="checkbox" v-model="m.state" v-bind:true-value="1" class="weui-switch" />\
			</div>\
		</div>\
    </div>\
	\
	<div data-v-1009c6ac="" class="weui-cells__title">\
		<a data-v-1009c6ac="" href="javascript:;" @click="submit" class="weui-btn weui-btn_warn">保存</a>\
	</div>\
	\
	<div data-v-1009c6ac="" class="weui-cells__title" style="height:50px;">\
		<br/><br/>\
	</div>\
	</form>\
  </div>\
	',
	data(){
		return {
			m:{
			title:"a"
			},
			icons:[]
		}
	},
	methods:{
		prev(){
		 this.$router.go(-1);  
		},
		submit:function(){  
			$this=this;
			$('#form1').ajaxSubmit(function (data) {
                if (data!= '1') {
                  layer.msg('操作失败,请稍后重试！');
                } else {
                  var ly=layer.alert('操作成功！',function(){
					$this.$router.go(-1);  
					layer.close(ly);
				  });
                }
            });
        }
	},
	created(){
			$this=this;
			console.log('app_appedit created 参数 id '+this.$route.params.id);

			axios.get('/adm/mp/iconsjson')
			.then(function (response) {
				console.log(response);
				if(response.data!=null) $this.icons=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});

			axios.get('/adm/mp/appjson?id='+this.$route.params.id)
			.then(function (response) {
				console.log(response);
				if(response.data!=null) $this.m=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
			console.log('app_appedit created');
	},
	mounted(){
			console.log('app_appedit mounted');
			
	}
})
Vue.component('app_appedit', app_appedit)
//------------------------------------------------------------------------------------

var app_login = Vue.extend({
			template: '\
	 <div>\
   <div class="tit_cls">\
      <span>系统登录</span>\
   </div>  \
   <div class="weui-msg" style="padding-top:0px;">\
				<div class="weui-msg__icon-area" style="margin-bottom:2px;">\
					<img style="width:100%;" src="/images/banner.jpg" />\
				</div>\
			</div>\
   <div class="weui-cells weui-cells_form">\
	  <div class="weui-cell">\
	    <div class="weui-cell__hd"><label class="weui-label">账号：</label></div>\
	    <div class="weui-cell__bd">\
	      <input class="weui-input" type="text" placeholder="请输入账号" v-model="username">\
	    </div>\
	  </div>\
	</div>\
   <div class="weui-cells weui-cells_form">\
	  <div class="weui-cell">\
	    <div class="weui-cell__hd"><label class="weui-label">密码：</label></div>\
	    <div class="weui-cell__bd">\
	      <input class="weui-input" type="password" placeholder="请输入密码"  v-model="userpwd">\
	    </div>\
	  </div>\
	</div>\
	<a href="javascript:;" class="weui-btn weui-btn_warn" @click="submit" >提交</a>\
  <div class="flex widflex">\
  </div>\
  </div>\
	',
	data(){
		return {
				username:"",
				userpwd:""
		  }
	},
	methods:{
		prev(){
		 this.$router.go(-1);  
		},
		submit(){
			$this=this;
			var params = new URLSearchParams();
			params.append('username', $this.username);
			params.append('userpwd', $this.userpwd);
			axios.post("/adm/mp/loginpost", params).then(function (response) {
			　　if(response.data=="1"){
					$this.setCookie('_login','1',1);
					$this.$router.push("/") 
				}
			}).catch(function (error) {
			　　alert(error);
			});
		}
	},
	created(){
			$this=this;
			
			console.log('app_login created');
	},
	mounted(){
			console.log('app_login mounted');
	}
})
Vue.component('app_login', app_login)



