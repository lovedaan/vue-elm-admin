<template>
	<div class="tree-menus">
		<ul>
		    <li v-for="(item,index) in list " :key="index">
		      <p>{{item.name}}</p>
		      <tree-menus v-if="item.cList && item.cList.length > 0" :list="item.cList"></tree-menus>
		    </li>
		  </ul>
	</div>
</template>

<script>
	export default{
		name:'treeMenus',
		props:{
			list: Array
		}
	}
</script>

<style>
</style>
