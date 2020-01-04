<template>
	<div class="select-wrap">
		<el-select v-model="optionsModel" multiple @change="changeSelect" placeholder="请选择证件类型">
			<el-option
				v-for="item in options"
				:key="item.id"
				:label="item.name"
				:value="item.id">
			</el-option>
		</el-select>
		<div class="result">
			<div class="result-item" v-for="(item, index) of selectedList" :key="index">
				<span class="label">{{item.name}}</span>
				<el-input @change="inputChange" v-model="item.code" style="width: 200px;" placeholder="请输入证件号码"></el-input>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['list'],
		watch: {
			list(val) {
				this.lock = false;
				this.handleList(val)
			}
		},
		data() {
			return {
				selectedList: [],
				optionsModel: [],
				lock: true
			}
		},
		mounted() {
			this.initData();
		},
		methods: {
			initData() {
				// 接口请求证件列表数据
				setTimeout(() => {
					this.options = [{
						id: '1',
						name: '身份证'
					}, {
						id: '2',
						name: '港澳通行证'
					}, {
						id: '3',
						name: '台胞证'
					}, {
						id: '4',
						name: '护照'
					}, {
						id: '5',
						name: '学生证'
					}];
				}, 3000);
			},
			// 监听详情接口返回的已选数据
			handleList(data) {
				this.selectedList = [...data];
				this.optionsModel = data.map(item => item.id);
				this.$emit('change', this.selectedList);
			},
			// 监听文本框输入变化
			inputChange(val) {
				let t = setTimeout(() => {
					clearTimeout(t);
					this.$emit('change', this.selectedList);
				}, 100)
			},
			// select框改变
			changeSelect(val) {
			 if(!this.lock) {
					let t = setTimeout(() => {
						this.lock = true;
						clearTimeout(t);
					}, 200)
					return;
				};
				let ret = [];
				this.options.forEach(item => {
					if(val.includes(item.id)) {
						let code = '';
						let index1 = this.list.findIndex(r => r.id === item.id);
						let index2 = this.selectedList.findIndex(r => r.id === item.id);
						if(index1 >= 0 && index2 >= 0) {
							code = this.selectedList[index1].code; 
						}
						ret.push({...item, code});
					}
				})
				this.selectedList = ret;
				this.$emit('change',this.selectedList);
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.select-wrap {
		.result {
			margin-top: 20px;
			.result-item {
				display: flex;
				align-items: center;
				margin-bottom: 20px;
				.label {
					width: 80px;
					margin-right: 20px;
				}
			}
		}
	}
</style>
