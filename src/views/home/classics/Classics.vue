<template>
	<div>
		<book-list :books="classices"></book-list>
	</div>
</template>

<script>
	import BookList from "../../../components/bookList/BookList";
	import {getHomeData} from "../../../networks/home";
	export default {
		name: "Classics",
		data(){
			return{
				classices:[]
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

					this.classices = data.classices
				})
			}
		}
	}
</script>

<style scoped>

</style>