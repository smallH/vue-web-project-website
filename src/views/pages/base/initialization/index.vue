<template>
	<div id="initialization">
		<div class="bground">
			<div class="title">初始化</div>
			<div class="line"></div>
			<div class="content">
				<div class="torder">初始化：</div>
				<pre><code class="code">$ npm install</code></pre>
				<div class="torder">运行：</div>
				<pre><code class="code">$ npm run dev</code></pre>
				<div class="torder">打包：</div>
				<pre><code class="code">$ npm run build</code></pre>
				<div class="torder">启动mock接口：</div>
				<pre><code class="code">$ npm run mock</code></pre>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'initialization',
		data() {
			return {}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#initialization {
		padding: 30px;
	}
	
	pre {
		margin-top: 5px;
		margin-bottom: 5px;
		padding: 5px;
		background-color: black;
		color: white;
		border-radius: 5px;
		width: fit-content;
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
			.torder {
				margin-top: 10px;
			}
			.code{
				font-size: 16px;
			}
		}
	}
</style>