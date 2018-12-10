<template>
	<div id="http">
		<div class="bground">
			<div class="title">http</div>
			<div class="line"></div>
			<div class="content">
				<div>http模块基于axios模块和RESTful规范，模块封装了增删改查功能，主要实现了对后台api请求功能。http模块位于：root/src/assets/js/http.js：</div>
				<div class="code-title"></div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// http.js
import vue from 'vue';
import axios from 'axios';

/**
 * Get
 * {String} url：地址
 * {String} query：参数
 */
export const _get = ({url, query}, commit) => {
	return axios({
		method: 'get',
		url,
		params: { ...query}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res)
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};

/**
 * Post
 * {String} url：地址
 * {String} body：参数
 */
export const _post = ({url, body}, commit) => {
	return axios({
		method: 'post',
		url,
		data: { ...body}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};

/**
 * Delete
 * {String} url：地址
 * {String} body：参数
 */
export const _delete = ({url, body}, commit) => {
	return axios({
		method: 'delete',
		url,
		data: { ...body}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};

/**
 * Put
 * 用于更新操作时，需传递包含sql记录的全部字段的对象，否则缺少的属性该字段将在数据库置空。
 * {String} url：地址
 * {String} body：参数
 */
export const _put = ({url, body}, commit) => {
	return axios({
		method: 'put',
		url,
		data: { ...body}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};

/**
 * Patch
 * 用于更新操作时，需传递包含sql记录的部分字段的对象且只更新该部分字段内容。
 * {String} url：地址
 * {String} body：参数
 */
export const _patch = ({url, body}, commit) => {
	return axios({
		method: 'patch',
		url,
		data: { ...body}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};</code></pre>
				</div>
				<div class="code-title">http模块调用：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// 事件触发
let param = {};
this.$store.dispatch("getJson", param).then((json) => {
	console.log(json);
}, (error) => {
	console.log(error);
});

// 事件处理(src/vuex/modules/app/action.js) 
import { _get } from "@/assets/js/http";

let _prefix = ``; // 请求前缀
export const getJson = ({
	commit
}, query) => {
	const url = `${_prefix}/mockGetJson`;
	return _get({url, query}, commit)
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
		name: 'http',
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#http {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 10px;
		font-weight: bold;
	}
	
	.md {
		margin-top: 10px;
		font-size: 18px;
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
</style>