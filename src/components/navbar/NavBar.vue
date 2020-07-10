<template>
	<div class="nav-bar">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</div>
</template>

<script>
	export default {
		name: "NavBar"
	}
</script>

<style scoped lang="less">
.nav-bar{
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	height: 80/50rem;
	text-align: center;
	line-height: 80/50rem;
	font-size: 32/50rem;
	background-image: linear-gradient(#10a1e6, #38ccff);
	font-weight: 600;
	font-family: "微软雅黑";
	color: white;
	div{
		flex: 1;
	}
}
</style>