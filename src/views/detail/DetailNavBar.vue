<template>
	<div class="detailNavBar">
		<a href="javascript:;" @click="backPre">
			<img src="~assets/img/back.png" alt="">
		</a>
		商品详情页
	</div>
</template>

<script>
	export default {
		name: "DetailNavBar",
		methods:{
			backPre(){
				this.$router.push("/home")
			}
		}
	}
</script>

<style scoped lang="less">
.detailNavBar{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	font-size: 32/50rem;
	height: 80/50rem;
	line-height: 80/50rem;
	text-align: center;
	background-image: linear-gradient(#10a1e6, #38ccff);
	font-weight: 600;
	font-family: "微软雅黑";
	color: white;
	img{
		position: absolute;
		width: 30/50rem;
		height: 50/50rem;
		top: 15/50rem;
		left: 20/50rem;
	}
}
</style>