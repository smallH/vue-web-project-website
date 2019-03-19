<template>
	<div id="iconfont">
		<div class="bground">
			<div class="title">iconfont图标</div>
			<div class="line"></div>
			<div class="content">
				<div>iconfont图标，是指通过阿里巴巴矢量图标库来管理的图标，图标资源文件放在./src/assets/fonts目录中。iconfont官网上有很多已经设计好的图标免费使用，你也可以让UI设计师把图上传至iconfont。在本框架中使用图标还需要一个引用文件：./src/assets/fonts/iconfont.styl</div>
				<div class="code-title">文件核心代码：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// iconfont.styl
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1544371793279'); /* IE9*/
  src: url('iconfont.eot?t=1544371793279#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgAAAAAAAAAAAA......qf8BrzDZuQA=') format('woff'),
  url('iconfont.ttf?t=1544371793279') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1544371793279#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-arrow_left:before { content: "\e8ef"; }

.icon-arrow_right:before { content: "\e8f1"; }

.icon-icon_logo:before { content: "\e65f"; }

// main.js
import '@/assets/css/iconfont.styl'</code></pre>
				</div>
				<div class="code-title">字体图标方式引用：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// 组件应用
&lt;i class="icon iconfont icon-arrow_left" />
&lt;i class="icon iconfont icon-arrow_right" />
&lt;i class="icon iconfont icon-icon_logo" />
</code></pre>
				</div>
				<div class="code-title">svg方式引用：从官网导出图标svg代码，将代码放置在标签中，可根据width和height值调整图标尺寸。这种方式常用于公共组件的图标样式设定：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// 将svg放入div标签中
&lt;div>
	&lt;svg t="1528103351049" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" ...... width="24" height="24">
		&lt;path d="M822.125714 331.337143a73.142857 73......3.131428z" p-id="6549" fill="#999999"></path>
	&lt;/svg>
&lt;div></code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'iconfont'
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#iconfont {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 10px;
		font-weight: bold;
	}
	
	.md {
		margin-top: 10px;
		font-size: 16px;
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
</style>