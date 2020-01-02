<template>
	<header class="header">
		<h1 class="logo">logo</h1>
		<div class="user-info">
			<span class="name">张三</span>
			<el-button type="text">退出</el-button>
		</div>
	</header>
</template>
<script>
</script>

<style lang="less" scoped>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30px;
		height: 80px;
		background: #345;
		.logo {
			width: 60px;
			height: 60px;
			border-radius: 50%;
			background: #ccc;
			text-align: center;
			line-height: 60px;
			font-size: 18px;
			font-weight: normal;
		}
		.user-info {
			display: flex;
			align-items: center;
			.name {
				margin-right: 20px;
				color: #fff;
			}
		}
	}
</style>
