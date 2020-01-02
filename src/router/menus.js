export const menuList = [{
	id: 1,
	title: '首页',
	href: '/home',
	children: null,
	icon: 'icon-home'
}, {
	id: 9,
	title: '关于',
	href: '/about',
	children: null,
	icon: 'icon-about'
}, {
	id: 2,
	title: '订单管理',
	href: '/order',
	children: null,
	icon: 'icon-order'
}, {
	id: 3,
	title: '用户管理',
	href: '/user',
	children: [{
		id: 4,
		title: '员工管理',
		href: '/user/employee',
		icon: '',
		children: [{
			id: 8,
			title: '角色添加',
			href: '/user/employee/juese',
			icon: '',
		}]
	}, {
		id: 5,
		title: '权限管理',
		href: '/user/rule',
		icon: '',
		children: null
	}],
	icon: 'icon-employee'
}]
