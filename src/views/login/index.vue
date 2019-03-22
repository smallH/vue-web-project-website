<template>
	<div id="login">
		<div class="title">欢迎使用 vue+axios+vuex+router 前端框架</div>
		<div class="ps">（本网站即用该框架编写的参考实例，源码参考GITHUB中vue-web-project-website仓库）</div>
		<div class="nav">
			<div class="btn" @click="enter">资料</div>
			<div class="btn github" @click="github">GITHUB</div>
		</div>
	</div>
</template>

<script>
	import { setLocalStorage } from '@/assets/js/utils';

	export default {
		// 命名
		name: 'login',
		// 方法
		methods: {
			enter() {
				setLocalStorage("api_token", "api&token&value");
				this.$router.push({
					path: '/core',
					query: {
						name: "admin",
						pw: "123456"
					}
				})
			},
			github() {
				window.open("https://github.com/smallH/vue-web-project");
			}
		},
		// 入参
		props: {
			tObject: {
				type: Object,
				default: function() {
					return {}
				}
			},
			tArray: {
				type: Array,
				default: function() {
					return []
				}
			},
			tNumber: {
				type: Number,
				default: 0
			},
			tBoolean: {
				type: Boolean,
				default: false
			},
			tString: {
				type: String,
				default: ""
			}
		},
		// 变量
		data() {
			return {};
		},
		// 挂载成功
		mounted() {},
		// 组件
		components: {},
		// 过滤
		filters: {},
		// 状态监听
		watch: {},
		// 计算方法
		computed: {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.title {
		text-align: center;
		font-size: 46px;
		font-weight: bold;
		margin-top: 200px;
	}
	
	.ps {
		display: flex;
		margin-top: 10px;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 20px;
	}
	
	.nav {
		display: flex;
		margin-top: 50px;
		justify-content: center;
		align-items: center;
	}
	
	.btn {
		min-width: 140px;
		text-align: center;
		font-size: 24px;
		cursor: pointer;
		border-radius: 30px;
		background-color: #009688;
		color: white;
		width: fit-content;
		padding: 10px;
		margin-top: 0px;
	}
	
	.github {
		margin-left: 20px;
		color: gray;
		background-color: transparent;
		border: solid 1px #009688;
	}
</style>