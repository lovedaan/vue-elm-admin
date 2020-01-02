<template>
	<div class="order-page">
		<el-button type="primary" @click="add" style="margin-bottom: 20px;">添加数据</el-button>
		<h1>这是员工管理列表</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			]
		};
	},
	methods: {
		add() {
			this.$router.push({
				path: '/user/employee/add'
			});
		}
	}
};
</script>

<style lang="less" scoped="scoped">
	.order-page {
		padding: 20px;
	}
</style>
