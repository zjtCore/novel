<template>
	<div class="left-menu">
		<ul>
			<li :class="{selectMenu:currentIndex===i}" @click="menuClick(i)" v-for="(v,i) in menuList" :key="i">{{v}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "LeftMenu",
		props:{
			menuList:{
				type:Array,
				default(){
					return{}
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			menuClick(i){
				this.currentIndex = i;
				this.$emit("pagechange",i)
			}

		}
	}
</script>

<style scoped lang="less">
	.selectMenu{
		border-left: 6/50rem solid deepskyblue;
		background-color: white;
		color: deepskyblue;
	}
	.left-menu{
		float: left;
		width: 170/50rem;
		background-color: #f6f6f6;
		font-size: 32/50rem;
		color: gray;
		ul{
			list-style: none;
			margin: 0;
			padding: 0;
		}
		li{
			list-style: none;
			height: 70/50rem;
			line-height: 70/50rem;
			text-align: center;
			margin: 0;
			padding: 0;
		}
	}

</style>