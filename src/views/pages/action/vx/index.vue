<template>
	<div id="vx">
		<div class="bground">
			<div class="title">vuex应用</div>
			<div class="line"></div>
			<div class="content">
				<div>
					vuex是一套组件状态管理机制，通过this.$store管理应用中的状态(state)与事件(action)。
					在实际开发中，vuex常用的两个功能有：1. 状态：状态存储和获取。2. 事件：实现异步逻辑处理，如API接口请求。
					这里要注意，通过vuex改变组件状态值时，组件是不会自动重新渲染的，要实现自动渲染可以通过...mapGetters实现，功能等同与react-redux中的connect(mapState)：
				</div>
				<div class="code-title">状态存储和获取：</div>
				<div class="param">
					<div class="param-input">
						<input type="text" v-model="setInput" />
					</div>
					<div class="param-btn" @click="setState">存储</div>
					<div class="param-input left">
						<input class="readonly" type="text" v-model="getInput" readonly/>
					</div>
					<div class="param-btn" @click="getState">获取</div>
				</div>
				<div class="code-title"></div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">//存储状态
this.$store.commit("DATA", somedata);

//获取状态
this.state.data = this.$store.getters.getData;</code></pre>
				</div>
				<!--<div class="code-title top">异步请求服务Demo：</div>
				<div class="param">
					<div class="param-input">
						<input class="readonly" type="text" v-model="axiosInput" readonly/>
					</div>
					<div class="param-btn" @click="axiosReq">请求</div>
				</div>-->
				<div class="code-title">事件驱动：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// 事件触发
let param = {};
this.$store.dispatch("getJson", query).then((json) => {
	console.log(json);
}, (error) => {
	console.log(error);
});</code></pre>
				</div>
				<div class="code-title">事件处理：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// 其中http为网络请求模块
import { _get, _post, _delete, _put } from "@/assets/js/http";

let _prefix = ``; // 请求前缀
export const getJson = ({commit}, query) => {
	const url = `${_prefix}/mockGetJson`;
	return _get({
		url,
		query
	}, commit)
	.then(json => {
		return Promise.resolve(json);
	})
	.catch(error => {
		return Promise.reject(error);
	});
};</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'vx',
		data() {
			return {
				setInput: "",
				getInput: "",
				axiosInput: ""
			}
		},
		methods: {
			setState: function() {
				// 存储状态
				this.$store.commit("DATA", this.setInput);
			},
			getState: function() {
				// 获取状态
				this.getInput = this.$store.getters.getData;
			},
			axiosReq: function() {
				// 通过vuex异步请求接口(需要启动json-server模拟数据)
				let param = {};
				this.$store.dispatch("getJson", param).then((data) => {
					this.axiosInput = (data);
				}, (error) => {
					console.log(error);
				});
			}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#vx {
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
	
	.param {
		display: flex;
		.param-input {
			width: 200px;
			input {
				font-size: 16px;
				width: 100%;
				height: 30px;
				border: solid 1px #DCDFE6;
				border-radius: 3px;
			}
			input:focus {
				outline: none;
				border: 1px solid #009688;
			}
		}
		.param-btn {
			cursor: pointer;
			border-radius: 3px;
			background-color: #009688;
			color: white;
			width: fit-content;
			padding: 5px;
			margin-left: 10px;
		}
	}
	
	.left {
		margin-left: 20px;
	}
	
	.top {
		margin-top: 30px;
	}
	
	.readonly {
		background-color: #eeeeee;
	}
</style>