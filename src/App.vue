<template>
	<div id="app">

		<transition mode="out-in">
			<!--			<div id="main">-->
			<keep-alive>
				<router-view id="main"></router-view>
			</keep-alive>

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
		font-size: 32/50rem;
		/*background-color: rgba(31,194,255,.3) ;*/
		background-image: linear-gradient(#10a1e6, #38ccff);
		font-weight: 600;
		font-family: "微软雅黑";
		color: white;
	}

	#main {
		padding: 5px;
		margin-top: 80/50rem;
		width: 100%;
		height: calc(100vh - 3.6rem);
		overflow: auto;
	}

	/*.v-enter{*/
	/*	opacity: 0;*/
	/*	transform: translateX(100%);*/
	/*}*/
	/*.v-leave-to{*/
	/*	opacity: 0;*/
	/*	transform: translateX(-100%);*/

	/*}*/
	/*.v-enter-active,*/
	/*.v-leave-active{*/
	/*	transition-property: transform,opacity;*/
	/*	!*transition-duration:1s;*!*/
	/*}*/




</style>
