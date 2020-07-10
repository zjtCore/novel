<template>
	<div class="list-view">
		<div class="list-view-item" v-for="(i,l) in listViewData">
			<span :class="i.iconClass" :style="{'color':i.iconColor}"></span>
			<div>{{i.text}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ListView",
		data(){
			return{}
		},
		props:{
			listViewData:{
				type:Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style scoped lang="less">
.list-view{
	background-color: white;
	margin: 20/50rem 0px;
	padding: 20/50rem 0px;
	color: #333;
	.list-view-item{
		display: flex;
		height: 88/50rem;
		line-height: 88/50rem;
		span{
			font-size: 48/50rem;
			line-height: 88/50rem;
			display: inline-block;
			width: 80/50rem;
			text-align: center;
		}
		div{
			width: 100% - 80/50rem;
			border-bottom: 1px solid rgba(100,100,100,.1);
			font-size: 40/50rem;
			.aa{
				width: 400px;
			}
		}
	}
}
</style>