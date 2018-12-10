<template>
	<div id="tokencheck">
		<div class="bground">
			<div class="title">axios配置与token验证</div>
			<div class="line"></div>
			<div class="content">
				<div>token验证，是指应用于检测用户打开某页面时是否已经登录或是否有权限打开的验证服务。当token验证失败时，返回登录界面或提示相应语句。获取token值后一般存储在本地缓存中，有一定的时效性，每次向服务端请求数据时，会配置在请求链接的Headers中，通过请求拦截添加，相关代码封装在src/assets/js/middleware.js。初始token可在登录时从服务端获取，通过store.commit('TOKEN', token)存储状态。</div>
				<div class="code-title">axios配置：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// middleware.js
// Axios配置：网络请求时token验证
export const SetAxiosConfig = function(router, store) {
	Vue.prototype.$http = axios;
	let _prefix = '';

	if(process.env.NODE_ENV == 'production') {
		_prefix = `${process.env.HOST}/api`
	} else {
		_prefix = '/api'
	}

	axios.defaults.baseURL = _prefix;

	// 请求拦截，在头部加入token
	axios.interceptors.request.use(
		function(config) {
			let token = '';
			token = store.state.app.token;
			if(token) {
				token = token;
			} else if(getLocalStorage('token')) {
				token = getLocalStorage('token');
				store.commit('TOKEN', token);
			}
			if(token) {
				// 存在将token写入请求头部"TOKEN"
				config.headers['TOKEN'] = `${token}`;
			}
			return config;
		},
		function(error) {
			return Promise.reject(error);
		}
	);

	// 请求结果
	axios.interceptors.response.use(function(response) {
		return response;
	}, function(error) {
		if(error.response) {
			switch(error.response.state) {
				case 411:
					// 如411错误为没有token值
					// 返回处理状态和信息的Promise对象
					break;
				case 412:
					// 如412错误为入参不正确
					// 返回处理状态和信息的Promise对象
					break;
				default:
					return Promise.reject(error.response.data)
					break;
			}
		}
	});
}

// main.js
import {SetAxiosConfig} from '@/assets/js/middleware';
import router from './router';
import store from './vuex/store';

SetAxiosConfig(router, store);

let path = "http://127.0.0.1/api/mockGetJson"; // 访问json-server模拟接口
axios.get(path).then(function(resp) {
	console.log(resp);
}).catch(error => {
	console.log(error);
});</code></pre>
				</div>
				<div class="code-title">router配置：路由跳转时token验证</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// Router配置：路由跳转时token验证
export const SetRouterTransition = function(router, store) {
	/* router before */
	router.beforeEach((to, from, next) => {
		// check this router need auth
		if(to.meta.requireAuth) {
			if(store.state.app.token || getLocalStorage('api_token')) {
				next();
			} else {
				next({
					path: '/',
					query: {
						redirect: to.fullPath
					}
				})
			}
		} else {
			next();
		}
	});

	/* router after */
	router.afterEach((transition) => {
		let title = transition.name;
		document.title = title;
	});
}
					
// main.js
import {SetRouterTransition} from '@/assets/js/middleware';
import router from './router';
import store from './vuex/store';

SetRouterTransition(router, store);</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tokencheck',
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#tokencheck {
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