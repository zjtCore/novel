<template>
	<div class="cart-bottom-bar">
		<div class="sum">
			<span class="checkBtn"></span><span>￥998</span>
		</div>
		<div class="calc">
			<span>计算(111)</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CartBottomBar"
	}
</script>

<style scoped lang="less">
.cart-bottom-bar{
	position: fixed;
	height: 80/50rem;
	left: 0;
	right: 0;
	bottom: 100/50rem;
	line-height:80/50rem;
	background-image: linear-gradient(#10a1e6, #38ccff);
	.sum{
		float: left;
		.checkBtn{
			display: inline-block;
			width: 40/50rem;
			height: 40/50rem;
			margin-top: 20/50rem;
			margin-left:20/50rem;
			border-radius: 50%;
			border: 1px solid gray;
			/*background-color: white;*/
		}
	}
	.calc{
		float: right;
	}
}
</style>