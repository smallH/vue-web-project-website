<template>
	<div id="proxy">
		<div class="bground">
			<div class="title">proxy代理服务</div>
			<div class="line"></div>
			<div class="content">
				<div>proxy代理服务是指通过配置实现访问非同域名下的API接口，仅用于开发环境。基于前后端分离原则，开发过程中联调时常常存在跨域请求的问题，使用proxy代理服务可以将请求模拟至同一域名下，解决了跨域联调问题。要使用代理服务，需要配置proxy项：</div>
				<div class="code-title">假设服务端的域名和端口为http://127.17.5.117:3000，打开config/index.js文件，配置proxyTable项如下：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">dev: {
	...
	proxyTable: {
		'/api': {
			target: 'http://127.17.5.117:3000',
			secure: false,
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			},
			onProxyReq(proxyReq, req, res) {
				proxyReq.setHeader('Referer', 'http://127.17.5.117:3000');
				proxyReq.setHeader('Origin', 'http://127.17.5.117:3000');
			},
			onProxyRes(proxyRes, req, res) {
				proxyRes.headers['Access-Control-Request-Origin'] = '*';
				proxyRes.headers['Access-Control-Request-Headers'] = '*';
			}
		}
	},
	...
}</code></pre>
				</div>
				<div class="code-title">配置后，重启项目，这样就可以实现跨域访问http://127.17.5.117:3000域名下的服务</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">import axios from 'axios'

let path = "http://127.0.0.1/api/mockGetJson"; // 实际访问：http://127.17.5.117:3000/api/mockGetJson
axios.get(path).then(function(resp) {
	console.log(resp.data);
}).catch(error => {
	console.log(error);
});</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'proxy',
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#proxy {
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