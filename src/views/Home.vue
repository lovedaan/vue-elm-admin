<template>
	<div class="home-page">
		<dotType :list="list" @change="selectChange" />
		<div class="footer-btn">
			<el-button type="primary" @click="submit">提交</el-button>
		</div>
		<!-- <slide /> -->
	</div>
</template>

<script>
	import dotType from '@/components/dot-type.vue'
	//import slide from '@/components/slide.vue'
	export default {
		components: {
			dotType,
			// slide
		},
		data() {
			return {
				list: [], // 接口返回的已选择的证件列表
				resList: [] // 修改后的证件列表
			};
		},
		mounted() {
			// 模拟接口返回数据
			setTimeout(() => {
				this.list = [{
					id: '1',
					name: '身份证',
					code: '21341244'
				}, {
					id: '2',
					name: '港澳通行证',
					code: '9999999'
				}];
				this.resList = [{
					id: '1',
					name: '身份证',
					code: '21341244'
				}, {
					id: '2',
					name: '港澳通行证',
					code: '9999999'
				}];
			}, 2000)
		},
		methods: {
			selectChange(res) {
				this.resList = res;
			},
			isEmptyList(data) {
				if(!data.length) return false;
				for(let i = 0; i < data.length; i++) {
					if(!data[i].code) {
						return false;
					}
				}
				return true;
			},
			submit() {
				let isEmpty = this.isEmptyList(this.resList);
				if(!isEmpty) {
					this.$message.error('证件号码不能为空')
				}
				console.log(this.resList);
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
  .home-page {
		padding: 20px;
		.footer-btn {
			margin-top: 20px;
		}
	}
</style>