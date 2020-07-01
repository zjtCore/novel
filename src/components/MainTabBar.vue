<template>
	<tab-bar>
		<tab-bar-item path="/home" activeColor="#159CFF">
			<img slot="item_icon" src="../assets/img/tarbar/home1.png" alt="">
			<img slot="item_icon_active" src="../assets/img/tarbar/home2.png" alt="">
			<div slot="item_text">主页</div>
		</tab-bar-item>
		<tab-bar-item path="/category" activeColor="#159CFF">
			<img slot="item_icon" src="../assets/img/tarbar/categorize1.png" alt="">
			<img slot="item_icon_active" src="../assets/img/tarbar/categorize2.png" alt="">
			<div slot="item_text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cart" activeColor="#159CFF">
			<img slot="item_icon" src="../assets/img/tarbar/shopping1.png" alt="">
			<img slot="item_icon_active" src="../assets/img/tarbar/shopping2.png" alt="">
			<div slot="item_text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/me" activeColor="#159CFF">
			<img slot="item_icon" src="../assets/img/tarbar/me1.png" alt="">
			<img slot="item_icon_active" src="../assets/img/tarbar/me2.png" alt="">
			<div slot="item_text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from "./tabbar/TabBar";
	import TabBarItem from "./tabbar/TabBarItem";

	export default {
		name: "MainTabBar",
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style scoped>

</style>