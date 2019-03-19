<template>
	<div id="introduction">
		<div class="bground">
			<div class="title">介绍</div>
			<div class="line"></div>
			<div class="content">
				该框架是一套已经被应用于商业项目开发的构建用户界面的渐进式前端框架，
				它抽象并封装了市面上大部分VUE前端项目的常用模块，另外，这些封装好的模块不会影响到你对前端项目个性化需求的扩展。
				框架中封装有如下几个功能：
			</div>
			<div class="list-box">
				<ul class="list-ul">
					<li>统一了市面上各类浏览器默认样式的差异</li>
					<li>配置了开发环境下proxy代理服务脚本，只需更改配置中的api地址即可与后台跨域联调</li>
					<li>axios请求配置与页面token权限验证功能 </li>
					<li>全局过滤指令的管理与应用</li>
					<li>iconfont图标的管理与应用</li>
					<li>vuex的管理与应用</li>
					<li>支持RESTful规范请求模块，模块中已封装了'增删改查'脚本</li>
					<li>兼容旧ie浏览器支持es6语法</li>
					<li>少量的基础组件及高德地图</li>
					<li>支持stylus样式写法</li>
					<li>打包后支持路由异步懒加载</li>
					<li>支持调用json-server模拟数据来源，实现前端接口自测</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'introduction',
		data() {
			return {}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#introduction {
		padding: 30px;
	}
	
	.bground {
		width: 100%;
		height: 100%;
		min-height: 500px;
		background-color: #fff;
		border-radius: 5px;
		.title {
			font-size: 36px;
		}
		.line {
			margin-top: 20px;
			border-bottom: solid 1px #E4E4E4;
		}
		.content {
			margin-top: 10px;
		}
	}
	
	.list-box{
		margin-left: 24px;
    	margin-top: 24px;
	}
	
	.list-ul{
		list-style: disc;
		font-size: 20px;
   	 	line-height: 36px;
	}
</style>