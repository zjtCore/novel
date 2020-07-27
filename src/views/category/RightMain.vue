<template>
	<div class="right-main">
		<img v-for="(v,i) in books" :src="v" alt="" :key="i">
	</div>
</template>

<script>
	export default {
		name: "RightMain",
		props:{
			books:{
				type:Array,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.right-main{
		float: right;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width:calc(100% - 3.5rem);
		background-color: white;
		img{
			width: 3rem;
			height: 3.5rem;
			margin-bottom: 20/50rem;
			box-shadow: 0px 0px 5px gray;
		}
	}
</style>