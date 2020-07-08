<template>
	<div id="news">
			<book-list :books="news"></book-list>
	</div>
</template>

<script>
	import BookList from "../../../components/bookList/BookList";
	import {getHomeData} from "../../../networks/home";

	export default {
		name: "News",
		data(){
			return{
				news:[]
			}
		},
		created(){
				this.getHomeDataM()
		},
		components:{
			BookList
		},
		methods:{
			getHomeDataM(){
				getHomeData().then(res=>{
					let data = res.data.data;

					this.news = data.ideas
				})
			}
		}
	}
</script>

<style scoped>

</style>