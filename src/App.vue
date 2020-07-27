<template>
	<div id="app">

<!--		<transition mode="out-in">-->

			<keep-alive exclude="Cart">
				<router-view id="main"></router-view>
			</keep-alive>

<!--		</transition>-->
		<main-tab-bar></main-tab-bar>

	</div>
</template>
<script>
	import MainTabBar from "./components/MainTabBar";

	export default {
		name: "App",
		components: {
			MainTabBar
		}
	}
</script>
<style lang="less" scoped>
	@import "assets/css/normalize.css";
	@import "assets/css/base.css";

	#main {
		padding: 5px;
		margin-top: 80/50rem;
		width: 100%;
		height: calc(100vh - 3.6rem);
		overflow: auto;
	}

	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
	}
	.v-enter-active,
	.v-leave-active{
		transition-property: transform,opacity;
		transition-duration:1s;
	}
</style>
