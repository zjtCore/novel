<template>
	<div id="app">
		<div id="header">当当小说网</div>
		<transition mode="out-in">
<!--			<div id="main">-->
				<router-view id="main"></router-view>
<!--			</div>-->
		</transition>
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

		#header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
			height: 80/50rem;
			text-align: center;
			line-height: 80/50rem;
			font-size: 40/50rem;
		}

		#main {
      margin-top: 80/50rem;
      width: 100%;
			border:1px solid green;
			height: calc(100vh - 3.6rem);
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
		transition: all 0.5s ease;
	}




</style>
