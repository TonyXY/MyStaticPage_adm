//配置页面加载模块参数
require.config({
	baseUrl: 'js/',
	//添加加载异步加载CSS的插件
	map:{
		'*':{
			'css':'css.min'
		}
	},
	paths: {
		"modernizr"			:"../lib/modernizr.custom",
		"jquery"			:"../lib/jquery-2.1.3.min"
	},
	waitSeconds:30,
	shim: {//模块依赖关系 demo
		//'swiperscrollbar': {deps:['swiper']},
		//'swiper': {deps: ['jquery']},
	}
});

//配置页面加载模块
require(['modernizr'],function(modernizr) {
	!Modernizr.rgba?window.location="np.html":'';
});
//加载对应css模块
/*require([
	"css!../css/style1"
]);*/

require(['jquery'], function (jquery){
		$(function() {

		});
	}
);
