<template>
	<div class="login-page">
		<el-card class="box-card">
		  <div class="login-title">CMS-后台管理系统</div>
		  <div class="form-item"><el-input v-model="username" placeholder="请输入用户名"></el-input></div>
		  <div class="form-item"><el-input v-model="password" type="password" placeholder="请输入密码"></el-input></div>
		  <div class="form-item"><el-button class="login-btn" type="primary" @click="login">登录</el-button></div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			login() {
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.login-page {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: linear-gradient(top, skyblue, #fff);
		.box-card {
			width: 410px;
			background: #fff;
			border-radius: 10px;
			box-shadow: 0 0 20px #eee;
			padding: 20px;
			.login-title {
				text-align: center;
				font-size: 26px;
				font-weight: 600;
				padding: 10px 0;
				margin-bottom: 10px;
			}
			.form-item {
				margin-bottom: 15px;
			}
			.login-btn {
				width: 100%;
			}
		}
	}
</style>
