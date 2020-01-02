<template>
	<div class="v-menu">
		<el-menu :default-active="activePath" class="el-menu-vertical-demo" :unique-opened="isOpen" :default-openeds="defaultOpeneds" @select="changeMenu">
			<subMenu :list="list" />
		</el-menu>
	</div>
</template>

<script>
	import subMenu from './sub-menu.vue'
	export default {
		name: 'menus',
		components: {
			subMenu,
		},
		props: {
			list: {
				type: Array
			}
		},
		data() {
			return {
				activePath: '',
				isOpen:true,
				defaultOpeneds: [],
				isOrder: false,
			}
		},
		mounted() {
			this.activePath = this.$route.path;
			
		},
		watch: {
			$route(to, from) {
				console.log(to, from);
				this.$nextTick(() => {
					let active = this.$route.path;
					//this.activePath = active;
					let actives = active.split('/');
					this.defaultOpeneds = [];
					let ret = [], str = '';
					
					actives.forEach(item => {
						if(item) {
							str += '/' + item;
							ret.push(str);
						}
					})
					this.defaultOpeneds = ret;
					if(to.path == '/order/add' && from.path == '/user/rule/add') {
						this.isOrder = true;
						setTimeout(function() {
							document.getElementById('/order').classList.add('is-active');
						}, 50);
					}else if(from.path == '/order/add' && this.isOrder){
						this.isOrder = false;
						setTimeout(function() {
							document.getElementById('/order').classList.remove('is-active');
						}, 50);
						// setTimeout(function() {
						// 	let menuItems = document.querySelectorAll('.el-menu-item');
						// 	Array.from(menuItems).forEach(item => {
						// 		item.classList.remove('is-active');
						// 	})
						// }, 50);
					}
				})
			}
		},
		methods: {
			changeMenu(path) {
				if(path != this.$route.path) {
					this.$router.push({
						path: path
					});
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.v-menu {
		width: 200px;
		// height: calc(100vh - 80px);
		// .el-menu-vertical-demo {
		// 	width: 100%;
		// 	height: 100%;
		// }
	}
</style>
