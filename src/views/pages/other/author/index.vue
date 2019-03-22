<template>
	<div id="author">
		<div class="bground">
			<div class="title">作者资料</div>
			<div class="line"></div>
			<div class="content">黄泽平，在企业中历任项目经理、高级前端开发工程师、前端架构师，专注于前端领域研发与学习。​有7年前端开发工作经验，掌握 vue、react redux、react-native、nodejs、nwjs、webpack等多种前端技术及框架搭建经验，开发的项目范围有：web系统前端开发、rn移动应用开发、node后台服务开发、网站开发及桌面应用开发等，也曾有1年java后台服务开发经验。在GitHub上开源有多个框架和模块库。</div>
			<div class="code-title">个人博客：</div>
			<div>http://blog.csdn.net/zeping891103</div>
			<div class="code-title">微信号：</div>
			<img :src="imgUrl" class="img" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'author',
		data() {
			return {
				imgUrl: 'static/weixin.jpg'
			}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#author {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 10px;
		font-weight: bold;
	}
	
	.md {
		color: white;
		background-color: black;
		padding: 10px;
		margin-top: 10px;
		border-radius: 3px;
		font-size: 16px;
		width: 1000px;
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
	
	.img {
		width: 20%;
		margin-top: 10px;
	}
</style>