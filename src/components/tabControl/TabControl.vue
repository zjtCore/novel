<template>
	<div class="tabControl">
			<div class="tabs">
				<div ref="title" @click="tabClick(i)" :class="{tabActive:currentIndex===i}" class="tab-item" v-for="(title,i) in titles" :key="i">{{title.title}}</div>
			</div>
	</div>
</template>

<script>

	export default {
		name: "TabControl",
		data(){
			return{
				currentIndex:0,
				books:[]
			}
		},
		props:{
			titles:{
				type:Array,
				default() {
					return [];
				}
			}
		},
		created(){

		},
		methods:{
			tabClick(i){
				this.currentIndex = i;
        let refText = this.$refs.title[i].innerText;
				this.$emit("childclick",refText)
			}



		}
	}
</script>

<style scoped lang="less">
.tabControl{
	.tabs{
		display: flex;
		justify-content: space-between;
		.tab-item{
			width: 200/50rem;
			text-align: center;
			padding: 10/50rem;
			font-size: 28/50rem;
			color: darkgrey;
		}
		.tabActive{
			color: #3372ff;
			border-bottom: 2px solid #3372ff;
		}
	}
}
</style>