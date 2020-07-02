<template>
	<div id="home">
				<!--轮播-->
				<swiper :banner="banners"></swiper>
				<!--推荐分类		-->
				<recommend ></recommend>
	</div>
</template>

<script>
	// 加载网络请求
	import {getHomeData} from "../../networks/home";

	//加载组件
	import Swiper from "../../components/swiper/Swiper";
	import Recommend from "../../components/recommend/Recommend";
	export default {
		name: "Home",
		data(){
			return{
				banners:[]
			}
		},
		components:{
			Swiper,
			Recommend
		},
		created(){
				this.getHomeDataM()
		},
		methods:{
			getHomeDataM(){
				getHomeData().then(res=>{
					let data = res.data.data;
					console.log(data);
					this.banners = data.banners
				})
			}
		}
	}
</script>

<style scoped lang="less">

</style>