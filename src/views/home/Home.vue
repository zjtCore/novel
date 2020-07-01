<template>
	<div id="home">
		<h1>主页</h1>
		<h2>{{$store.state.counter}}</h2>
		<button @click="aa">显示</button>
	</div>
</template>

<script>

	export default {
		name: "Home",
		methods:{
			aa:function(){
				this.$mytoast.toastShow("我们都是好朋友不许说话不许动",5000)
			}
		}
	}
</script>

<style scoped lang="less">

</style>