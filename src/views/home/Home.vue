<template>
	<div id="home">
				<Swiper :banner="banners"></Swiper>

	</div>
</template>

<script>
	// 加载网络请求
	import {getHomeData} from "../../networks/home";

	//加载组件
	import Swiper from "../../components/swiper/Swiper";
	export default {
		name: "Home",
		data(){
			return{
				banners:[]
			}
		},
		components:{
			Swiper
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