<template>
	<div id="home">
<!--		<h2>{{$store.state.books}}</h2>-->
		<nav-bar>
			<div slot="center">当当小说网</div>
		</nav-bar>

		<!--轮播-->
		<swiper :banner="banners"></swiper>
		<!--推荐分类		-->
		<recommend></recommend>

		<div id="novel-list">
			<!--菜单切换				-->
			<tab-control :titles="titles" @childclick="childClick"></tab-control>
			<book-list :books="books"></book-list>

		</div>

	</div>
</template>

<script>
	// 加载网络请求
	import {getHomeData} from "../../networks/home";

	//加载组件
	import NavBar from "../../components/navbar/NavBar";
	import Swiper from "../../components/swiper/Swiper";
	import Recommend from "../../components/recommend/Recommend";
	import TabControl from "../../components/tabControl/TabControl";
	import BookList from "../../components/bookList/BookList";

	export default {
		name: "Home",
		data() {
			return {
				banners: [],
				titles: [
					{title: "新书"},
					{title: "经典"},
					{title: "热门"},
				],
				books:[],
				author_classics: [],
				classices: [],
				ideas: [],
				haha:[]

			}
		},
		components: {
			NavBar,
			Swiper,
			Recommend,
			TabControl,
			BookList
		},
		created() {
			this.getHomeDataM();

		},
		mounted(){
			this.$store.dispatch('getHomeDataA')
		},
		methods: {
			childClick(refText) {

				if (refText === "新书") {
					this.books= this.author_classics;
				} else if (refText === "经典") {
					this.books= this.classices;
				} else {
					this.books= this.ideas;
				}
			},
			getHomeDataM() {
				getHomeData().then(res => {
					let data = res.data.data;
					console.log(data);
					this.books = data.author_classics
					this.banners = data.banners;
					this.author_classics = data.author_classics;
					this.ideas = data.ideas;
					this.classices = data.classices;
				})
			}
		}
	}
</script>

<style scoped lang="less">
	#novel-list {
		background-color: white;
	}
</style>