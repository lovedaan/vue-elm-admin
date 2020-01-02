<template>
	<div>
		<template v-for="(item, index) of list">
			<el-submenu v-if="item.children && item.children.length > 0" :index="item.href" :key="item.id">
				<template slot="title"><i class="el-icon-message"></i>{{item.title}}</template>
				<!-- <el-menu-item v-for="(subNav, idx) of item.children" :index="subNav.href" :key="idx">{{subNav.title}}</el-menu-item> -->
				<subMenu :list="item.children" />
			</el-submenu>
			<el-menu-item v-else :key="item.id" :index="item.href" :id="item.href"><i class="el-icon-setting"></i>{{item.title}}</el-menu-item>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'subMenu',
		props: {
			list: Array
		}
	}
</script>

<style>
</style>
