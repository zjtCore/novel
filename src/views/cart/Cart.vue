<template>
	<div id="cart">
		<nav-bar>
		<div slot="center">购物车(0)</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from "../../components/navbar/NavBar";

	export default {
		name: "Cart",
		components:{
			NavBar,

		}
	}
</script>

<style scoped lang="less">

</style>