<template>
	<div>
		<book-list :books="novels"></book-list>
	</div>
</template>

<script>
	import BookList from "../../../components/bookList/BookList";
	import {getHomeData} from "../../../networks/home";
	export default {
		name: "Hot",
		data(){
			return{
				novels:[]
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
					this.novels = data.novels
				})
			}
		}
	}
</script>

<style scoped>

</style>