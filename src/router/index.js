import Vue from 'vue'
import VueRouter from 'vue-router'
import {menuList} from '@/router/menus'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import page401 from '../views/401.vue'
import page404 from '../views/404.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'
import orderIndex from '../views/order/index.vue'
import addOrder from '../views/order/add.vue'

import employeeIndex from '../views/user/employee/index.vue'
import addEmployee from '../views/user/employee/add.vue'

import ruleIndex from '../views/user/rule/index.vue'
import addRule from '../views/user/rule/add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
		children: [{
			path: '/home',
			name: 'home',
			component: Home
		},{
			path: '/about',
			name: 'about',
			component: About
		},{
			path: '/order',
			name: 'order',
			component: orderIndex
		}, {
			path: '/order/add',
			name: 'addOrder',
			component: addOrder
		},{
			path: '/user/employee',
			name: 'employee',
			component: employeeIndex
		}, {
			path: '/user/employee/add',
			name: 'addEmployee',
			component: addEmployee
		},{
			path: '/user/rule',
			name: 'rule',
			component: ruleIndex
		}, {
			path: '/user/rule/add',
			name: 'addRule',
			component: addRule
		}]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
	path: '/login',
	name: 'login',
	component: Login
  },
	{
		path: '/no-page',
		name: 'noPage',
		component: page404
	},
	{
		path: '/no-privilege',
		name: 'privilege',
		component: page401
	},
]

const router = new VueRouter({
  routes
})
function allPath(menus) {
	if(!menus) return menus;
	let ret = [];
	menus.forEach(item => {
		if(item.children && item.children.length) {
			ret = allPath(item.children);
		}else {
			ret.push(item.path);
		}
	})
	return ret;
}

router.beforeEach((to, from, next) => {
	let allPathList = allPath(routes);
	//let menuList = allPath(menuList);
	if(allPathList.includes(to.path)) {
		next();
	}else {
		next({
			name: 'noPage'
		});
	}
	
	
})

export default router
