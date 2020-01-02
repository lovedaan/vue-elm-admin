<template>
	<div class="main">
		<!-- 头部 -->
		<vHeader />
		<!-- 主体内容 -->
		<div class="container">
			<!-- 侧边菜单 -->
			<menus :list="menuList" />
			<div class="content">
				<div class="content-body">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
		import vHeader from '@/components/vHeader.vue'
		import menus from '@/components/menu.vue'
		import {menuList} from '@/router/menus'
		export default {
			name: 'main-page',
			components: {
				vHeader,
				menus,
			},
			data() {
				return {
					menuList,
				}
			},
		}
</script>

<style lang="less" scoped>
	.container {
		display: flex;
		.content {
			flex: 1;
			padding: 12px;
			background: #ccc;
			box-sizing: border-box;
			.content-body {
				background: #fff;
				box-shadow: 0 0 20px #eee;
				border-radius: 10px;
				width: 100%;
				height: calc(100vh - 80px);
				overflow-y: auto;
			}
		}
	}
</style>
