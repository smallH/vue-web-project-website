import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const _import =
	process.env.NODE_ENV == "production" ?
	require("./_import_prod.env").routerAsynFunc :
	require("./_import_dev.env");

export default new VueRouter({
	mode: 'hash',
	routes: [{
		path: '/',
		name: '@黄小泽的前端框架',
		component: _import('login/index'),
		meta: {
			requireAuth: false
		}
	}, {
		path: '/core',
		component: _import('core/index'),
		meta: {
			requireAuth: true
		},
		children: [{
				path: '/',
				name: 'vue+axios+vuex+router',
				component: _import('pages/base/introduction'),
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/base/introduction',
				component: _import('pages/base/introduction'),
				name: '介绍',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/base/initialization',
				component: _import('pages/base/initialization'),
				name: '初始化',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/param',
				component: _import('pages/action/param'),
				name: '页面明文传参',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/filter',
				component: _import('pages/action/filter'),
				name: '全局过滤',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/routerasyn',
				component: _import('pages/action/routerasyn'),
				name: '懒加载',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/jsonserver',
				component: _import('pages/action/jsonserver'),
				name: 'json-server',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/proxy',
				component: _import('pages/action/proxy'),
				name: '服务代理',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/vx',
				component: _import('pages/action/vx'),
				name: 'vuex应用',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/token',
				component: _import('pages/action/token'),
				name: 'token验证',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/iconfont',
				component: _import('pages/action/iconfont'),
				name: 'iconfont图标管理',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/http',
				component: _import('pages/action/http'),
				name: 'http',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/action/thirdjs',
				component: _import('pages/action/thirdjs'),
				name: '其它文件引用',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/comp/uiselect',
				component: _import('pages/comp/uiselect'),
				name: '下拉列',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/comp/uitable',
				component: _import('pages/comp/uitable'),
				name: '表格',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/comp/uipagination',
				component: _import('pages/comp/uipagination'),
				name: '分页',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/comp/uiconfirm',
				component: _import('pages/comp/uiconfirm'),
				name: '询问框',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/comp/uimessage',
				component: _import('pages/comp/uimessage'),
				name: '消息框',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/comp/uimap',
				component: _import('pages/comp/uimap'),
				name: '高德地图',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/other/author',
				component: _import('pages/other/author'),
				name: '作者',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/other/learn',
				component: _import('pages/other/learn'),
				name: '知识点总结',
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/pages/other/virtualdom',
				component: _import('pages/other/virtualdom'),
				name: '虚拟DOM',
				meta: {
					requireAuth: true
				}
			}
		]
	}]
})