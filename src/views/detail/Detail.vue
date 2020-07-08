<template>
	<div class="detail">
		<detail-nav-bar></detail-nav-bar>
		<img :src="bookDetail.imgSrc" alt="">
		<div class="book-price">
			<span class="cost_price">{{bookDetail.cost_price}}</span>
			<span class="price">{{bookDetail.price}}</span>
		</div>
		<h4 class="author">{{bookDetail.author}}</h4>
		<hr>
		<h4>书籍简介</h4>
		<hr>
		<div class="desc">{{bookDetail.desc}}</div>
		<h4>更多</h4>
		<hr>
		<book-list class="book-list" :books="books"></book-list>
		<hr>
     <detail-bottom-bar></detail-bottom-bar>
	</div>
</template>

<script>

	import DetailNavBar from "./DetailNavBar";
	import BookList from "../../components/bookList/BookList";
	import DetailBottomBar from "./DetailBottomBar";
	import {getHomeData} from "../../networks/home";

	export default {
		name: "Detail",
		data(){
			return{
				books:[]
			}
		},
		created(){
			this.getHomeDataM()
		},
		components:{
			DetailNavBar,
			BookList,
			DetailBottomBar
		},
		computed:{
			bookDetail(){
				return this.$route.query;
			}
		},
    methods:{
			getHomeDataM() {
				getHomeData().then(res => {
					let data = res.data.data;
					this.books = data.novels

				})
			}
		}
	}
</script>

<style scoped lang="less">
.detail{
	img{
		width: 70%;
		margin-left: 15%;
	}
	.book-price{
		font-size: 32/50rem;
		.cost_price{
			text-decoration: line-through;
		}
		.price{
			color: red;
			margin-left: 10/50rem;
		}
	}
	.desc{
		font-size: 28/50rem;
		color: gray;
		line-height: 50/50rem;
	}
	.book-list{
		background-color: white;
	}
}
</style>