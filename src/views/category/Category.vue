<template>
	<div id="category">
		<nav-bar>
			<div slot="center">小说分类</div>
		</nav-bar>
		<div class="category-main">
			<left-menu :menu-list="menus" @pagechange="pageChange"></left-menu>
			<right-main :books="booksCate"></right-main>
		</div>
	</div>
</template>

<script>
	import NavBar from "../../components/navbar/NavBar";
	import LeftMenu from "./LeftMenu";
	import RightMain from "./RightMain";

	import {getHomeData} from "../../networks/home";
	export default {
		name: "Category",
		data(){
			return {
				menus:["中国小说","魔幻小说","社会","武侠","历史","财经","军事","情感","影视小说","官场小说"],
				books:[],
				booksCate:[],
				page:0
			}
		},
		created(){
			this.getHomeDataM();
		},
		components:{
			NavBar,
			LeftMenu,
			RightMain
		},
		methods:{
			getHomeDataM(){
				getHomeData().then(res=>{
					console.log(res);
					let data = res.data.data;
					console.log(data);
					for(let i=0;i<50;i++){
						this.books.push(data.author_classics[i].img_src)
						this.books.push(data.classices[i].img_src)
						this.books.push(data.novels[i].img_src)
						this.books.push(data.ideas[i].img_src)
					}
					this.booksCate=[]
					for(let i=0;i<20;i++){
						this.booksCate.push(this.books[i])
					}
				})
			},
			pageChange(i){
				this.page = i;
				this.booksCate=[]
				console.log(this.page)
				for(let i=this.page*20;i<this.page*20+20;i++){
					this.booksCate.push(this.books[i])
				}
			}
		}
	}
</script>

<style scoped lang="less">
#category{

	.category-main{

	}
}
</style>