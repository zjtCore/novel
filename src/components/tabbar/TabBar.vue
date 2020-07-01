<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style lang="less" scoped>
#tabbar{
	position: fixed;
	display: flex;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(221, 225, 207, 0.25);
	height: 100/50rem;
	box-shadow: 0px -3px 5px rgba(100,100,10,.2);
}
</style>